import { ProjectEditorModal } from "@/components"
import { useAppDispatch, useAppSelector } from "@/store"
import { fetchProjects, selectProjects } from "@/store/features/projects"
import { fetchTasks, selectTags, selectTaskCounts } from "@/store/features/tasks"
import { Box, Flex, useDisclosure } from "@chakra-ui/react"
import { useMount } from "react-use"
import { Sidebar } from "./components"

export const AppLayout = ({ children }: any) => {
	const dispatch = useAppDispatch()
	const projects = useAppSelector(selectProjects())
	const projectEditorModal = useDisclosure()
	const taskCounts = useAppSelector(selectTaskCounts())
	const tags = useAppSelector(selectTags())

	useMount(() => {
		dispatch(fetchProjects())
		dispatch(fetchTasks())
	})

	const onAddProjectClick = () => {
		projectEditorModal.onOpen()
	}

	return (
		<>
			<Flex role="app-layout" h="100vh" w="100vw" direction="column">
				<Flex role="header" flexShrink={0} h="12" px="8" bg="brand.500" color="white" alignItems="center">
					header
				</Flex>

				<Flex role="content" flex="1">
					<Sidebar projects={projects} tags={tags} taskCounts={taskCounts} onAddProjectClick={onAddProjectClick} />

					<Box role="main" flex="1">
						<Box w="full">{children}</Box>
					</Box>
				</Flex>
			</Flex>

			<ProjectEditorModal isOpen={projectEditorModal.isOpen} onClose={projectEditorModal.onClose} />
		</>
	)
}
