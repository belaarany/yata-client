import { Project } from "@/models"

export interface Strategy {
	fetchProjects(): Promise<Project[]>
	addProject(data: AddProjectDTO): Promise<Project>
	updateProject(data: UpdateProjectDTO): Promise<Project>
	deleteProject(data: DeleteProjectDTO): Promise<void>
}

export interface AddProjectDTO {
	values: {
		name: string
	}
}

export interface UpdateProjectDTO {
	id: string
	changes: {
		name: string
	}
}

export interface DeleteProjectDTO {
	id: string
}
