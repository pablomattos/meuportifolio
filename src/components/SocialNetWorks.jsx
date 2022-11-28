import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialnetworks = [
    { links:'https://www.linkedin.com/in/pablo-mattos-355a13100/', name: 'linkedin', icon: <FaLinkedin/>},
    { links:'https://github.com/pablomattos', name: 'github', icon: <FaGithub/>},
    { links:'https://www.instagram.com/pablomoraesdemattos/?next=%2F',name: 'instagram', icon: <FaInstagram/>}
]

const SocialNetWorks = () => {
  return (
    <section className='social-networks'>
        { socialnetworks.map((network) => (
        <a href={ network.links } target='_blank' className='social-btn' id= { network.name } key = { network.name }>
        { network.icon }
        </a>
    ))}
    </section>
  )
}

export default SocialNetWorks