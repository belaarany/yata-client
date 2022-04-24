import { configureStore } from "@reduxjs/toolkit"
import * as features from "./features"

export const store = configureStore({
	devTools: {
		name: "YATA",
	},
	reducer: {
		projects: features.projects.reducer,
		tasks: features.tasks.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
