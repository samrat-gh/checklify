import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get all projects for the authenticated user
export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }

    const userId = identity.subject;
    return await ctx.db
      .query("projects")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
  },
});

// Create a new project
export const create = mutation({
  args: {
    name: v.string(),
    color: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = identity.subject;
    return await ctx.db.insert("projects", {
      name: args.name,
      color: args.color ?? "#6b7280",
      userId,
    });
  },
});

// Delete a project
export const remove = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const project = await ctx.db.get(args.id);
    if (!project) throw new Error("Project not found");
    if (project.userId !== identity.subject) {
      throw new Error("Not authorized");
    }

    // Remove project reference from all user's tasks
    const tasks = await ctx.db
      .query("tasks")
      .withIndex("by_user", (q) => q.eq("userId", identity.subject))
      .collect();

    for (const task of tasks) {
      if (task.projectId === args.id) {
        await ctx.db.patch(task._id, { projectId: undefined });
      }
    }
    await ctx.db.delete(args.id);
  },
});
