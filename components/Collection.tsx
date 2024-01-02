import { getAllEntries } from "@/lib/actions/entry.actions";
import { IEntry } from "@/lib/database/models/entry.model";
import { CardEntry } from "./CardEntry";

const Collection = async () => {
  const entries = await getAllEntries();

  return (
    <>
      {entries?.data
        ? entries.data.map((entry: IEntry) => {
            return <CardEntry entry={entry} />;
          })
        : ""}
    </>
  );
};

export default Collection;
