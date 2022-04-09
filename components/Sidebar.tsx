import Image from 'next/image'
import Link from 'next/link'

import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/layout'

import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite,
} from 'react-icons/md'

const navMenu = [
    {
        name: 'Home',
        icon: MdHome,
        route: '/',
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: '/search',
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library',
    },
]

export const Sidebar = () => {
    return (
        <Box
            width="100%"
            height="calc(100vh - 100px)"
            bg="black"
            paddingX="5px"
            color="grey "
        >
            <Box paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <Image src="/logo.svg" height={60} width={120} />
                </Box>
            </Box>
            <Box marginBottom="20px">
                <List spacing={2}>
                    {navMenu.map((menu, i) => (
                        <ListItem
                            paddingX="20px"
                            fontSize="16px"
                            key={`${menu.name + i}`}
                        >
                            <LinkBox>
                                <Link href={menu.route} passHref>
                                    <LinkOverlay>
                                        <ListIcon
                                            as={menu.icon}
                                            color="white"
                                            marginRight="10px"
                                        />
                                        {menu.name}
                                    </LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}
