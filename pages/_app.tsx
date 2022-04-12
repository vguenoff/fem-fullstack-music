import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { PlayerLayout } from '../components/PlayerLayout'
import 'reset-css'
// TODO: Refactor with scss modules, css variables and maybe Open Props
const theme = extendTheme({
    colors: {
        gray: {
            100: '#f5f5f5',
            200: '#eeeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
        },
    },
    components: {
        Button: {
            variants: {
                link: {
                    ':focus': {
                        outline: 'none',
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
})

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider {...{ theme }}>
            <PlayerLayout>
                <Component {...pageProps} />
            </PlayerLayout>
        </ChakraProvider>
    )
}

export default MyApp
