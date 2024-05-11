"use client";

import { cn } from "@/lib/utils";
import { Spinner } from "@phosphor-icons/react";
import { Button } from "../ui/button";

interface SubmitButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
}

export function SubmitButton({
  isLoading,
  isDisabled,
  className,
  children,
  ...rest
}: SubmitButtonProps): React.ReactElement {
  return (
    <Button
      type="submit"
      disabled={isDisabled ?? isLoading}
      className={cn("gap-2", className)}
      {...rest}
    >
      {children}
      {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
    </Button>
  );
}
