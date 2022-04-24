import { Project } from "@/models"

export interface Strategy {
	fetchProjects(): Promise<Project[]>
	addProject(data: AddProjectDTO): Promise<Project>
	updateProject(data: UpdateProjectDTO): Promise<Project>
	deleteProject(data: DeleteProjectDTO): Promise<void>
}

export interface AddProjectDTO {
	name: string
}

export interface UpdateProjectDTO {
	id: string
	name: string
}

export interface DeleteProjectDTO {
	id: string
}
