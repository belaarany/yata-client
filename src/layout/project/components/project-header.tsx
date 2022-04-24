import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

export const ProjectHeader = ({ children, header, actionMenuItems }: any) => (
	<Flex justifyContent="space-between">
		<Box fontSize="2xl" fontWeight="medium" mb="6">
			{children || header || "N/A"}
		</Box>
		{actionMenuItems && (
			<Menu>
				<MenuButton as={IconButton} aria-label="Options" icon={<i className="fas fa-ellipsis-h-alt"></i>} variant="ghost" />

				<MenuList>
					{actionMenuItems?.map((item: any) => (
						<MenuItem icon={<i className={item.icon}></i>} onClick={item.onClick}>
							{item.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		)}
	</Flex>
)
