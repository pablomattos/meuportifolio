import AboutContent from './AboutContent'
import ProjectsContent from './ProjectsContent'
import TechnologiesContent from './TechnologiesContent'

import '../styles/components/maincontent.sass'


const MainContent = () => {
  return (
    <main id='maincontent'>
      <AboutContent/>
      <TechnologiesContent/>
      <ProjectsContent/>
    </main>
  )
}

export default MainContent