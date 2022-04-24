import { AppLayout } from "@/layout/app"
import { Box, Flex, Stack } from "@chakra-ui/react"
import { ReactElement } from "react"

const UpcomingPage = () => {
	return <>upcoming</>
}

UpcomingPage.getLayout = function getLayout(page: ReactElement) {
	return <AppLayout>{page}</AppLayout>
}

export default UpcomingPage
