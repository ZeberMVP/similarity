"use client";

import { FC, useState } from "react";
import { Button } from "./Button";
import { signOut } from "next-auth/react";
import { toast } from "./Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sigUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={sigUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
