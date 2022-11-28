import { AiOutlineWhatsApp,AiFillEnvironment } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'

import '../styles/components/contactdetails.sass'

const ContactDetails = () => {
  return (
    <section id='information-content'>
        <div className='info-card'>
            <AiOutlineWhatsApp id='phone-icon'/>
            <div>
                <h3>Telefone</h3>
                <p>(51)989017-935</p>
            </div>
        </div>
        <div className='info-card'>
            <MdOutlineEmail id='email-icon'/>
            <div>
                <h3>E-mail</h3>
                <p>pablomoraesdemattos@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='environment-icon'/>
            <div>
                <h3>Localização</h3>
                <p>São Leopoldo/RS</p>
            </div>
        </div>
    </section>
  )
}

export default ContactDetails