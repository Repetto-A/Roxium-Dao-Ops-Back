export type ErrorCode =
  | "DuplicateDocumentIdError"
  | "InvalidDocumentKindError"
  | "DocumentNotFoundError";

export interface ReducerError {
  errorCode: ErrorCode;
}

export class DuplicateDocumentIdError extends Error implements ReducerError {
  errorCode = "DuplicateDocumentIdError" as ErrorCode;
  constructor(message = "DuplicateDocumentIdError") {
    super(message);
  }
}

export class InvalidDocumentKindError extends Error implements ReducerError {
  errorCode = "InvalidDocumentKindError" as ErrorCode;
  constructor(message = "InvalidDocumentKindError") {
    super(message);
  }
}

export class DocumentNotFoundError extends Error implements ReducerError {
  errorCode = "DocumentNotFoundError" as ErrorCode;
  constructor(message = "DocumentNotFoundError") {
    super(message);
  }
}

export const errors = {
  AddDocument: { DuplicateDocumentIdError, InvalidDocumentKindError },
  RemoveDocument: { DocumentNotFoundError },
};
