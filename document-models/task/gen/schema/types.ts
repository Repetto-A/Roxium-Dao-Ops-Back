export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Address: { input: `${string}:0x${string}`; output: `${string}:0x${string}` };
  Amount: {
    input: { unit?: string; value?: number };
    output: { unit?: string; value?: number };
  };
  Amount_Crypto: {
    input: { unit: string; value: string };
    output: { unit: string; value: string };
  };
  Amount_Currency: {
    input: { unit: string; value: string };
    output: { unit: string; value: string };
  };
  Amount_Fiat: {
    input: { unit: string; value: number };
    output: { unit: string; value: number };
  };
  Amount_Money: { input: number; output: number };
  Amount_Percentage: { input: number; output: number };
  Amount_Tokens: { input: number; output: number };
  Attachment: { input: string; output: string };
  Currency: { input: string; output: string };
  Date: { input: string; output: string };
  DateTime: { input: string; output: string };
  EmailAddress: { input: string; output: string };
  EthereumAddress: { input: string; output: string };
  OID: { input: string; output: string };
  OLabel: { input: string; output: string };
  PHID: { input: string; output: string };
  URL: { input: string; output: string };
  Unknown: { input: unknown; output: unknown };
  Upload: { input: File; output: File };
};

export type AddDocumentInput = {
  id: Scalars["OID"]["input"];
  kind: DocumentKind;
  url: Scalars["URL"]["input"];
};

export type AssignTaskInput = {
  assignee: Scalars["String"]["input"];
  updatedAt: Scalars["DateTime"]["input"];
};

export type DocumentKind = "IMAGE" | "PDF";

export type RemoveDocumentInput = {
  id: Scalars["OID"]["input"];
};

export type SetTaskDetailsInput = {
  assignee?: InputMaybe<Scalars["String"]["input"]>;
  budget?: InputMaybe<Scalars["Float"]["input"]>;
  createdAt: Scalars["DateTime"]["input"];
  createdBy: Scalars["String"]["input"];
  daoId: Scalars["String"]["input"];
  deadline?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  proposalId?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

export type TaskAttachment = {
  id: Scalars["OID"]["output"];
  kind: DocumentKind;
  url: Scalars["URL"]["output"];
};

export type TaskState = {
  assignee: Maybe<Scalars["String"]["output"]>;
  budget: Maybe<Scalars["Float"]["output"]>;
  createdAt: Maybe<Scalars["DateTime"]["output"]>;
  createdBy: Maybe<Scalars["String"]["output"]>;
  daoId: Maybe<Scalars["String"]["output"]>;
  deadline: Maybe<Scalars["DateTime"]["output"]>;
  description: Maybe<Scalars["String"]["output"]>;
  documents: Array<TaskAttachment>;
  proposalId: Maybe<Scalars["String"]["output"]>;
  status: Maybe<Scalars["String"]["output"]>;
  title: Maybe<Scalars["String"]["output"]>;
  updatedAt: Maybe<Scalars["DateTime"]["output"]>;
};

export type UpdateTaskStatusInput = {
  status: Scalars["String"]["input"];
  updatedAt: Scalars["DateTime"]["input"];
};
