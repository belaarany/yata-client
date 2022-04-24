import { Project } from "@/models"
import { Box, Stack, StackDivider } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Menu, MenuAction, MenuHeader, MenuItem } from "./"

export const Sidebar = ({ projects, tags, taskCounts, onAddProjectClick }: any) => {
	const { t } = useTranslation("sidebar")

	return (
		<Box role="sidebar" h="full" w="80" py="4" px="8" bg="blackAlpha.50">
			<Stack divider={<StackDivider borderColor="gray.200" />} spacing={6} align="stretch">
				<Menu>
					<MenuItem icon="fa-fw far fa-inbox" iconColor="blue.500" label={t("inbox")} sub={taskCounts["$inbox"]} href="/inbox" />
					<MenuItem icon="fa-fw far fa-calendar-alt" iconColor="green.500" label={t("upcoming")} href="/upcoming" />
					<MenuItem icon="fa-fw far fa-list-alt" iconColor="yellow.500" label={t("all_tasks")} sub={taskCounts["$total"]} href="/all" />
				</Menu>

				<Menu>
					<MenuHeader>{t("projects")}</MenuHeader>
					{projects.map((project: Project) => (
						<MenuItem key={project.id} icon="fa-fw far fa-list-ul" href={`/project/${project.id}`} label={project.name} sub={taskCounts[project.id] || 0} />
					))}
					<MenuAction onClick={onAddProjectClick}>{t("add_project")}</MenuAction>
				</Menu>

				<Menu>
					<MenuHeader>{t("tags")}</MenuHeader>
					{Object.keys(tags).map((key) => (
						<MenuItem key={key} icon="fa-fw far fa-hashtag" href={`/tag/${key}`} label={key} sub={tags[key]} />
					))}
				</Menu>
			</Stack>
		</Box>
	)
}
