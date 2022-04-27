import { FirebaseFirestoreStrategy, MockStrategy } from "./strategies"

// export const projectService = new MockStrategy()
export const projectService = new FirebaseFirestoreStrategy()
