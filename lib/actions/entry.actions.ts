"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import Entry from "@/lib/database/models/entry.model";
import { handleError } from "@/lib/utils";

import { CreateEntryParams, UpdateEntryParams, DeleteEntryParams } from "@/types";

// CREATE
export async function createEntry({
  entry
}: // , userId
CreateEntryParams) {
  try {
    await connectToDatabase();

    const newEntry = await Entry.create({ ...entry });
    if (newEntry) revalidatePath("/");

    return JSON.parse(JSON.stringify(newEntry));
  } catch (error) {
    handleError(error);
  }
}

// GET ONE ENTRY BY ID
export async function getEntryById(entryId: string) {
  try {
    await connectToDatabase();

    const entry = await Entry.findById(entryId);

    if (!entry) throw new Error("Entry not found");

    return JSON.parse(JSON.stringify(entry));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
// export async function updateEntry({ userId, entry, path }: UpdateEntryParams) {
export async function updateEntry({ entry, path }: UpdateEntryParams) {
  try {
    await connectToDatabase();

    const entryToUpdate = await Entry.findById(entry._id);
    if (!entryToUpdate) {
      throw new Error("Unauthorized or entry not found");
    }

    const updatedEntry = await Entry.findByIdAndUpdate(entry._id, { ...entry }, { new: true });
    if (updatedEntry) revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedEntry));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteEntry({ entryId, path }: DeleteEntryParams) {
  try {
    await connectToDatabase();

    const deletedEntry = await Entry.findByIdAndDelete(entryId);
    if (deletedEntry) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
}

// GET ALL ENTRIES
export async function getAllEntries() {
  try {
    await connectToDatabase();

    const entries = await Entry.find().sort({ createdAt: "desc" });

    return {
      data: JSON.parse(JSON.stringify(entries))
    };
  } catch (error) {
    handleError(error);
  }
}
