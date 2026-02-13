import { type SignalDispatch } from "document-model";
import type {
  SetDaoNameAction,
  SetDaoDescriptionAction,
  SetDaoOwnerAction,
  AddMemberAction,
  UpdateMemberRoleAction,
  RemoveMemberAction,
} from "./actions.js";
import type { DaoState } from "../types.js";

export interface DaoCoreOperations {
  setDaoNameOperation: (
    state: DaoState,
    action: SetDaoNameAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDaoDescriptionOperation: (
    state: DaoState,
    action: SetDaoDescriptionAction,
    dispatch?: SignalDispatch,
  ) => void;
  setDaoOwnerOperation: (
    state: DaoState,
    action: SetDaoOwnerAction,
    dispatch?: SignalDispatch,
  ) => void;
  addMemberOperation: (
    state: DaoState,
    action: AddMemberAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateMemberRoleOperation: (
    state: DaoState,
    action: UpdateMemberRoleAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeMemberOperation: (
    state: DaoState,
    action: RemoveMemberAction,
    dispatch?: SignalDispatch,
  ) => void;
}
