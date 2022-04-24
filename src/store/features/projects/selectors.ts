import { RootState } from "@/store/store"
import { EntityId } from "@reduxjs/toolkit"
import { entityAdapter } from "./state"

const entityAdapterSelectors = entityAdapter.getSelectors<RootState>((state) => state.projects)

export const selectProjects = () => (state: RootState) => entityAdapterSelectors.selectAll(state)

export const selectProjectById = (id: EntityId) => (state: RootState) => entityAdapterSelectors.selectById(state, id)
