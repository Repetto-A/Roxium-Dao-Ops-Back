import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  author: {
    name: "Roxium Labs",
    website: "https://roxium.io",
  },
  description:
    "Represents a task linked to a DAO and optionally a proposal. Status: TODO/IN_PROGRESS/DONE.",
  extension: "rxtask",
  id: "roxium/task",
  name: "Task",
  specifications: [
    {
      changeLog: [],
      modules: [
        {
          description: "Core Task operations",
          id: "task_core_module",
          name: "core",
          operations: [
            {
              description: "Sets or initializes the task details",
              errors: [],
              examples: [],
              id: "task_op_set_details",
              name: "SET_TASK_DETAILS",
              reducer:
                "state.daoId = action.input.daoId;\nstate.title = action.input.title;\nstate.description = action.input.description || null;\nstate.proposalId = action.input.proposalId || null;\nstate.assignee = action.input.assignee || null;\nstate.createdBy = action.input.createdBy;\nstate.createdAt = action.input.createdAt;\nstate.budget = action.input.budget || null;\nstate.deadline = action.input.deadline || null;",
              schema:
                "input SetTaskDetailsInput {\n  daoId: String!\n  proposalId: String\n  title: String!\n  description: String\n  budget: Float\n  deadline: DateTime\n  assignee: String\n  createdBy: String!\n  createdAt: DateTime!\n}",
              scope: "global",
              template: "Sets or initializes the task details",
            },
            {
              description: "Updates the task status (TODO, IN_PROGRESS, DONE)",
              errors: [],
              examples: [],
              id: "task_op_update_status",
              name: "UPDATE_TASK_STATUS",
              reducer:
                "state.status = action.input.status;\nstate.updatedAt = action.input.updatedAt;",
              schema:
                "input UpdateTaskStatusInput {\n  status: String!\n  updatedAt: DateTime!\n}",
              scope: "global",
              template: "Updates the task status (TODO, IN_PROGRESS, DONE)",
            },
            {
              description: "Assigns or reassigns the task to a member",
              errors: [],
              examples: [],
              id: "task_op_assign",
              name: "ASSIGN_TASK",
              reducer:
                "state.assignee = action.input.assignee;\nstate.updatedAt = action.input.updatedAt;",
              schema:
                "input AssignTaskInput {\n  assignee: String!\n  updatedAt: DateTime!\n}",
              scope: "global",
              template: "Assigns or reassigns the task to a member",
            },
            {
              description: "Adds a document to the task",
              errors: [
                {
                  code: "DUPLICATE_DOCUMENT_ID",
                  description:
                    "A document with this ID already exists in the task",
                  id: "task_err_dup_doc",
                  name: "DuplicateDocumentIdError",
                  template: "",
                },
                {
                  code: "INVALID_DOCUMENT_KIND",
                  description: "The document kind must be IMAGE or PDF",
                  id: "task_err_invalid_kind",
                  name: "InvalidDocumentKindError",
                  template: "",
                },
              ],
              examples: [],
              id: "task_op_add_document",
              name: "ADD_DOCUMENT",
              reducer:
                'const existing = state.documents.find(d => d.id === action.input.id);\nif (existing) {\n  throw new DuplicateDocumentIdError(`Document with id ${action.input.id} already exists`);\n}\nconst validKinds = ["IMAGE", "PDF"];\nif (!validKinds.includes(action.input.kind)) {\n  throw new InvalidDocumentKindError(`Invalid document kind: ${action.input.kind}. Must be IMAGE or PDF`);\n}\nstate.documents.push({\n  id: action.input.id,\n  url: action.input.url,\n  kind: action.input.kind,\n});',
              schema:
                "input AddDocumentInput {\n  id: OID!\n  url: URL!\n  kind: DocumentKind!\n}",
              scope: "global",
              template: "Adds a document to the task",
            },
            {
              description: "Removes a document from the task",
              errors: [
                {
                  code: "DOCUMENT_NOT_FOUND",
                  description:
                    "The specified document was not found in the task",
                  id: "task_err_doc_not_found",
                  name: "DocumentNotFoundError",
                  template: "",
                },
              ],
              examples: [],
              id: "task_op_remove_document",
              name: "REMOVE_DOCUMENT",
              reducer:
                "const idx = state.documents.findIndex(d => d.id === action.input.id);\nif (idx === -1) {\n  throw new DocumentNotFoundError(`Document with id ${action.input.id} not found`);\n}\nstate.documents.splice(idx, 1);",
              schema: "input RemoveDocumentInput {\n  id: OID!\n}",
              scope: "global",
              template: "Removes a document from the task",
            },
          ],
        },
      ],
      state: {
        global: {
          examples: [],
          initialValue:
            '{"daoId":"","proposalId":"","title":"","description":"","status":"TODO","budget":null,"deadline":null,"assignee":"","createdBy":"","createdAt":null,"updatedAt":null,"documents":[]}',
          schema:
            "enum DocumentKind {\n  IMAGE\n  PDF\n}\n\ntype TaskAttachment {\n  id: OID!\n  url: URL!\n  kind: DocumentKind!\n}\n\ntype TaskState {\n  daoId: String\n  proposalId: String\n  title: String\n  description: String\n  status: String\n  budget: Float\n  deadline: DateTime\n  assignee: String\n  createdBy: String\n  createdAt: DateTime\n  updatedAt: DateTime\n  documents: [TaskAttachment!]!\n}",
        },
        local: {
          examples: [],
          initialValue: "",
          schema: "",
        },
      },
      version: 1,
    },
  ],
};
