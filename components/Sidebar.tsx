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

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/',
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/favorites',
    },
]

const playlist = new Array(30).fill('').map((_, i) => `Playlist ${i + 1}`)

const MenuListItem = ({ name, icon, route }) => (
    <ListItem paddingX="20px" fontSize="16px">
        <LinkBox>
            <Link href={route} passHref>
                <LinkOverlay>
                    <ListIcon as={icon} color="white" marginRight="10px" />
                    {name}
                </LinkOverlay>
            </Link>
        </LinkBox>
    </ListItem>
)

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
            <Box>
                <List spacing={2}>
                    {navMenu.map(({ name, icon, route }) => {
                        return (
                            <MenuListItem
                                key={name}
                                {...{ name, icon, route }}
                            />
                        )
                    })}
                </List>
            </Box>
            <Box marginTop="15px">
                <List spacing={2}>
                    {musicMenu.map(({ name, icon, route }) => (
                        <MenuListItem key={name} {...{ name, icon, route }} />
                    ))}
                </List>
            </Box>
            <Divider marginY="20px" color="gray.800" />
            <Box height="66%" overflowY="auto" paddingY="20px">
                <List>
                    {playlist.map(p => (
                        <ListItem paddingX="20px" key={p}>
                            <LinkBox>
                                <Link
                                    href={`/${p.split(' ').join('')}`}
                                    passHref
                                >
                                    <LinkOverlay>{p}</LinkOverlay>
                                </Link>
                            </LinkBox>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}
