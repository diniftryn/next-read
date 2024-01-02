import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardEntryDropdown } from "./CardEntryDropdown";
import { IEntry } from "@/lib/database/models/entry.model";

type CardEntryProps = {
  entry: {
    _id: string;
    material: string;
    review: string;
    createdAt: Date;
  };
};

export function CardEntry({ entry }: CardEntryProps) {
  return (
    <Card key={entry._id} className="p-2 md:p-5 my-5 md:m-10 pb-10">
      <div className="float-end">
        <CardEntryDropdown entryId={entry._id} entry={entry} />
      </div>
      <CardHeader>
        <CardTitle>{entry.material}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>"{entry.review}"</p>
      </CardContent>
      <CardDescription>
        Read on: {new Date(entry.createdAt).toDateString()}, {new Date(entry.createdAt).toLocaleTimeString()}
      </CardDescription>
    </Card>
  );
}
