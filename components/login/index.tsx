"use client";

import { SignOutButton, useClerk } from "@clerk/nextjs";
import {
  BarChart3,
  CheckCircle,
  LogOut,
  MoreVertical,
  Timer,
  Trash2,
  type User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import CustomSignInForm from "@/components/login/custom-signin-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useCustomAuth } from "@/hooks/useCustomAuth";

export default function Login() {
  const { isLoaded, isSignedIn } = useCustomAuth();
  const { user } = useClerk();
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      setOpen(true);
    }
  }, [isLoaded, isSignedIn]);

  const handleAuthSuccess = () => {
    setOpen(false);
  };

  const handleDeleteAccount = async () => {
    if (!user) return;

    setIsDeleting(true);
    try {
      await user.delete();
    } catch (error) {
      console.error("Failed to delete account:", error);
      setIsDeleting(false);
    }
  };

  if (!isLoaded || isDeleting) {
    return (
      <main className="flex min-h-screen w-full justify-center bg-background">
        <LoadingSpinner
          size="lg"
          text={isDeleting ? "Deleting account..." : "Signing in..."}
        />
      </main>
    );
  }

  if (isSignedIn) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="cursor-pointer rounded-md p-1 transition-colors hover:bg-white/10"
            >
              <MoreVertical size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40 bg-neutral-950">
            <SignOutButton>
              <DropdownMenuItem className="cursor-pointer">
                <LogOut size={16} />
                <span>Logout</span>
              </DropdownMenuItem>
            </SignOutButton>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              className="cursor-pointer"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 size={16} />
              <span>Delete Account</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Account</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete your account? This action cannot
                be undone and all your data will be permanently deleted.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteAccount}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete Account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }

  return (
    <Dialog open={open}>
      {/* <TooltipProvider>
        <Tooltip delayDuration={700}>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="group relative cursor-pointer overflow-hidden rounded-full border border-white/10 bg-black/30 text-white/90 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <div className="absolute inset-0 bg-black/40 to-pink-500/0 transition-all duration-500 group-hover:from-blue-500/10" />
                <User
                  size={20}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>

          <TooltipContent side="bottom" className="text-white dark:text-black">
            Sign in
          </TooltipContent>
        </Tooltip> */}

      {/* The actual Dialog content */}
      <DialogContent
        className="border border-white/20 bg-black/40 text-white shadow-xl backdrop-blur-md sm:max-w-md"
        overlayClassName="backdrop-blur-sm"
        showCloseButton={false}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="absolute inset-0 animate-gradient-shift" />
        <div className="relative z-10">
          <DialogHeader className="space-y-3 pb-2 text-center">
            <DialogTitle className="bg-gradient-to-r from-white to-white/80 bg-clip-text font-semibold text-2xl text-transparent">
              Login to Checklify
            </DialogTitle>
            <DialogDescription className="text-sm text-white/60 leading-relaxed">
              Manage your task and track your productivity.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-2">
            <div className="space-y-3">
              <div className="grid gap-3">
                <FeatureItem
                  icon={CheckCircle}
                  color="emerald"
                  title="Sync & Save Progress"
                  desc="Never lose your productivity streak"
                />
                <FeatureItem
                  icon={Timer}
                  color="purple"
                  title="Productivity Tracking"
                  desc="Curate your focus soundtrack"
                />
                <FeatureItem
                  icon={BarChart3}
                  color="blue"
                  title="Advanced Analytics"
                  desc="Track your focus patterns"
                />
              </div>
            </div>

            <div className="pt-2">
              <CustomSignInForm onSuccess={handleAuthSuccess} />
            </div>
          </div>
        </div>
      </DialogContent>
      {/* </TooltipProvider> */}
    </Dialog>
  );
}

function FeatureItem({
  icon: Icon,
  color,
  title,
  desc,
}: {
  icon: typeof User;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3 text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <div
        className={`h-8 w-8 rounded-full bg-${color}-500/20 flex items-center justify-center group-hover:bg-${color}-500/30 transition-colors`}
      >
        <Icon className={`text-${color}-400`} size={16} />
      </div>
      <div>
        <span className="font-medium text-sm">{title}</span>
        <p className="text-white/50 text-xs">{desc}</p>
      </div>
    </div>
  );
}
