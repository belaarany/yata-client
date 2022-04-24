import { Task } from "@/models"
import { Stack, StackDivider } from "@chakra-ui/react"
import { ReactElement } from "react"
import { TaskItem } from "./task-item"

type Props = {
	children: ReactElement[] | null
}

const defaultProps: Props = {
	children: null,
}

const TaskList = ({ children }: Props) => {
	return (
		<Stack role="task-list" divider={<StackDivider borderColor="gray.100" />} spacing={3} align="stretch">
			{children}
		</Stack>
	)
}

TaskList.defaultProps = defaultProps

export { TaskList }
