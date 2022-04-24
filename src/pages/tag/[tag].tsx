import { TasksPresenter } from "@/components"
import { AppLayout } from "@/layout/app"
import { ProjectHeader, ProjectLayout } from "@/layout/project"
import { useRouter } from "next/router"
import { ReactElement } from "react"

const TagPage = () => {
	const router = useRouter()
	const { tag } = router.query

	return (
		<>
			<ProjectLayout>
				<ProjectHeader header={`#${tag}`} />

				<TasksPresenter tag={tag as string} />
			</ProjectLayout>
		</>
	)
}

TagPage.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>
}

export default TagPage
