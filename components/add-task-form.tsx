"use client";

import { useMutation, useQuery } from "convex/react";
import { format } from "date-fns";
import { Check, ChevronDown, FolderPlus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TimePicker } from "@/components/ui/time-picker";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

interface AddTaskFormProps {
  onComplete?: () => void;
}

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

export function AddTaskForm({ onComplete }: AddTaskFormProps) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [projectId, setProjectId] = useState<string>("");
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>();
  const [scheduledTime, setScheduledTime] = useState<string | undefined>();

  // Inline project creation states
  const [projectPopoverOpen, setProjectPopoverOpen] = useState(false);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectColor, setNewProjectColor] = useState("#6b7280");

  const projects = useQuery(api.projects.get);
  const createTask = useMutation(api.tasks.create);
  const createProject = useMutation(api.projects.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    await createTask({
      text: text.trim(),
      projectId: projectId ? (projectId as Id<"projects">) : undefined,
      scheduledDate: scheduledDate
        ? format(scheduledDate, "yyyy-MM-dd")
        : undefined,
      scheduledTime: scheduledTime || undefined,
    });

    setText("");
    setProjectId("");
    setScheduledDate(undefined);
    setScheduledTime(undefined);
    setOpen(false);
    onComplete?.();
  };

  const handleClose = () => {
    setText("");
    setProjectId("");
    setScheduledDate(undefined);
    setScheduledTime(undefined);
    setOpen(false);
  };

  const handleCreateProject = async () => {
    if (!newProjectName.trim()) return;

    const id = await createProject({
      name: newProjectName.trim(),
      color: newProjectColor,
    });

    setProjectId(id);
    setNewProjectName("");
    setNewProjectColor("#6b7280");
    setIsCreatingProject(false);
    setProjectPopoverOpen(false);
  };

  const selectedProject = projects?.find((p) => p._id === projectId);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="border-border bg-card">
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="What needs to be done?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
          </div>

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
                  className="w-full justify-between font-normal"
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
                      <span className="text-muted-foreground">No project</span>
                    )}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="flex w-[250px] flex-col gap-2 bg-neutral-950 p-0"
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
                        setProjectId("");
                        setProjectPopoverOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent",
                        !projectId && "bg-accent",
                      )}
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                      No project
                      {!projectId && <Check className="ml-auto h-4 w-4" />}
                    </button>
                    {projects?.map((project) => (
                      <button
                        type="button"
                        key={project._id}
                        onClick={() => {
                          setProjectId(project._id);
                          setProjectPopoverOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent",
                          projectId === project._id && "bg-accent",
                        )}
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        {project.name}
                        {projectId === project._id && (
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
                value={scheduledDate}
                onChange={setScheduledDate}
                placeholder="Pick a date"
              />
            </div>

            <div>
              <span className="mb-1.5 block text-muted-foreground text-xs">
                Time (optional)
              </span>
              <TimePicker
                value={scheduledTime}
                onChange={setScheduledTime}
                placeholder="Pick a time"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={!text.trim()}>
              Add Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
