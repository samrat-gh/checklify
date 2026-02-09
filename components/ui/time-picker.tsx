"use client";

import { Clock, X } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { TimePeriodSelect } from "./period-select";
import { TimePickerInput } from "./time-picker-input";
import { display12HourValue, type Period } from "./time-picker-utils";

interface TimePickerProps {
  value?: string; // HH:mm format (24-hour)
  onChange?: (time: string | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function TimePicker({
  value,
  onChange,
  placeholder = "Select time",
  className,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [period, setPeriod] = React.useState<Period>("AM");

  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const periodRef = React.useRef<HTMLButtonElement>(null);

  // Parse HH:mm string to Date
  const parseTimeToDate = React.useCallback((time: string): Date => {
    const [h, m] = time.split(":");
    const d = new Date();
    d.setHours(Number.parseInt(h, 10), Number.parseInt(m, 10), 0, 0);
    return d;
  }, []);

  // Format Date to HH:mm string
  const formatDateToTime = React.useCallback((d: Date): string => {
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }, []);

  // Sync internal date state from value prop
  React.useEffect(() => {
    if (value) {
      const d = parseTimeToDate(value);
      setDate(d);
      setPeriod(d.getHours() >= 12 ? "PM" : "AM");
    } else {
      setDate(undefined);
    }
  }, [value, parseTimeToDate]);

  // Handle internal date change and propagate to parent
  const handleSetDate = React.useCallback(
    (newDate: Date | undefined) => {
      setDate(newDate);
      if (newDate) {
        setPeriod(newDate.getHours() >= 12 ? "PM" : "AM");
        onChange?.(formatDateToTime(newDate));
      }
    },
    [formatDateToTime, onChange],
  );

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDate(undefined);
    setPeriod("AM");
    onChange?.(undefined);
  };

  const formatDisplayTime = (time: string) => {
    const [h, m] = time.split(":");
    const hour = Number.parseInt(h, 10);
    const hour12 = display12HourValue(hour);
    const ampm = hour >= 12 ? "PM" : "AM";
    return `${hour12}:${m} ${ampm}`;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "group w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className,
          )}
        >
          <Clock className="mr-2 h-4 w-4 shrink-0" />
          <span className="flex-1">
            {value ? formatDisplayTime(value) : placeholder}
          </span>
          {value && (
            // biome-ignore lint/a11y/useKeyWithClickEvents: Clear action is supplementary, parent button is the main interactive element
            // biome-ignore lint/a11y/noStaticElementInteractions: Using span to avoid nested button hydration error
            <span
              onClick={handleClear}
              className="ml-2 cursor-pointer rounded p-0.5 opacity-0 transition-opacity hover:bg-accent group-hover:opacity-100"
            >
              <X className="h-3.5 w-3.5" />
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-neutral-950 p-4" align="start">
        <div className="flex items-end gap-2">
          <div className="grid gap-1 text-center">
            <Label htmlFor="hours" className="text-xs">
              Hours
            </Label>
            <TimePickerInput
              picker="12hours"
              period={period}
              date={date}
              setDate={handleSetDate}
              ref={hourRef}
              onRightFocus={() => minuteRef.current?.focus()}
            />
          </div>
          <div className="grid gap-1 text-center">
            <Label htmlFor="minutes" className="text-xs">
              Minutes
            </Label>
            <TimePickerInput
              picker="minutes"
              date={date}
              setDate={handleSetDate}
              ref={minuteRef}
              onLeftFocus={() => hourRef.current?.focus()}
              onRightFocus={() => periodRef.current?.focus()}
            />
          </div>
          <div className="grid gap-1 text-center">
            <Label htmlFor="period" className="text-xs">
              Period
            </Label>
            <TimePeriodSelect
              period={period}
              setPeriod={setPeriod}
              date={date}
              setDate={handleSetDate}
              ref={periodRef}
              onLeftFocus={() => minuteRef.current?.focus()}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setDate(undefined);
              setPeriod("AM");
              onChange?.(undefined);
              setOpen(false);
            }}
          >
            Clear
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
