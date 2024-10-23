"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";

export default function Calendar() {
  return (
    <div className="flex flex-col space-y-4">
      <DatePickerWithRange />
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-sm">Team Meeting (10:00 AM)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-sm">Project Review (2:00 PM)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-orange-500" />
          <span className="text-sm">Client Call (4:30 PM)</span>
        </div>
      </div>
    </div>
  );
}