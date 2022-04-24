import { Task } from "@/models"
import { useAppDispatch, useAppSelector } from "@/store"
import { selectTasks, selectTasksByProjectId, updateTask, selectTasksByTag } from "@/store/features/tasks"
import { ProjectID } from "@/types"
import { Box, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { TaskEditorModal } from "../task-editor-modal"
import { AddTask } from "./add-task"
import { TaskItem } from "./task-item"
import { TaskList } from "./task-list"

type Props = {
	projectId?: ProjectID
	tag?: string
}

const defaultProps: Props = {
	projectId: undefined,
	tag: undefined,
}

const TasksPresenter = ({ projectId, tag }: Props) => {
	const getTasksSelector = () => {
		if (projectId) {
			return selectTasksByProjectId(projectId || null)
		} else {
			if (tag) {
				return selectTasksByTag(tag)
			} else {
				return selectTasks()
			}
		}
	}

	const dispatch = useAppDispatch()
	const taskEditorModal = useDisclosure()
	const tasks = useAppSelector(getTasksSelector())
	const [task, setTask] = useState<Task | null>(null)

	const onAddTaskClick = () => {
		setTask(null)
		taskEditorModal.onOpen()
	}

	const onTaskClick = (task: Task) => {
		setTask(task)
		taskEditorModal.onOpen()
	}

	const onCheckClick = (task: Task) => {
		dispatch(
			updateTask({
				id: task.id,
				project_id: task.project_id,
				title: task.title,
				description: task.description,
				is_completed: !task.is_completed,
				tags: task.tags,
			}),
		)
	}

	return (
		<>
			<Box role="tasks-presenter" overflowY="auto">
				<TaskList>
					{tasks.map((task) => (
						<TaskItem key={task.id} task={task} onTaskClick={() => onTaskClick(task)} onCheckClick={() => onCheckClick(task)} />
					))}
				</TaskList>

				<AddTask onClick={onAddTaskClick} />
			</Box>

			<TaskEditorModal isOpen={taskEditorModal.isOpen} onClose={taskEditorModal.onClose} projectId={projectId} task={task} />
		</>
	)
}

TasksPresenter.defaultProps = defaultProps

export { TasksPresenter }
