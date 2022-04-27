import { firebase } from "@/config"
import { Project } from "@/models"
import { defaults } from "@/utils"
import { collection, doc, getDoc, getDocs, QueryDocumentSnapshot, setDoc, updateDoc } from "firebase/firestore/lite"
import { AddProjectDTO, DeleteProjectDTO, Strategy, UpdateProjectDTO } from "../interfaces"

const converter = {
	toFirestore: (data: Project) => data,
	fromFirestore: (snap: QueryDocumentSnapshot<any>): Project =>
		defaults<Project>(
			{
				id: "",
				name: "",
				owner_id: "",
				created_at: null,
			},
			{
				...snap.data(),
				created_at: new Date((snap.get("created_at")?.seconds || 0) * 1000),
			},
		),
}

export class FirebaseFirestoreStrategy implements Strategy {
	private getCollection() {
		return collection(firebase.firestore, "projects").withConverter(converter)
	}

	async fetchProjects(): Promise<Project[]> {
		const col = this.getCollection()
		const snapshot = await getDocs(col)
		const list = snapshot.docs.map((doc) => doc.data())

		return list
	}

	async addProject(data: AddProjectDTO): Promise<Project> {
		const col = this.getCollection()
		const docRef = doc(col)

		await setDoc(docRef, {
			id: docRef.id,
			...data.values,
			owner_id: "null",
			created_at: new Date(),
		})

		const newDoc = (await getDoc(docRef)).data()

		if (!newDoc) {
			throw new Error()
		}

		return newDoc
	}

	async updateProject(data: UpdateProjectDTO): Promise<Project> {
		const col = this.getCollection()
		const docRef = doc(col, data.id)

		await updateDoc(docRef, {
			...data.changes,
		})

		const newDoc = (await getDoc(docRef)).data()

		if (!newDoc) {
			throw new Error()
		}

		return newDoc
	}

	async deleteProject(data: DeleteProjectDTO): Promise<void> {
		await new Promise((r) => setTimeout(r, 1000))

		return
	}
}
