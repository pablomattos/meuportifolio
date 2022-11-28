import Avatar from '../img/foto-pablo.jpeg'
import SocialNetWorks from './SocialNetWorks'
import ContactDetails from './ContactDetails'
import Curriculo from '../curriculum/curriculoAtualizadoPablo.pdf'

import	'../styles/components/sidebar.sass'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt='foto do Dev Pablito'/>
      <p className="title">Desenvolvedor</p>
      <SocialNetWorks/>
      <ContactDetails/>
      <a href= { Curriculo } target='_blank' className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar