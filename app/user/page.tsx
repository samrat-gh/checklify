"use client";

import { useUser } from "@clerk/nextjs";

export default function UserPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Not signed in</div>;
  }

  return <div>User: {user.firstName}</div>;
}
