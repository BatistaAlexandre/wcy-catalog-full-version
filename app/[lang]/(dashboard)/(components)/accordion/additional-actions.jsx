import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger as Trigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
const AccordionTrigger = ({ children, value, activeItem, setActiveItem }) => {
  const isOpen = activeItem === value;

  const toggleOpen = () => {
    setActiveItem(isOpen ? null : value);
  };
  return (
    <Trigger arrow onClick={toggleOpen}>
      <div className=" flex gap-2  items-center">
        <div
          className={cn(
            " h-4 w-4  inline-flex items-center justify-center rounded border border-slate-300 dark:border-slate-500",
            {
              "": !isOpen,
              "bg-primary text-primary-foreground": isOpen,
            }
          )}
        >
          {isOpen ? <Check className=" h-4 w-4" /> : null}
        </div>

        <div> {children}</div>
      </div>
    </Trigger>
  );
};

const AdditionalActions = () => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <Accordion type="single" collapsible className="w-full  space-y-3.5">
      <AccordionItem value="item-1">
        <AccordionTrigger
          value="item-1"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          Accordion 1
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          value="item-2"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          Accordion 2
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger
          value="item-3"
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        >
          Accordion 3
        </AccordionTrigger>
        <AccordionContent>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin
          topping. Sesame snaps icing marzipan gummi bears macaroon dragée
          danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer
          gummi bears marshmallow pastry pie.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AdditionalActions;
