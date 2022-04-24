import { Task } from "@/models"
import { nanoid } from "@reduxjs/toolkit"
import { AddTaskDTO, DeleteTaskDTO, Strategy, UpdateTaskDTO } from "../interfaces"
import { faker } from "@faker-js/faker"
import { inboxProjectId } from "@/types"

const delay = 150
const tags = faker.datatype.array(faker.datatype.number({ min: 5, max: 7 })).map(() => faker.lorem.word())

export class MockStrategy implements Strategy {
	async fetchTasks(): Promise<Task[]> {
		await new Promise((r) => setTimeout(r, delay))

		return faker.datatype.array(faker.datatype.number({ min: 10, max: 20 })).map(() => ({
			id: faker.datatype.uuid(),
			project_id: faker.random.arrayElement(["kx2kbjsgli643mjgxg", "a1okbwekgo3pk8lyar", "q6nvk1vnjt2q454xdi", "tczkdotsup9avj20ig", inboxProjectId]),
			title: faker.lorem.words(faker.datatype.number({ min: 2, max: 3 })),
			description: faker.lorem.words(faker.datatype.number({ min: 2, max: 3 })),
			is_completed: faker.datatype.boolean(),
			// tags: faker.datatype.array(faker.datatype.number({ min: 0, max: 3 })).map(() => faker.lorem.word()),
			tags: faker.random.arrayElements(tags, faker.datatype.number({ min: 0, max: 3 })),
		}))
	}

	async addTask(data: AddTaskDTO): Promise<Task> {
		await new Promise((r) => setTimeout(r, delay))

		return {
			id: nanoid(),
			...data,
		}
	}

	async updateTask(data: UpdateTaskDTO): Promise<Task> {
		await new Promise((r) => setTimeout(r, delay))

		return {
			...data,
		}
	}

	async deleteTask(data: DeleteTaskDTO): Promise<void> {
		await new Promise((r) => setTimeout(r, delay))

		return
	}
}
