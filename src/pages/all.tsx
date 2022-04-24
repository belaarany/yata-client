import { TasksPresenter } from "@/components"
import { AppLayout } from "@/layout/app"
import { ProjectHeader, ProjectLayout } from "@/layout/project"
import { ReactElement } from "react"

const InboxPage = () => {
	return (
		<ProjectLayout>
			<ProjectHeader>All Tasks</ProjectHeader>

			<TasksPresenter />
		</ProjectLayout>
	)
}

InboxPage.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>
}

export default InboxPage
