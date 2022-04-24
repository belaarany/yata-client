import { Task } from "@/models"

export interface Strategy {
	fetchTasks(): Promise<Task[]>
	addTask(data: AddTaskDTO): Promise<Task>
	updateTask(data: UpdateTaskDTO): Promise<Task>
	deleteTask(data: DeleteTaskDTO): Promise<void>
}

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
