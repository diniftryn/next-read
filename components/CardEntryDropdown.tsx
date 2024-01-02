import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { DeleteConfirmation } from "./DeleteConfirmation";
import Link from "next/link";

type CardEntryDropdownProps = {
  entryId: string;
  entry: {
    _id: string;
    material: string;
    review: string;
    createdAt: Date;
  };
};

export function CardEntryDropdown({ entryId, entry }: CardEntryDropdownProps) {
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={`/entries/${entryId}/update`}>Edit</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <AlertDialogTrigger>Delete</AlertDialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteConfirmation entryId={entryId} />
    </AlertDialog>
  );
}
