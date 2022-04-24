import { useAppDispatch } from "@/store"
import { addProject, updateProject } from "@/store/features/projects"
import { addTask, updateTask } from "@/store/features/tasks"
import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Portal,
	Stack,
	Textarea,
	useToast,
} from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const schema = yup.object({
	title: yup.string().max(50).required().ensure().label("Title"),
	description: yup.string().max(200).optional().ensure().label("Description"),
	tags: yup.string().max(200).optional().ensure().label("Tags"),
})

export const TaskEditorModal = ({ isOpen, onClose, projectId, task }: any) => {
	const isNew = useMemo(() => !task, [task])
	const dispatch = useAppDispatch()
	const toast = useToast()
	const form = useForm({
		resolver: yupResolver(schema),
	})

	useEffect(() => {
		form.reset({
			title: task?.title,
			description: task?.description,
			tags: task?.tags?.join(","),
		})
	}, [isOpen, form, task])

	const onSubmit = async (data: Record<string, any>) => {
		let tags = data.tags
		tags = tags.replace(/\,+/g, ",").replace(/(^,)|(,$)/g, "")
		tags = tags ? tags.split(",") : []

		if (isNew) {
			await dispatch(
				addTask({
					project_id: projectId,
					title: data.title,
					description: data.description,
					is_completed: false,
					tags: tags,
				}),
			)
		} else {
			await dispatch(
				updateTask({
					id: task.id,
					project_id: projectId,
					title: data.title,
					description: data.description,
					is_completed: task.is_completed,
					tags: tags,
				}),
			)
		}
		onClose()
		return
	}

	return (
		<Portal>
			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{isNew ? "Create" : "Edit"} Task</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Stack gap="4">
								<FormControl isInvalid={form.formState.errors.title} isDisabled={form.formState.isSubmitting}>
									<FormLabel htmlFor="title">Title</FormLabel>
									<Input id="title" {...form.register("title")} />
									<FormErrorMessage>{form.formState.errors.title?.message}</FormErrorMessage>
								</FormControl>

								<FormControl isInvalid={form.formState.errors.description} isDisabled={form.formState.isSubmitting}>
									<FormLabel htmlFor="description">Description</FormLabel>
									<Textarea id="description" resize="none" {...form.register("description")} />
									<FormErrorMessage>{form.formState.errors.description?.message}</FormErrorMessage>
								</FormControl>

								<FormControl isInvalid={form.formState.errors.tags} isDisabled={form.formState.isSubmitting}>
									<FormLabel htmlFor="tags">Tags</FormLabel>
									<Input id="tags" {...form.register("tags")} />
									<FormHelperText>Separate tags by comma</FormHelperText>
									<FormErrorMessage>{form.formState.errors.tags?.message}</FormErrorMessage>
								</FormControl>
							</Stack>
						</ModalBody>
						<ModalFooter>
							<Button variant="ghost" onClick={onClose} mr="2">
								Close
							</Button>
							<Button colorScheme="brand" type="submit" isLoading={form.formState.isSubmitting} isDisabled={!form.formState.isDirty}>
								{isNew ? "Create" : "Save"}
							</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</Portal>
	)
}
