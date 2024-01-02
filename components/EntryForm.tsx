"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";

import { createEntry, updateEntry } from "@/lib/actions/entry.actions";
import { IEntry } from "@/lib/database/models/entry.model";
import { ReloadIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  material: z.string().min(2, {
    message: "Reading material must be at least 2 characters."
  }),
  review: z.string().min(2, {
    message: "Your thoguhts must be at least 2 characters."
  })
});

type EntryFormProps = {
  // userId: string
  type: "Create" | "Update";
  entry?: IEntry;
  entryId?: string;
};

export function EntryForm({ type, entry, entryId }: EntryFormProps) {
  const router = useRouter();
  const entryDefaultValues = { material: "", review: "" };
  const initialValues = entry && type === "Update" ? { ...entry } : entryDefaultValues;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (type === "Create") {
      try {
        const newEntry = await createEntry({
          entry: { ...values }
          // , userId
        });

        if (newEntry) {
          form.reset();
          // router.push(`/entries/${newEntry._id}`);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (type === "Update") {
      if (!entryId) {
        router.back();
        return;
      }

      try {
        const updatedEntry = await updateEntry({
          // userId,
          entry: { ...values, _id: entryId },
          // path: `/entries/${entryId}`,
          path: "/"
        });
        if (updatedEntry) {
          form.reset();
          // router.push(`/entries/${updatedEntry._id}`);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className="p-5 md:p-10 max-w-4xl mx-auto">
      <h1 className="pb-5 text-3xl font-semibold">
        {type === "Create" && "Create New Entry"}
        {type === "Update" && "Update Entry"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="material"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reading Material</FormLabel>
                <FormControl>
                  <Input placeholder="Name of Book or Article" {...field} />
                </FormControl>
                <FormDescription>What you read</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Session Review</FormLabel>
                <FormControl>
                  <Textarea placeholder="Reflection or knowledge or quote" className="h-full min-h-[200px]" {...field} />
                </FormControl>
                <FormDescription>Your thoughts</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex space-x-3">
            <Button variant="secondary" type="button" onClick={() => router.back()}>
              {type === "Create" && "Back"}
              {type === "Update" && "Cancel"}
            </Button>
            {form.formState.isSubmitting ? (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                {type === "Create" && "Submitting..."}
                {type === "Update" && "Saving..."}
              </Button>
            ) : (
              <Button type="submit">
                {type === "Create" && "Submit"}
                {type === "Update" && "Save"}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
}
