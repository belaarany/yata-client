import { Project } from "@/models"
import { nanoid } from "@reduxjs/toolkit"
import { AddProjectDTO, DeleteProjectDTO, Strategy, UpdateProjectDTO } from "../interfaces"
import { faker } from "@faker-js/faker"

export class MockStrategy implements Strategy {
	async fetchProjects(): Promise<Project[]> {
		await new Promise((r) => setTimeout(r, 1000))

		return faker.datatype.array(faker.datatype.number({ min: 2, max: 4 })).map(() => ({
			id: faker.random.arrayElement(["kx2kbjsgli643mjgxg", "a1okbwekgo3pk8lyar", "q6nvk1vnjt2q454xdi", "tczkdotsup9avj20ig"]),
			name: faker.lorem.words(faker.datatype.number({ min: 2, max: 3 })),
			owner_id: nanoid(),
			created_at: new Date(),
		}))
	}

	async addProject(data: AddProjectDTO): Promise<Project> {
		await new Promise((r) => setTimeout(r, 1000))

		return {
			id: nanoid(),
			owner_id: nanoid(),
			created_at: new Date(),
			...data.values,
		}
	}

	async updateProject(data: UpdateProjectDTO): Promise<Project> {
		await new Promise((r) => setTimeout(r, 1000))

		return {
			id: data.id,
			owner_id: nanoid(),
			created_at: new Date(),
			...data.changes,
		}
	}

	async deleteProject(data: DeleteProjectDTO): Promise<void> {
		await new Promise((r) => setTimeout(r, 1000))

		return
	}
}
