"use client";

import { useMutation, useQuery } from "convex/react";
import { format, parse } from "date-fns";
import {
  Calendar,
  Check,
  ChevronDown,
  Circle,
  Clock,
  FlagTriangleRight,
  FolderPlus,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { Timer } from "@/components/timer";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePicker } from "@/components/ui/time-picker";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

// Color options for projects
const PROJECT_COLORS = [
  { name: "Gray", value: "#6b7280" },
  { name: "Red", value: "#ef4444" },
  { name: "Orange", value: "#f97316" },
  { name: "Yellow", value: "#eab308" },
  { name: "Green", value: "#22c55e" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Purple", value: "#a855f7" },
  { name: "Pink", value: "#ec4899" },
];

type TaskStatus = "open" | "in-progress" | "closed";

interface TaskWithProject {
  _id: Id<"tasks">;
  _creationTime: number;
  text: string;
  status: TaskStatus;
  projectId?: Id<"projects">;
  priority?: boolean;
  scheduledDate?: string;
  scheduledTime?: string;
  timerStartedAt?: number;
  totalTimeSpent: number;
  createdAt: number;
  project: Doc<"projects"> | null;
}

interface TaskItemProps {
  task: TaskWithProject;
}

const STATUS_CONFIG = {
  open: {
    icon: Circle,
    label: "Open",
    className: "text-muted-foreground hover:text-foreground",
    next: "in-progress" as TaskStatus,
  },
  "in-progress": {
    icon: Clock,
    label: "In Progress",
    className: "text-yellow-500 hover:text-yellow-400",
    next: "closed" as TaskStatus,
  },
  closed: {
    icon: Check,
    label: "Closed",
    className: "text-green-500 hover:text-green-400",
    next: "open" as TaskStatus,
  },
};

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editProjectId, setEditProjectId] = useState<string>(
    task.projectId || "",
  );
  const [editDate, setEditDate] = useState<Date | undefined>(
    task.scheduledDate
      ? parse(task.scheduledDate, "yyyy-MM-dd", new Date())
      : undefined,
  );
  const [editTime, setEditTime] = useState<string | undefined>(
    task.scheduledTime || undefined,
  );
  const [editPriority, setEditPriority] = useState(task.priority || false);

  // Project popover states
  const [projectPopoverOpen, setProjectPopoverOpen] = useState(false);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectColor, setNewProjectColor] = useState("#6b7280");

  const updateStatus = useMutation(api.tasks.updateStatus);
  const updateTask = useMutation(api.tasks.update);
  const removeTask = useMutation(api.tasks.remove);
  const createProject = useMutation(api.projects.create);
  const projects = useQuery(api.projects.get);

  const statusConfig = STATUS_CONFIG[task.status];
  const StatusIcon = statusConfig.icon;

  const handleStatusClick = () => {
    updateStatus({ id: task._id, status: statusConfig.next });
  };

  const handleStartEdit = () => {
    setEditText(task.text);
    setEditProjectId(task.projectId || "");
    setEditDate(
      task.scheduledDate
        ? parse(task.scheduledDate, "yyyy-MM-dd", new Date())
        : undefined,
    );
    setEditTime(task.scheduledTime || undefined);
    setEditPriority(task.priority || false);
    setIsEditing(true);
  };

  const handleCreateProject = async () => {
    if (!newProjectName.trim()) return;

    const id = await createProject({
      name: newProjectName.trim(),
      color: newProjectColor,
    });

    setEditProjectId(id);
    setNewProjectName("");
    setNewProjectColor("#6b7280");
    setIsCreatingProject(false);
    setProjectPopoverOpen(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    if (!editText.trim()) return;

    await updateTask({
      id: task._id,
      text: editText.trim(),
      projectId: editProjectId ? (editProjectId as Id<"projects">) : null,
      scheduledDate: editDate ? format(editDate, "yyyy-MM-dd") : null,
      scheduledTime: editTime || null,
      priority: editPriority || null,
    });
    setIsEditing(false);
  };

  const selectedProject = projects?.find((p) => p._id === editProjectId);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveEdit();
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  const formatDate = (dateStr: string, timeStr?: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let dateLabel: string;
    if (date.toDateString() === today.toDateString()) {
      dateLabel = "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      dateLabel = "Tomorrow";
    } else {
      dateLabel = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }

    if (timeStr) {
      const [hours, minutes] = timeStr.split(":");
      const time = new Date();
      time.setHours(Number.parseInt(hours), Number.parseInt(minutes));
      dateLabel += ` at ${time.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
    }

    return dateLabel;
  };

  return (
    <div
      className={cn(
        "group flex items-start gap-3 rounded-lg border p-3 transition-colors",
        task.priority
          ? "border-t-border border-r-border border-b-border border-l-4 border-l-red-500 bg-red-500/5"
          : "border-border bg-card hover:border-muted",
        task.status === "closed" && "opacity-60",
      )}
    >
      {/* Status toggle */}
      <button
        type="button"
        onClick={handleStatusClick}
        className={`mt-0.5 rounded p-1 transition-colors ${statusConfig.className}`}
        title={`Status: ${statusConfig.label}. Click to change.`}
      >
        <StatusIcon className="h-4 w-4" />
      </button>

      {/* Task content */}
      <div className="min-w-0 flex-1">
        {isEditing ? (
          <div className="space-y-3">
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Task name"
            />

            <div>
              <span className="mb-1.5 block text-muted-foreground text-xs">
                Project
              </span>
              <Popover
                open={projectPopoverOpen}
                onOpenChange={setProjectPopoverOpen}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 w-full justify-between font-normal text-sm"
                  >
                    <span className="flex items-center gap-2">
                      {selectedProject ? (
                        <>
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: selectedProject.color }}
                          />
                          {selectedProject.name}
                        </>
                      ) : (
                        <span className="text-muted-foreground">
                          No project
                        </span>
                      )}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="flex w-62.5 flex-col gap-2 bg-neutral-950 p-0"
                  align="start"
                >
                  {isCreatingProject ? (
                    <div className="space-y-3 p-3">
                      <Input
                        placeholder="Project name"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                        autoFocus
                      />
                      <div>
                        <span className="mb-1.5 block text-muted-foreground text-xs">
                          Color
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {PROJECT_COLORS.map((color) => (
                            <button
                              key={color.value}
                              type="button"
                              onClick={() => setNewProjectColor(color.value)}
                              className={cn(
                                "h-6 w-6 rounded-full transition-all",
                                newProjectColor === color.value &&
                                  "ring-2 ring-primary ring-offset-2 ring-offset-popover",
                              )}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="flex-1"
                          onClick={() => {
                            setIsCreatingProject(false);
                            setNewProjectName("");
                            setNewProjectColor("#6b7280");
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          className="flex-1"
                          onClick={handleCreateProject}
                          disabled={!newProjectName.trim()}
                        >
                          Create
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-1">
                      <button
                        type="button"
                        onClick={() => {
                          setEditProjectId("");
                          setProjectPopoverOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent",
                          !editProjectId && "bg-accent",
                        )}
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                        No project
                        {!editProjectId && (
                          <Check className="ml-auto h-4 w-4" />
                        )}
                      </button>
                      {projects?.map((project) => (
                        <button
                          type="button"
                          key={project._id}
                          onClick={() => {
                            setEditProjectId(project._id);
                            setProjectPopoverOpen(false);
                          }}
                          className={cn(
                            "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent",
                            editProjectId === project._id && "bg-accent",
                          )}
                        >
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: project.color }}
                          />
                          {project.name}
                          {editProjectId === project._id && (
                            <Check className="ml-auto h-4 w-4" />
                          )}
                        </button>
                      ))}
                      <div className="mt-1 border-border border-t pt-1">
                        <button
                          type="button"
                          onClick={() => setIsCreatingProject(true)}
                          className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-muted-foreground text-sm hover:bg-accent"
                        >
                          <FolderPlus className="h-4 w-4" />
                          Create new project
                        </button>
                      </div>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="mb-1.5 block text-muted-foreground text-xs">
                  Date
                </span>
                <DatePicker
                  value={editDate}
                  onChange={setEditDate}
                  placeholder="Pick a date"
                />
              </div>

              <div>
                <span className="mb-1.5 block text-muted-foreground text-xs">
                  Time (optional)
                </span>
                <TimePicker
                  value={editTime}
                  onChange={setEditTime}
                  placeholder="Pick a time"
                />
              </div>
            </div>

            {/* Priority checkbox */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEditPriority(!editPriority)}
                className={cn(
                  "flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors",
                  editPriority
                    ? "border-red-500 bg-red-500/10 text-red-500"
                    : "border-border text-muted-foreground hover:border-muted-foreground",
                )}
              >
                <FlagTriangleRight
                  className={cn("h-4 w-4", editPriority && "fill-red-500")}
                />
                Priority
              </button>
            </div>

            <div className="flex gap-2 pt-1">
              <Button
                size="sm"
                onClick={handleSaveEdit}
                disabled={!editText.trim()}
              >
                Save Changes
              </Button>
              <Button size="sm" variant="ghost" onClick={handleCancelEdit}>
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              {task.priority && (
                <span className="flex items-center gap-1 rounded-md bg-red-500/15 px-1.5 py-0.5">
                  <FlagTriangleRight className="h-4 w-4 fill-red-500 text-red-500" />
                  <span className="font-medium text-red-500 text-xs">
                    Priority
                  </span>
                </span>
              )}
              <p
                className={cn(
                  "text-sm",
                  task.status === "closed" &&
                    "text-muted-foreground line-through",
                )}
              >
                {task.text}
              </p>
            </div>

            {/* Meta info */}
            <div className="mt-1.5 flex flex-wrap items-center gap-3">
              {task.project && (
                <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: task.project.color || "#6b7280" }}
                  />
                  {task.project.name}
                </span>
              )}

              {task.scheduledDate && (
                <span className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Calendar className="h-3 w-3" />
                  {formatDate(task.scheduledDate, task.scheduledTime)}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* Timer */}
      {task.status !== "closed" && !isEditing && (
        <Timer
          taskId={task._id}
          timerStartedAt={task.timerStartedAt}
          totalTimeSpent={task.totalTimeSpent}
        />
      )}

      {/* Time spent badge for closed tasks */}
      {task.status === "closed" && task.totalTimeSpent > 0 && !isEditing && (
        <span className="font-mono text-muted-foreground text-xs">
          {formatTimeSpent(task.totalTimeSpent)}
        </span>
      )}

      {/* Edit button */}
      {!isEditing && (
        <Button
          variant="ghost"
          size="icon-sm"
          className="h-6 w-6 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
          onClick={handleStartEdit}
        >
          <Pencil className="h-3 w-3" />
        </Button>
      )}

      {/* Delete button */}
      {!isEditing && (
        <Button
          variant="ghost"
          size="icon-sm"
          className="h-6 w-6 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
          onClick={() => removeTask({ id: task._id })}
        >
          <Trash2 className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}

function formatTimeSpent(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  }
  if (minutes > 0) {
    return `${minutes}m`;
  }
  return `${seconds}s`;
}
