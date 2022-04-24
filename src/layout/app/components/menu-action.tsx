import { Box, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from "@chakra-ui/react"

export const MenuAction = ({ children, onClick }: any) => (
	<Flex fontSize="sm" fontWeight="medium" color="gray.500" onClick={onClick}>
		<Box mr="2">
			<i className="far fa-plus-circle"></i>
		</Box>
		<Box>{children}</Box>
	</Flex>
)
