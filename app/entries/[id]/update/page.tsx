import { EntryForm } from "@/components/EntryForm";
import { getEntryById } from "@/lib/actions/entry.actions";

type UpdateEntryProps = {
  params: {
    id: string;
  };
};

const UpdateEntry = async ({ params: { id } }: UpdateEntryProps) => {
  // const { sessionClaims } = auth();

  // const userId = sessionClaims?.userId as string;
  const entry = await getEntryById(id);

  return (
    <>
      <EntryForm type="Update" entryId={id} entry={entry} />
    </>
  );
};

export default UpdateEntry;
