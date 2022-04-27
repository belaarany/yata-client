import { useAppDispatch } from "@/store"
import { addProject, updateProject } from "@/store/features/projects"
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Portal, useToast } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import * as yup from "yup"

export const ProjectEditorModal = ({ isOpen, onClose, project }: any) => {
	const { t } = useTranslation("project")
	const isNew = useMemo(() => !project, [project])
	const dispatch = useAppDispatch()
	const toast = useToast()
	const form = useForm({
		resolver: yupResolver(
			yup.object({
				name: yup.string().min(3).max(40).required().ensure().label(t("modal.form.name")),
			}),
		),
	})

	useEffect(() => {
		form.reset({
			name: project?.name,
		})
	}, [isOpen, form, project])

	const onSubmit = async (data: Record<string, any>) => {
		if (isNew) {
			await dispatch(
				addProject({
					values: {
						name: data.name,
					},
				}),
			)
			toast({
				title: t("modal.toast.project_created"),
				status: "success",
			})
		} else {
			await dispatch(
				updateProject({
					id: project.id,
					changes: {
						name: data.name,
					},
				}),
			)
			toast({
				title: t("modal.toast.project_updated"),
				status: "success",
			})
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
						<ModalHeader>{isNew ? t("modal.header_create") : t("modal.header_edit")}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl isInvalid={form.formState.errors.name} isDisabled={form.formState.isSubmitting}>
								<FormLabel htmlFor="name">{t("modal.form.name")}</FormLabel>
								<Input id="name" {...form.register("name")} />
								<FormErrorMessage>{form.formState.errors.name?.message}</FormErrorMessage>
							</FormControl>
						</ModalBody>
						<ModalFooter>
							<Button variant="ghost" onClick={onClose} mr="2">
								{t("buttons:close")}
							</Button>
							<Button colorScheme="brand" type="submit" isLoading={form.formState.isSubmitting} isDisabled={!form.formState.isDirty}>
								{isNew ? t("buttons:create") : t("buttons:save")}
							</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</Portal>
	)
}
