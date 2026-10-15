'use client'

import Appbar from "@repo/ui/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { JSX } from "react";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
    <div className="text-5xl">
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}/>
      Hi there!
    </div>
  );
}
