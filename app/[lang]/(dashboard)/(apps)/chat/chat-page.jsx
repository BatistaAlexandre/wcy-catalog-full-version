"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactList from "./contact-list";
import { useState } from "react";
import Blank from "./blank";
import ContactInfo from "./contact-info";
import MessageHeader from "./message-header";
import MessageFooter from "./message-footer";
import Messages from "./messages";
import {
  getContacts,
  getMessages,
  getProfile,
  sendMessage,
  deleteMessage,
} from "./chat-config";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import MyProfileHeader from "./my-profile-header";
import EmptyMessage from "./empty-message";
import Loader from "./loader";
import { isObjectNotEmpty } from "@/lib/utils";
import SearchMessages from "./features/search-messages";
import Image from "next/image";

export const ChatPage = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const [showInfo, setShowInfo] = useState(true);
  const queryClient = useQueryClient();
  // Memoize getMessages using useCallback
  const getMessagesCallback = useCallback((chatId) => getMessages(chatId), []);
  // reply state
  const [replay, setReply] = useState(false);
  const [replayData, setReplyData] = useState({});

  // search state
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const [pinnedMessages, setPinnedMessages] = useState([]);

  const {
    isLoading,
    isError,
    data: contacts,
    error,
    refetch: refetchContact,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getContacts(),
    keepPreviousData: true,
  });
  const {
    isLoading: messageLoading,
    isError: messageIsError,
    data: chats,
    error: messageError,
    refetch: refetchMessage,
  } = useQuery({
    queryKey: ["message", selectedChatId],
    queryFn: () => getMessagesCallback(selectedChatId),
    keepPreviousData: true,
  });
  const {
    isLoading: profileLoading,
    isError: profileIsError,
    data: profileData,
    error: profileError,
    refetch: refetchProfile,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    keepPreviousData: true,
  });
  const messageMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  const onDelete = (selectedChatId, index) => {
    const obj = { selectedChatId, index };
    deleteMutation.mutate(obj);
  };

  const openChat = (chatId) => {
    setSelectedChatId(chatId);
    setReply(false);
  };
  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };
  const handleSendMessage = (message) => {
    if (!selectedChatId || !message) return;

    const newMessage = {
      message: message,
      contact: { id: selectedChatId },
      replayMetadata: isObjectNotEmpty(replayData),
    };
    messageMutation.mutate(newMessage);
    console.log(message, "ami msg");
  };
  const chatHeightRef = useRef(null);

  // replay message
  const handleReply = (data, contact) => {
    const newObj = {
      message: data,
      contact,
    };
    setReply(true);
    setReplyData(newObj);
  };

  useEffect(() => {
    if (chatHeightRef.current) {
      chatHeightRef.current.scrollTo({
        top: chatHeightRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [handleSendMessage, contacts]);

  // handle search bar
  const handleSetIsOpenSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };
  // handle pin note
  const handlePinNote = (note) => {
    setPinnedMessages([...pinnedMessages, note]);
    console.log(pinnedMessages);
  };
  return (
    <div className="flex gap-5 app-height  relative rtl:space-x-reverse">
      <div className="transition-all duration-150 flex-none  lg:w-[260px]">
        <Card className="h-full pb-0">
          <CardHeader className="border-none pb-0 mb-0">
            <MyProfileHeader profile={profileData} />
          </CardHeader>
          <CardContent className="pt-0 px-0   h-[calc(100%-170px)] ">
            <ScrollArea className="h-full">
              {isLoading ? (
                <Loader />
              ) : (
                contacts?.contacts?.map((contact) => (
                  <ContactList
                    key={contact.id}
                    contact={contact}
                    selectedChatId={selectedChatId}
                    openChat={openChat}
                  />
                ))
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
      {/* chat sidebar  end*/}
      {/* chat messages start */}
      {selectedChatId ? (
        <div className="flex-1 ">
          <div className=" flex space-x-5 h-full rtl:space-x-reverse">
            <div className="flex-1">
              <Card className="h-full flex flex-col ">
                <CardHeader className="flex-none mb-1">
                  <MessageHeader
                    showInfo={showInfo}
                    handleShowInfo={handleShowInfo}
                    profile={profileData}
                  />
                </CardHeader>
                {isOpenSearch && (
                  <SearchMessages
                    handleSetIsOpenSearch={handleSetIsOpenSearch}
                  />
                )}

                <CardContent className="px-0 relative flex-1 overflow-y-auto">
                  <div
                    className="h-full overflow-y-auto no-scrollbar"
                    ref={chatHeightRef}
                  >
                    {messageLoading ? (
                      <Loader />
                    ) : (
                      <>
                        {messageIsError ? (
                          <EmptyMessage />
                        ) : (
                          chats?.chat?.chat?.map((message, i) => (
                            <Messages
                              key={`message-list-${i}`}
                              message={message}
                              contact={chats?.contact}
                              profile={profileData}
                              onDelete={onDelete}
                              index={i}
                              selectedChatId={selectedChatId}
                              handleReply={handleReply}
                              replayData={replayData}
                              handlePinNote={handlePinNote}
                            />
                          ))
                        )}
                      </>
                    )}
                    {pinnedMessages.length > 0 && (
                      <div>
                        {pinnedMessages?.map((msg, i) => (
                          <div key={i} className="text-xs text-default-700">
                            You pinned a message.{" "}
                            <Dialog>
                              <DialogTrigger asChild>
                                <span className=" font-bold   text-primary cursor-pointer">
                                  See All
                                </span>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Pinned messages</DialogTitle>
                                  <DialogDescription>
                                    {pinnedMessages.map(
                                      (pinnedMessage, index) => (
                                        <div key={index}>
                                          <div className="h-10 w-10">
                                            <Image
                                              src={pinnedMessage.avatar}
                                              alt=""
                                              className="w-full h-full rounded-full object-cover"
                                            />
                                          </div>

                                          {pinnedMessage.note}
                                        </div>
                                      )
                                    )}
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex-none flex-col px-0 py-0 pb-6">
                  <MessageFooter
                    handleSendMessage={handleSendMessage}
                    replay={replay}
                    setReply={setReply}
                    replayData={replayData}
                  />
                </CardFooter>
              </Card>
            </div>

            {showInfo && (
              <ContactInfo handleSetIsOpenSearch={handleSetIsOpenSearch} />
            )}
          </div>
        </div>
      ) : (
        <Blank />
      )}
    </div>
  );
};
