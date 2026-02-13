import { type SignalDispatch } from "document-model";
import type {
  SetTaskDetailsAction,
  UpdateTaskStatusAction,
  AssignTaskAction,
  AddDocumentAction,
  RemoveDocumentAction,
} from "./actions.js";
import type { TaskState } from "../types.js";

export interface TaskCoreOperations {
  setTaskDetailsOperation: (
    state: TaskState,
    action: SetTaskDetailsAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateTaskStatusOperation: (
    state: TaskState,
    action: UpdateTaskStatusAction,
    dispatch?: SignalDispatch,
  ) => void;
  assignTaskOperation: (
    state: TaskState,
    action: AssignTaskAction,
    dispatch?: SignalDispatch,
  ) => void;
  addDocumentOperation: (
    state: TaskState,
    action: AddDocumentAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeDocumentOperation: (
    state: TaskState,
    action: RemoveDocumentAction,
    dispatch?: SignalDispatch,
  ) => void;
}
