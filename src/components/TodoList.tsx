"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>

      {/* List */}
      <ScrollArea className="h-[400px] mt-4">
        <div className="flex flex-col space-y-4 p-4">
          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>

          {/* list Item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Are you want subscribe it?
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;

/* import { format } from "date-fns"

    const date = new Date(2025, 0, 23) // Jan 23, 2025

    console.log(format(date, "P"))    // 01/23/2025
    console.log(format(date, "PP"))   // Jan 23, 2025
    console.log(format(date, "PPP"))  // January 23rd, 2025
    console.log(format(date, "PPPP")) // Thursday, January 23rd, 2025
 */
