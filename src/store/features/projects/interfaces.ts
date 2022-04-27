import { Project } from "@/models"
import { EntityState } from "@reduxjs/toolkit"

export interface State extends EntityState<Project> {}

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
