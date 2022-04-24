import { Flex, Box } from "@chakra-ui/react"
import Link from "next/link"

export const MenuItem = ({ icon, iconColor, label, sub, isActive, href }: any) => (
	<Link href={href || ""}>
		<Flex alignItems="center" justifyContent="space-between">
			<Flex alignItems="center">
				<Box mr="2" fontSize="lg" color={iconColor}>
					<i className={icon}></i>
				</Box>
				<Box fontSize="md">{label}</Box>
			</Flex>
			<Box fontSize="xs" color="gray.500">
				{sub}
			</Box>
		</Flex>
	</Link>
)
