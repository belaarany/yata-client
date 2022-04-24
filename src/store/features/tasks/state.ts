import { Task } from "@/models"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { State } from "./interfaces"

export const entityAdapter = createEntityAdapter<Task>({
	selectId: (entity) => entity.id,
})

export const initialState: State = {
	...entityAdapter.getInitialState(),
}
