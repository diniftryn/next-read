// ====== ENTRY PARAMS
export type CreateEntryParams = {
  // userId: string;
  entry: {
    material: string;
    review: string;
  };
  // path: string;
};

export type UpdateEntryParams = {
  // userId: string;
  entry: {
    _id: string;
    material: string;
    review: string;
  };
  path: string;
};

export type DeleteEntryParams = {
  entryId: string;
  path: string;
};
