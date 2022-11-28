import { DiHtml5, DiCss3, DiJsBadge, DiJava, DiMysql, DiReact } from 'react-icons/di'
import '../styles/components/technologiescontent.sass'

const technologies = [
  { id: 'html', name: 'HTML5', icon:<DiHtml5/> } ,
  { id: 'css3', name: 'CSS3', icon:<DiCss3/> } ,
  { id: 'js', name: 'JavaScript', icon:<DiJsBadge/> } ,
  { id: 'java', name: 'Java', icon:<DiJava/> } ,
  { id: 'mysql', name: 'MySql', icon:<DiMysql/> } ,
  { id: 'react', name: 'React', icon:<DiReact/> } ,
]

const TecnologiesContent = () => {
  return (
    <section className='technologies-content'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='technology-card' id={ tech.id } key= { tech.id } >
            { tech.icon }
            <div className="technology-info">
              <h3>{ tech.name }</h3>
            </div>           
          </div>
        ))}
      </div>

    </section>
  )
}

export default TecnologiesContent