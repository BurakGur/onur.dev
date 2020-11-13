import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'
import { Badge, Divider, Grid, Heading, Text, Stack } from '@chakra-ui/react'

// --- Components
import { Layout } from 'components'

// --- Other
import { cvData } from 'utils/constants'
import { safariOnly } from 'utils/helper'

const url = 'https://onur.dev/cv'
const title = 'Curriculum Vitae — Onur Şuyalçınkaya'

const TechStackContainer = styled(Stack)`
  row-gap: 0.5rem;
`

const StackBadge = styled(Badge)`
  ${safariOnly('margin-bottom: 0.5rem')}
`

TechStackContainer.defaultProps = { direction: 'row', wrap: 'wrap', spacing: 2 }

const CurriculumVitae = () => (
  <Fragment>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title
      }}
    />
    <Layout>
      <Stack spacing={8}>
        <Heading as="h1" fontSize="5xl" fontWeight="bolder" lineHeight="shorter">
          Curriculum Vitae
        </Heading>
        <Grid gridGap={6}>
          <Heading as="h2" size="lg" fontSize="3xl">
            Experience
          </Heading>
          {cvData.experiences.map((experience, experienceIndex) => (
            <Fragment key={`experience_${experienceIndex}`}>
              <Grid gap={4}>
                <Grid>
                  <Text fontSize="sm" color="gray.500">
                    {experience.startDate} — {experience.endDate}
                  </Text>
                  <Text fontSize="lg" fontWeight="medium">
                    {experience.title} @ {experience.company}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {experience.location}
                  </Text>
                </Grid>
                {experience.descriptions.map((description, descriptionIndex) => (
                  <Text key={`description_${descriptionIndex}`}>{description}</Text>
                ))}
                {experience.stack?.length > 0 && (
                  <TechStackContainer align="stretch">
                    {experience.stack.map((item, itemIndex) => (
                      <StackBadge
                        key={`stack_${itemIndex}`}
                        variant="outline"
                        fontSize="xxs"
                        lineHeight="taller"
                        letterSpacing="1px"
                        px={2}
                        fontWeight="normal"
                        // css={safariOnly`margin-bottom: 0.5rem;`} // row-gap is not supported on Safari yet
                      >
                        {item}
                      </StackBadge>
                    ))}
                  </TechStackContainer>
                )}
              </Grid>
              {experienceIndex !== cvData.experiences.length - 1 && <Divider />}
            </Fragment>
          ))}
          <Divider />
          <Heading as="h2" size="lg" fontSize="3xl">
            Education
          </Heading>
          {cvData.educations.map((education, educationIndex) => (
            <Fragment key={`education_${educationIndex}`}>
              <Grid gap={4}>
                <Grid>
                  <Text fontSize="sm" color="gray.500">
                    {education.startDate} — {education.endDate}
                  </Text>
                  <Text fontSize="lg" fontWeight="medium">
                    {education.field} @ {education.school}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {education.degree}
                  </Text>
                </Grid>
              </Grid>
              {educationIndex !== cvData.educations.length - 1 && <Divider />}
            </Fragment>
          ))}
        </Grid>
      </Stack>
    </Layout>
  </Fragment>
)

export default CurriculumVitae
