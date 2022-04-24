import { Box } from "@chakra-ui/react"

export const MenuHeader = ({ children }: any) => (
	<Box fontSize="xs" fontWeight="medium" color="gray.500" textTransform="uppercase">
		{children}
	</Box>
)
