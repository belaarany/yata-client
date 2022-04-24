import { RootState } from "@/store/store"
import { EntityId } from "@reduxjs/toolkit"
import { entityAdapter } from "./state"

const entityAdapterSelectors = entityAdapter.getSelectors<RootState>((state) => state.tasks)

export const selectTasks = () => (state: RootState) => entityAdapterSelectors.selectAll(state)

export const selectTasksByProjectId = (projectId: string | null) => (state: RootState) => entityAdapterSelectors.selectAll(state).filter((task) => task.project_id === projectId)

export const selectTasksByTag = (tag: string) => (state: RootState) => entityAdapterSelectors.selectAll(state).filter((task) => task.tags.includes(tag))

export const selectTaskCounts =
	() =>
	(state: RootState): Record<string, number> => {
		return entityAdapterSelectors.selectAll(state).reduce<any>((accu, value, idx) => {
			let key = value.project_id || "$inbox"
			accu[key] = (accu[key] || 0) + 1
			accu["$total"] = (accu["$total"] || 0) + 1
			return accu
		}, {})
	}

export const selectTags =
	() =>
	(state: RootState): Record<string, number> => {
		return entityAdapterSelectors.selectAll(state).reduce<any>((accu, value, idx) => {
			value.tags.forEach((tag) => {
				accu[tag] = (accu[tag] || 0) + 1
			})
			return accu
		}, {})
	}
