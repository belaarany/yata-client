import { Task } from "@/models"
import { EntityState } from "@reduxjs/toolkit"

export interface State extends EntityState<Task> {}

export interface AddTaskDTO {
	project_id: string
	title: string
	description: string
	is_completed: boolean
	tags: string[]
}

export interface UpdateTaskDTO {
	id: string
	project_id: string
	title: string
	description: string
	is_completed: boolean
	tags: string[]
}

export interface DeleteTaskDTO {
	id: string
}
