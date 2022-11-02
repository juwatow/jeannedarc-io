import Head from 'next/head'
import ContainerBlock from '@components/ContainerBlock'
import Hero from '@components/Hero'
import HighlightedProjects from '@components/HighlightedProjects'

export default function Home() {
  return (
    <ContainerBlock
      title="Jeanne d'Arc Uwatowenimana - Software Engineer, Engineering Manager"
      description="Personal Website"
    >
      <Hero />
      <HighlightedProjects />
  </ContainerBlock>
  )
}
