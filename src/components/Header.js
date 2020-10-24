import NextLink from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/core'

// --- Others
import { HEADER_HEIGHT, navigations } from 'utils/constants'

const Header = () => {
  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        zIndex={9}
        height={HEADER_HEIGHT}
        width="100%"
        bg="hsla(0, 0%, 100%, 0.8)"
        css={{
          backdropFilter: 'saturate(180%) blur(5px)'
        }}
      >
        <Flex
          justify="space-between"
          alignItems="center"
          height="100%"
          // maxWidth="800px"
          m="0 auto"
          px={{ base: 6, sm: 12 }}
        >
          <NextLink href="/">
            <a aria-label="onur.dev Logo">
              <Text as="span" fontFamily="heading" fontSize="2xl">
                onur
              </Text>
            </a>
          </NextLink>
          <Flex>
            {navigations.map((nav, navIndex) => (
              <React.Fragment key={`nav_${navIndex}`}>
                <NextLink href={nav.url} passHref>
                  <Box as="a" px={{ _: '0.475rem', md: '1.125rem' }}>
                    {nav.name}
                  </Box>
                </NextLink>
              </React.Fragment>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Box height={HEADER_HEIGHT} />
    </>
  )
}

export default Header
