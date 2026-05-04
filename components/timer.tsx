"use client";

import { useMutation } from "convex/react";
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";

interface TimerProps {
  taskId: Id<"tasks">;
  taskName?: string;
  timerStartedAt: number | undefined;
  totalTimeSpent: number;
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const displayHours = hours;
  const displayMinutes = minutes % 60;
  const displaySeconds = seconds % 60;

  if (hours > 0) {
    return `${displayHours}h ${displayMinutes.toString().padStart(2, "0")}m`;
  }
  if (minutes > 0) {
    return `${displayMinutes}m ${displaySeconds.toString().padStart(2, "0")}s`;
  }
  return `${displaySeconds}s`;
}

export function Timer({
  taskId,
  taskName,
  timerStartedAt,
  totalTimeSpent,
}: TimerProps) {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const startTimer = useMutation(api.tasks.startTimer);
  const stopTimer = useMutation(api.tasks.stopTimer);
  const isRunningRef = useRef(false);

  const isRunning = !!timerStartedAt;
  isRunningRef.current = isRunning;

  const stopTimerCallback = useCallback(() => {
    stopTimer({ id: taskId });
    toast.warning("Timer paused due to interruptions", {
      position: "top-right",
      duration: 5000,
    });
  }, [stopTimer, taskId]);

  // Stop timer when browser/tab is closing or hidden
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isRunningRef.current) {
        stopTimerCallback();
        event.preventDefault();
        // For older browsers, specify returnValue
        event.returnValue = "";
        // Fire-and-forget: attempt to stop the timer
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [stopTimerCallback]);

  useEffect(() => {
    if (isRunning) {
      setCurrentTime(Date.now());
    }
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const elapsed = isRunning
    ? totalTimeSpent + (currentTime - timerStartedAt)
    : totalTimeSpent;

  useEffect(() => {
    if (isRunning && taskName) {
      document.title = `${formatTime(elapsed)} - ${taskName} | checklify`;
    } else {
      // Allow Next.js or other tasks to reset the title gracefully
      // But we can eagerly reset it if it was our timer that just stopped
      if (document.title.includes(" | checklify")) {
        document.title = "checklify";
      }
    }

    // Cleanup when component unmounts
    return () => {
      if (isRunning && taskName && document.title.includes(" | checklify")) {
        document.title = "checklify";
      }
    };
  }, [elapsed, isRunning, taskName]);

  const handleToggle = () => {
    if (isRunning) {
      stopTimer({ id: taskId });
    } else {
      startTimer({ id: taskId });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`font-mono text-xs tabular-nums ${isRunning ? "text-green-400" : "text-muted-foreground"}`}>
        {formatTime(elapsed)}
      </span>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={handleToggle}
        className={`h-6 w-6 ${isRunning ? "text-green-400 hover:text-green-300" : "text-muted-foreground hover:text-foreground"}`}>
        {isRunning ? (
          <Pause className="h-3 w-3" />
        ) : (
          <Play className="h-3 w-3" />
        )}
      </Button>
    </div>
  );
}
