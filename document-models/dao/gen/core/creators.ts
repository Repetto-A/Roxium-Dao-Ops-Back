import { createAction } from "document-model/core";
import {
  SetDaoNameInputSchema,
  SetDaoDescriptionInputSchema,
  SetDaoOwnerInputSchema,
  AddMemberInputSchema,
  UpdateMemberRoleInputSchema,
  RemoveMemberInputSchema,
} from "../schema/zod.js";
import type {
  SetDaoNameInput,
  SetDaoDescriptionInput,
  SetDaoOwnerInput,
  AddMemberInput,
  UpdateMemberRoleInput,
  RemoveMemberInput,
} from "../types.js";
import type {
  SetDaoNameAction,
  SetDaoDescriptionAction,
  SetDaoOwnerAction,
  AddMemberAction,
  UpdateMemberRoleAction,
  RemoveMemberAction,
} from "./actions.js";

export const setDaoName = (input: SetDaoNameInput) =>
  createAction<SetDaoNameAction>(
    "SET_DAO_NAME",
    { ...input },
    undefined,
    SetDaoNameInputSchema,
    "global",
  );

export const setDaoDescription = (input: SetDaoDescriptionInput) =>
  createAction<SetDaoDescriptionAction>(
    "SET_DAO_DESCRIPTION",
    { ...input },
    undefined,
    SetDaoDescriptionInputSchema,
    "global",
  );

export const setDaoOwner = (input: SetDaoOwnerInput) =>
  createAction<SetDaoOwnerAction>(
    "SET_DAO_OWNER",
    { ...input },
    undefined,
    SetDaoOwnerInputSchema,
    "global",
  );

export const addMember = (input: AddMemberInput) =>
  createAction<AddMemberAction>(
    "ADD_MEMBER",
    { ...input },
    undefined,
    AddMemberInputSchema,
    "global",
  );

export const updateMemberRole = (input: UpdateMemberRoleInput) =>
  createAction<UpdateMemberRoleAction>(
    "UPDATE_MEMBER_ROLE",
    { ...input },
    undefined,
    UpdateMemberRoleInputSchema,
    "global",
  );

export const removeMember = (input: RemoveMemberInput) =>
  createAction<RemoveMemberAction>(
    "REMOVE_MEMBER",
    { ...input },
    undefined,
    RemoveMemberInputSchema,
    "global",
  );
