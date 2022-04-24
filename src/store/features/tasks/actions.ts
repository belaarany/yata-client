import { taskService } from "@/services"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { AddTaskDTO, UpdateTaskDTO } from "./interfaces"

export const fetchTasks = createAsyncThunk("tasks/fetch_tasks", async () => {
	return await taskService.fetchTasks()
})

export const addTask = createAsyncThunk("tasks/add_task", async (data: AddTaskDTO, thunkAPI) => {
	return await taskService.addTask(data)
})

export const updateTask = createAsyncThunk("projects/update_task", async (data: UpdateTaskDTO) => {
	return await taskService.updateTask(data)
})
