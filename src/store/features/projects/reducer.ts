import { createReducer } from "@reduxjs/toolkit"
import { addProject, deleteProject, fetchProjects, updateProject } from "./actions"
import { entityAdapter, initialState } from "./state"

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(fetchProjects.fulfilled, (state, action) => {
		entityAdapter.setMany(state, action.payload)
	})
	builder.addCase(addProject.fulfilled, (state, action) => {
		entityAdapter.addOne(state, action.payload)
	})
	builder.addCase(updateProject.fulfilled, (state, action) => {
		entityAdapter.updateOne(state, {
			id: action.payload.id,
			changes: action.payload,
		})
	})
	builder.addCase(deleteProject.fulfilled, (state, action) => {
		entityAdapter.removeOne(state, action.payload)
	})
})
