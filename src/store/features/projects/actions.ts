import { projectService } from "@/services"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { AddProjectDTO, DeleteProjectDTO, UpdateProjectDTO } from "./interfaces"

export const fetchProjects = createAsyncThunk("projects/fetch_projects", async () => {
	return await projectService.fetchProjects()
})

export const addProject = createAsyncThunk("projects/add_project", async (data: AddProjectDTO) => {
	return await projectService.addProject({
		values: data.values,
	})
})

export const updateProject = createAsyncThunk("projects/update_project", async (data: UpdateProjectDTO, thunkApi) => {
	return await projectService.updateProject({
		id: data.id,
		changes: data.changes,
	})
})

export const deleteProject = createAsyncThunk("projects/delete_project", async (data: DeleteProjectDTO, thunkApi) => {
	await projectService.deleteProject({
		id: data.id,
	})

	return data.id
})
