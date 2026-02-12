"use client";

import { useClerk } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { SquareCheckBig } from "lucide-react";
import { useState } from "react";
import { AddTaskForm } from "@/components/add-task-form";
import Login from "@/components/login";
import { ProjectManager } from "@/components/project-manager";
import { TaskItem } from "@/components/task-item";
import { api } from "@/convex/_generated/api";

type FilterStatus = "all" | "open" | "in-progress" | "closed";

export default function Home() {
  const { isSignedIn } = useClerk();
  const tasks = useQuery(api.tasks.get);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filteredTasks = tasks
    ?.filter((task) => {
      if (filter === "all") return true;
      return task.status === filter;
    })
    ?.sort((a, b) => {
      // Priority tasks first
      if (a.priority && !b.priority) return -1;
      if (!a.priority && b.priority) return 1;
      return 0;
    });

  const taskCounts = {
    all: tasks?.length ?? 0,
    open: tasks?.filter((t) => t.status === "open").length ?? 0,
    "in-progress": tasks?.filter((t) => t.status === "in-progress").length ?? 0,
    closed: tasks?.filter((t) => t.status === "closed").length ?? 0,
  };

  if (!isSignedIn) return <Login />;

  if (isSignedIn)
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-3 py-4 sm:px-4 sm:py-8">
          {/* Header */}
          <header className="mb-6 flex justify-between gap-3 sm:mb-8 sm:flex-row sm:items-start">
            <div>
              <h1 className="mb-1 flex items-center font-semibold text-xl tracking-tight sm:text-2xl">
                <SquareCheckBig className="my-1 mr-2 inline-block" size={22} />
                Checklify
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Personal task management tool
              </p>
            </div>
            <Login />
          </header>

          {/* Actions bar */}
          <div className="mb-4 flex items-center justify-between gap-2 sm:mb-6">
            <AddTaskForm />
            <ProjectManager />
          </div>

          {/* Filter tabs */}
          <div className="-mx-3 mb-4 overflow-x-auto px-3 sm:mx-0 sm:mb-6 sm:px-0">
            <div className="flex w-max items-center gap-1 rounded-lg bg-secondary/30 p-1 sm:w-fit">
              {(["all", "open", "in-progress", "closed"] as const).map(
                (status) => (
                  <button
                    type="button"
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`whitespace-nowrap rounded-md px-3 py-2 font-medium text-xs transition-colors sm:py-1.5 ${
                      filter === status
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {status === "all"
                      ? "All"
                      : status === "in-progress"
                        ? "In Progress"
                        : status.charAt(0).toUpperCase() + status.slice(1)}
                    <span className="ml-1.5 text-muted-foreground">
                      {taskCounts[status]}
                    </span>
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Task list */}
          <div className="space-y-2">
            {!tasks && (
              <div className="py-12 text-center text-muted-foreground">
                Loading...
              </div>
            )}

            {filteredTasks?.length === 0 && (
              <div className="py-12 text-center text-muted-foreground">
                {filter === "all"
                  ? "No tasks yet. Add one to get started!"
                  : `No ${filter === "in-progress" ? "in progress" : filter} tasks`}
              </div>
            )}

            {filteredTasks?.map((task) => (
              <TaskItem
                key={task._id}
                task={{ ...task, project: task.project ?? null }}
              />
            ))}
          </div>
        </div>
      </main>
    );
}
