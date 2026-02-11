import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all tasks with project info for the authenticated user
export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }

    const userId = identity.subject;
    const tasks = await ctx.db
      .query("tasks")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();

    const projects = await ctx.db
      .query("projects")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return tasks.map((task) => ({
      ...task,
      project: task.projectId
        ? projects.find((p) => p._id === task.projectId)
        : null,
    }));
  },
});

// Create a new task
export const create = mutation({
  args: {
    text: v.string(),
    projectId: v.optional(v.id("projects")),
    scheduledDate: v.optional(v.string()),
    scheduledTime: v.optional(v.string()),
    priority: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;
    return await ctx.db.insert("tasks", {
      text: args.text,
      projectId: args.projectId,
      status: "open",
      priority: args.priority,
      scheduledDate: args.scheduledDate,
      scheduledTime: args.scheduledTime,
      totalTimeSpent: 0,
      createdAt: Date.now(),
      userId,
    });
  },
});

// Update task status
export const updateStatus = mutation({
  args: {
    id: v.id("tasks"),
    status: v.union(
      v.literal("open"),
      v.literal("in-progress"),
      v.literal("closed"),
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const task = await ctx.db.get(args.id);
    if (!task) throw new Error("Task not found");
    if (task.userId !== identity.subject) {
      throw new Error("Not authorized");
    }

    // If closing a task with active timer, stop it first
    let totalTimeSpent = task.totalTimeSpent;
    if (args.status === "closed" && task.timerStartedAt) {
      totalTimeSpent += Date.now() - task.timerStartedAt;
    }

    await ctx.db.patch(args.id, {
      status: args.status,
      timerStartedAt:
        args.status === "closed" ? undefined : task.timerStartedAt,
      totalTimeSpent,
    });
  },
});

// Start timer for a task
export const startTimer = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const task = await ctx.db.get(args.id);
    if (!task) throw new Error("Task not found");
    if (task.userId !== identity.subject) {
      throw new Error("Not authorized");
    }
    if (task.timerStartedAt) return; // Already running

    await ctx.db.patch(args.id, {
      timerStartedAt: Date.now(),
      status: "in-progress",
    });
  },
});

// Stop timer for a task
export const stopTimer = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const task = await ctx.db.get(args.id);
    if (!task) throw new Error("Task not found");
    if (task.userId !== identity.subject) {
      throw new Error("Not authorized");
    }
    if (!task.timerStartedAt) return; // Not running

    const elapsed = Date.now() - task.timerStartedAt;
    await ctx.db.patch(args.id, {
      timerStartedAt: undefined,
      totalTimeSpent: task.totalTimeSpent + elapsed,
    });
  },
});

// Delete a task
export const remove = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const task = await ctx.db.get(args.id);
    if (!task) throw new Error("Task not found");
    if (task.userId !== identity.subject) {
      throw new Error("Not authorized");
    }

    await ctx.db.delete(args.id);
  },
});

// Update task details
export const update = mutation({
  args: {
    id: v.id("tasks"),
    text: v.optional(v.string()),
    projectId: v.optional(v.union(v.id("projects"), v.null())),
    scheduledDate: v.optional(v.union(v.string(), v.null())),
    scheduledTime: v.optional(v.union(v.string(), v.null())),
    priority: v.optional(v.union(v.boolean(), v.null())),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const task = await ctx.db.get(args.id);
    if (!task) throw new Error("Task not found");
    if (task.userId !== identity.subject) {
      throw new Error("Not authorized");
    }

    const { id, ...updates } = args;
    const cleanUpdates: Record<string, unknown> = {};

    if (updates.text !== undefined) cleanUpdates.text = updates.text;
    if (updates.projectId !== undefined) {
      cleanUpdates.projectId =
        updates.projectId === null ? undefined : updates.projectId;
    }
    if (updates.scheduledDate !== undefined) {
      cleanUpdates.scheduledDate =
        updates.scheduledDate === null ? undefined : updates.scheduledDate;
    }
    if (updates.scheduledTime !== undefined) {
      cleanUpdates.scheduledTime =
        updates.scheduledTime === null ? undefined : updates.scheduledTime;
    }
    if (updates.priority !== undefined) {
      cleanUpdates.priority =
        updates.priority === null ? undefined : updates.priority;
    }

    await ctx.db.patch(id, cleanUpdates);
  },
});
