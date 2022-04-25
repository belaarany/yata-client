import { ProjectEditorModal } from "@/components"
import { useAppDispatch, useAppSelector } from "@/store"
import { fetchProjects, selectProjects } from "@/store/features/projects"
import { fetchTasks, selectTags, selectTaskCounts } from "@/store/features/tasks"
import { Box, Center, Flex, useDisclosure } from "@chakra-ui/react"
import { useMount } from "react-use"
import { Sidebar } from "./components"
import LogoYWhite from "@/assets/logo-y-white.png"
import Image from "next/image"

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
					<Center h="30px" w="30px" p="5px" borderRadius="sm" bg="whiteAlpha.300" mr="4">
						<Box h="full" w="full" position="relative">
							<Image src={LogoYWhite} layout="fill" alt="sign" />
						</Box>
					</Center>
					<Box fontWeight="medium">YATA - Yet Another Todolist App</Box>
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
