# Vetra + Next.js Frontend Integration - Status Report

## ✅ COMPLETED: Backend (Vetra) - Auto-Generated Subgraphs

### What was done:
1. **Configured Vetra to use auto-generated subgraphs** (enabled by default with `DOCUMENT_MODEL_SUBGRAPHS_ENABLED: true`)
2. **Removed custom subgraphs** that were causing type name conflicts
3. **Verified auto-generated GraphQL API** is working correctly

**Subgraph Endpoints:**
- DAO: `http://localhost:4001/graphql/dao`
- Proposal: `http://localhost:4001/graphql/proposal`
- Task: `http://localhost:4001/graphql/task`
- Supergraph: `http://localhost:4001/d/graphql` (all combined)

**Query Structure** (namespace pattern):
```graphql
{
  Dao {
    getDocument(docId: "uuid", driveId: "drive-id") {
      id
      name  # document header name
      documentType
      createdAtUtcIso
      lastModifiedAtUtcIso
      revision
      state {  # actual DAO state
        name
        description
        ownerUserId
        members { id name role joinedAt }
      }
    }
    getDocuments(driveId: "drive-id") {
      # same fields as above
    }
  }
}
```

**Mutation Structure** (flat mutations):
```graphql
mutation {
  # Returns document ID
  Dao_createDocument(name: "My DAO", driveId: "drive-id")

  # All mutations below return operation index (Int)
  Dao_setDaoName(docId: "uuid", driveId: "drive-id", input: { name: "New Name" })
  Dao_setDaoDescription(docId: "uuid", input: { description: "..." })
  Dao_setDaoOwner(docId: "uuid", input: { ownerUserId: "user-id" })
  Dao_addMember(docId: "uuid", input: { id: "member-id", name: "...", role: "...", joinedAt: "..." })
  Dao_updateMemberRole(docId: "uuid", input: { memberId: "member-id", role: "..." })
  Dao_removeMember(docId: "uuid", input: { memberId: "member-id" })
}
```

Same pattern applies for Proposal and Task subgraphs.

---

## ✅ COMPLETED: Frontend Foundation (roxium-dao-ops-front)

### Files created:
1. `lib/vetra/types.ts` - Clean frontend domain types (Dao, Proposal, Task)
2. `lib/vetra/graphql-client.ts` - Server-side GraphQL fetch utility
3. `lib/vetra/mappers.ts` - Convert Vetra documents to frontend types
4. `lib/vetra/queries.ts` - GraphQL query strings (needs updating for actual schema)

---

## 🔄 NEXT STEPS - Frontend Integration

### Backend Status: ✅ READY
- Vetra server running at `http://localhost:4001`
- Auto-generated GraphQL API verified working
- Drive ID: `preview-81d3e4ae` (for preview/demo documents)

### Frontend Tasks Remaining:
1. ✅ Created `lib/vetra/` foundation files (types, graphql-client, mappers, queries - **needs schema update**)
2. ⏳ Update `lib/vetra/queries.ts` to match auto-generated GraphQL schema
3. ⏳ Create 6 Next.js API route handlers
4. ⏳ Update service layer (apiClient, daoService, proposalService, taskService)
5. ⏳ Update hooks (useDaos, useProposals, useTasks)
6. ⏳ Update components (7 files) and pages (2 files)
7. ⏳ Verify build and lint

---

## Architecture Summary

```
Browser
  ↓
Next.js API Routes (/api/vetra/*)
  ↓ (GraphQL over HTTP)
Vetra GraphQL Server (localhost:4001/graphql)
  ↓ (via custom subgraphs)
Document Model Operations
  ↓ (via reducers)
Document State (persisted in drive)
```

**Key Design Decisions:**
- ✅ Keep `[daoKey]` route param name (value is Vetra doc ID)
- ✅ Remove `ownerAddress` field from DAO create form (set via auth later)
- ✅ No auth for MVP (add later via middleware)
- ✅ Server-side GraphQL (no browser GraphQL client dependency)
- ✅ Clean type mapping (Vetra PHDocument → frontend Dao/Proposal/Task)

---

## Files Modified

### Backend (roxium-dao-vetra):
- `subgraphs/dao-subgraph/schema.ts` ✅
- `subgraphs/dao-subgraph/resolvers.ts` ✅
- `subgraphs/dao-subgraph/index.ts` ✅
- `subgraphs/proposal-subgraph/schema.ts` ✅
- `subgraphs/proposal-subgraph/resolvers.ts` ✅
- `subgraphs/proposal-subgraph/index.ts` ✅
- `subgraphs/task-subgraph/schema.ts` ✅
- `subgraphs/task-subgraph/resolvers.ts` ✅
- `subgraphs/task-subgraph/index.ts` ✅
- `subgraphs/index.ts` ✅

### Frontend (roxium-dao-ops-front):
- `lib/vetra/types.ts` ✅
- `lib/vetra/graphql-client.ts` ✅
- `lib/vetra/mappers.ts` ✅
- `lib/vetra/queries.ts` ✅ (needs schema update after restart)

---

## Command to Resume Work

After restarting Vetra and verifying it works, run this in the frontend repo:

```bash
cd /home/repe/projects/claudio/roxium-dao-ops-front
npm run dev
```

Then I can complete the integration by creating API routes and updating the service layer.
