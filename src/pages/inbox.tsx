import { TasksPresenter } from "@/components"
import { AppLayout } from "@/layout/app"
import { ProjectHeader, ProjectLayout } from "@/layout/project"
import { inboxProjectId } from "@/types"
import { ReactElement } from "react"

const InboxPage = () => {
	return (
		<ProjectLayout>
			<ProjectHeader>Inbox</ProjectHeader>

			<TasksPresenter projectId={inboxProjectId} />
		</ProjectLayout>
	)
}

InboxPage.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>
}

export default InboxPage
