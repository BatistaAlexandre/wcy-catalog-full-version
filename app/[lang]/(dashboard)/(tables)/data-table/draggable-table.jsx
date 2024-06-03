"use client"
import { Grip } from "lucide-react";
import React, { useState } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor, closestCenter, } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
function DraggableTable({ columns,initialData }) {
  const [data, setData] = useState(initialData);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setData((currentData) => {
        const oldIndex = currentData.findIndex(item => item.id === active.id);
        const newIndex = currentData.findIndex(item => item.id === over.id);
        return arrayMove(currentData, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        <div className='w-full h-full overflow-hidden'>
          <Table className="overflow-hidden">
            <TableHeader className="bg-default-100">
              <TableRow>
                {
                  columns.map(column => (
                    <TableHead key={column} >{column}</TableHead>
                  ))
                }
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <DraggableRow key={item.id} id={item.id} data={item} />
              ))}
            </TableBody>
          </Table>
        </div>
      </SortableContext>
    </DndContext>
  );
}

function DraggableRow({ id, data }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow 
    ref={setNodeRef}
     style={style}
      {...attributes} 
      {...listeners}
      className="cursor-move"
      >
      <TableCell>
      <Button
            type="button"
            size="icon"
            className="h-5 w-5 bg-default-100 rounded hover:bg-default-200 cursor-move ltr:mr-2 rtl:ml-2"
          >
            <Grip className="w-3 h-3 text-default-400" />
          </Button>
        {data.id}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.age}</TableCell>
      <TableCell>{data.point}</TableCell>
    </TableRow>
  );
}

export default DraggableTable;
