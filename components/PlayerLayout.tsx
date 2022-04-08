import { Box } from '@chakra-ui/layout'
import { Sidebar } from 'components/Sidebar'

export const PlayerLayout = ({ children }) => {
    return (
        <Box width="100vw" height="100vh">
            <Box position="absolute" top={0} width="250px" left={0}>
                <Sidebar />
            </Box>
            <Box marginLeft={250} marginBottom={100}>
                {children}
            </Box>
            <Box position="absolute" left={0} border={0}>
                player
            </Box>
        </Box>
    )
}
