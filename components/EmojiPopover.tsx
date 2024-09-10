"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Annoyed } from "lucide-react";

interface EmojiPopoverProps {
  onEmojiSelect: (emoji: any) => void;
}

const EmojiPopover = ({ onEmojiSelect }: EmojiPopoverProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const onSelect = (emoji: any) => {
    onEmojiSelect(emoji);
    setPopoverOpen(false);

    setTimeout(() => {
      setTooltipOpen(false);
    }, 5000);
  };

  return (
    <TooltipProvider>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <Tooltip
          open={tooltipOpen}
          onOpenChange={setTooltipOpen}
          delayDuration={50}
        >
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>
              <Annoyed className='w-5 h-5 text-blue-600 cursor-pointer' />
            </TooltipTrigger>
          </PopoverTrigger>
          <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
            <p>Emoji</p>
          </TooltipContent>
        </Tooltip>
        <PopoverContent className='p-0 w-full border-none shadow-none'>
          <Picker data={data} onEmojiSelect={onSelect} />
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
};

export default EmojiPopover;
