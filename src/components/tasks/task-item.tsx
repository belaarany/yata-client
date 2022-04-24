import { Box, Flex, Stack, Tag } from "@chakra-ui/react"

export const TaskItem = ({ task, onTaskClick, onCheckClick }: any) => (
	<Flex role="task">
		<Box fontSize="xl" color="blackAlpha.600" mr="3" cursor="pointer" _hover={{}} onClick={onCheckClick}>
			{task.is_completed ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle"></i>}
		</Box>

		<Stack flexGrow={1} spacing="4px" mt="0.5" cursor="pointer" role="task" onClick={onTaskClick}>
			<Box>{task.title}</Box>
			{task.description && (
				<Box fontSize="xs" color="blackAlpha.600">
					{task.description}
				</Box>
			)}
			{task.due && (
				<Flex alignItems="center" fontSize="xs" color="blackAlpha.600">
					<Box mr="1">
						<i className="far fa-calendar-day"></i>
					</Box>
					<Box>{task.due}</Box>
				</Flex>
			)}

			{task.tags.length && (
				<Stack direction="row">
					{task.tags.map((tag: string) => (
						<Tag key={tag} size="sm">#{tag}</Tag>
					))}
				</Stack>
			)}
		</Stack>
	</Flex>
)
