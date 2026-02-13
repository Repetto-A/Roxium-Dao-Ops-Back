import { createAction } from "document-model/core";
import {
  SetTaskDetailsInputSchema,
  UpdateTaskStatusInputSchema,
  AssignTaskInputSchema,
  AddDocumentInputSchema,
  RemoveDocumentInputSchema,
} from "../schema/zod.js";
import type {
  SetTaskDetailsInput,
  UpdateTaskStatusInput,
  AssignTaskInput,
  AddDocumentInput,
  RemoveDocumentInput,
} from "../types.js";
import type {
  SetTaskDetailsAction,
  UpdateTaskStatusAction,
  AssignTaskAction,
  AddDocumentAction,
  RemoveDocumentAction,
} from "./actions.js";

export const setTaskDetails = (input: SetTaskDetailsInput) =>
  createAction<SetTaskDetailsAction>(
    "SET_TASK_DETAILS",
    { ...input },
    undefined,
    SetTaskDetailsInputSchema,
    "global",
  );

export const updateTaskStatus = (input: UpdateTaskStatusInput) =>
  createAction<UpdateTaskStatusAction>(
    "UPDATE_TASK_STATUS",
    { ...input },
    undefined,
    UpdateTaskStatusInputSchema,
    "global",
  );

export const assignTask = (input: AssignTaskInput) =>
  createAction<AssignTaskAction>(
    "ASSIGN_TASK",
    { ...input },
    undefined,
    AssignTaskInputSchema,
    "global",
  );

export const addDocument = (input: AddDocumentInput) =>
  createAction<AddDocumentAction>(
    "ADD_DOCUMENT",
    { ...input },
    undefined,
    AddDocumentInputSchema,
    "global",
  );

export const removeDocument = (input: RemoveDocumentInput) =>
  createAction<RemoveDocumentAction>(
    "REMOVE_DOCUMENT",
    { ...input },
    undefined,
    RemoveDocumentInputSchema,
    "global",
  );
