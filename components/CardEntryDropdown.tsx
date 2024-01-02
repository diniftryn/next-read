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
          <Link href={`/entries/${entryId}/update`}>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </Link>
          <AlertDialogTrigger className="w-full">
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteConfirmation entryId={entryId} />
    </AlertDialog>
  );
}
