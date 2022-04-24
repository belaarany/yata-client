import { Project } from "@/models"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { State } from "./interfaces"

export const entityAdapter = createEntityAdapter<Project>({
	selectId: (entity) => entity.id,
})

export const initialState: State = {
	...entityAdapter.getInitialState(),
}
