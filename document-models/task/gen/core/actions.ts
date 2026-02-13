import type { Action } from "document-model";
import type {
  SetTaskDetailsInput,
  UpdateTaskStatusInput,
  AssignTaskInput,
  AddDocumentInput,
  RemoveDocumentInput,
} from "../types.js";

export type SetTaskDetailsAction = Action & {
  type: "SET_TASK_DETAILS";
  input: SetTaskDetailsInput;
};
export type UpdateTaskStatusAction = Action & {
  type: "UPDATE_TASK_STATUS";
  input: UpdateTaskStatusInput;
};
export type AssignTaskAction = Action & {
  type: "ASSIGN_TASK";
  input: AssignTaskInput;
};
export type AddDocumentAction = Action & {
  type: "ADD_DOCUMENT";
  input: AddDocumentInput;
};
export type RemoveDocumentAction = Action & {
  type: "REMOVE_DOCUMENT";
  input: RemoveDocumentInput;
};

export type TaskCoreAction =
  | SetTaskDetailsAction
  | UpdateTaskStatusAction
  | AssignTaskAction
  | AddDocumentAction
  | RemoveDocumentAction;
