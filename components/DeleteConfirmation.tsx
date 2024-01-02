"use client";

import { useTransition } from "react";
import { usePathname } from "next/navigation";

import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { deleteEntry } from "@/lib/actions/entry.actions";

export const DeleteConfirmation = ({ entryId }: { entryId: string }) => {
  const pathname = usePathname();
  let [isPending, startTransition] = useTransition();

  return (
    <AlertDialogContent className="bg-white">
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
        <AlertDialogDescription className="p-regular-16 text-grey-600">This will permanently delete this entry.</AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>

        <AlertDialogAction
          onClick={() =>
            startTransition(async () => {
              await deleteEntry({ entryId, path: pathname });
            })
          }
        >
          {isPending ? "Deleting..." : "Delete"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
