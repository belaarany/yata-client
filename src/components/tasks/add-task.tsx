import { Box, Flex } from "@chakra-ui/react"

export const AddTask = ({ onClick }: any) => (
	<Flex mt="8" fontSize="sm" fontWeight="medium" color="gray.500" onClick={onClick}>
		<Box mr="2">
			<i className="far fa-plus-circle"></i>
		</Box>
		<Box>Add Task</Box>
	</Flex>
)
