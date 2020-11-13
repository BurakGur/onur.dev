import { Heading, Link, Stack, Text } from '@chakra-ui/react'

const MusicCard = (props) => {
  const { description, likeCount, playCount, title, url } = props

  return (
    <Link
      isExternal
      href={url}
      css={{
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none'
        }
      }}
    >
      <Stack spacing={2}>
        <Heading as="h3" fontSize="lg" fontWeight="medium" lineHeight="base">
          {title} — {description}
        </Heading>
        <Text color="gray.500" lineHeight="shorter">
          {playCount}
          {'+ plays'}
          {' • '}
          {likeCount}
          {'+ likes'}
        </Text>
      </Stack>
    </Link>
  )
}

export default MusicCard
