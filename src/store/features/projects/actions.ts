import { projectService } from "@/services"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { AddProjectDTO, DeleteProjectDTO, UpdateProjectDTO } from "./interfaces"

export const fetchProjects = createAsyncThunk("projects/fetch_projects", async () => {
	return await projectService.fetchProjects()
})

export const addProject = createAsyncThunk("projects/add_project", async (data: AddProjectDTO) => {
	return await projectService.addProject(data)
})

export const updateProject = createAsyncThunk("projects/update_project", async (data: UpdateProjectDTO) => {
	return await projectService.updateProject(data)
})

export const deleteProject = createAsyncThunk("projects/delete_project", async (data: DeleteProjectDTO) => {
	await projectService.deleteProject(data)
	return data.id
})
