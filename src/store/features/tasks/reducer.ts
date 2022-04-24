import { createReducer } from "@reduxjs/toolkit"
import { addTask, fetchTasks, updateTask } from "./actions"
import { entityAdapter, initialState } from "./state"

export const reducer = createReducer(initialState, (builder) => {
	builder.addCase(fetchTasks.fulfilled, (state, action) => {
		entityAdapter.setMany(state, action.payload)
	})
	builder.addCase(addTask.fulfilled, (state, action) => {
		entityAdapter.addOne(state, action.payload)
	})
	builder.addCase(updateTask.fulfilled, (state, action) => {
		entityAdapter.updateOne(state, {
			id: action.payload.id,
			changes: action.payload,
		})
	})
})
