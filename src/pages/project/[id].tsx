import { ProjectEditorModal, TasksPresenter } from "@/components"
import { AppLayout } from "@/layout/app"
import { ProjectHeader, ProjectLayout } from "@/layout/project"
import { useAppDispatch, useAppSelector } from "@/store"
import { deleteProject, selectProjectById } from "@/store/features/projects"
import { useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { ReactElement } from "react"

const ProjectPage = () => {
	const router = useRouter()
	const dispatch = useAppDispatch()
	const projectEditorModal = useDisclosure()
	const { id: projectId } = router.query
	const project = useAppSelector(selectProjectById(projectId as string))

	const onEditProjectClick = () => {
		projectEditorModal.onOpen()
	}

	const onDeleteProjectClick = async () => {
		if (!project) {
			return
		}

		await dispatch(
			deleteProject({
				id: project.id,
			}),
		)

		router.push("/inbox")
	}

	if (!project) {
		return null
	}

	return (
		<>
			<ProjectLayout>
				<ProjectHeader
					header={project.name}
					actionMenuItems={[
						{
							icon: "far fa-pen",
							label: "Edit Project",
							onClick: onEditProjectClick,
						},
						{
							icon: "far fa-trash-alt",
							label: "Delete Project",
							onClick: onDeleteProjectClick,
						},
					]}
				/>

				<TasksPresenter projectId={project.id} />
			</ProjectLayout>

			<ProjectEditorModal isOpen={projectEditorModal.isOpen} onClose={projectEditorModal.onClose} project={project} />
		</>
	)
}

ProjectPage.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>
}

export default ProjectPage
