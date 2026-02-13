import * as z from "zod";
import type {
  AddDocumentInput,
  AssignTaskInput,
  DocumentKind,
  RemoveDocumentInput,
  SetTaskDetailsInput,
  TaskAttachment,
  TaskState,
  UpdateTaskStatusInput,
} from "./types.js";

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export const DocumentKindSchema = z.enum(["IMAGE", "PDF"]);

export function AddDocumentInputSchema(): z.ZodObject<
  Properties<AddDocumentInput>
> {
  return z.object({
    id: z.string(),
    kind: DocumentKindSchema,
    url: z.url(),
  });
}

export function AssignTaskInputSchema(): z.ZodObject<
  Properties<AssignTaskInput>
> {
  return z.object({
    assignee: z.string(),
    updatedAt: z.iso.datetime(),
  });
}

export function RemoveDocumentInputSchema(): z.ZodObject<
  Properties<RemoveDocumentInput>
> {
  return z.object({
    id: z.string(),
  });
}

export function SetTaskDetailsInputSchema(): z.ZodObject<
  Properties<SetTaskDetailsInput>
> {
  return z.object({
    assignee: z.string().nullish(),
    budget: z.number().nullish(),
    createdAt: z.iso.datetime(),
    createdBy: z.string(),
    daoId: z.string(),
    deadline: z.iso.datetime().nullish(),
    description: z.string().nullish(),
    proposalId: z.string().nullish(),
    title: z.string(),
  });
}

export function TaskAttachmentSchema(): z.ZodObject<
  Properties<TaskAttachment>
> {
  return z.object({
    __typename: z.literal("TaskAttachment").optional(),
    id: z.string(),
    kind: DocumentKindSchema,
    url: z.url(),
  });
}

export function TaskStateSchema(): z.ZodObject<Properties<TaskState>> {
  return z.object({
    __typename: z.literal("TaskState").optional(),
    assignee: z.string().nullish(),
    budget: z.number().nullish(),
    createdAt: z.iso.datetime().nullish(),
    createdBy: z.string().nullish(),
    daoId: z.string().nullish(),
    deadline: z.iso.datetime().nullish(),
    description: z.string().nullish(),
    documents: z.array(z.lazy(() => TaskAttachmentSchema())),
    proposalId: z.string().nullish(),
    status: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.iso.datetime().nullish(),
  });
}

export function UpdateTaskStatusInputSchema(): z.ZodObject<
  Properties<UpdateTaskStatusInput>
> {
  return z.object({
    status: z.string(),
    updatedAt: z.iso.datetime(),
  });
}
