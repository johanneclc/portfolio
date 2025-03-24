'use client' 

import {  AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Menu from '../components/Menu/menu';
import './contact.css';

export default function Contact() {

  
  const copyMail = async () => {
    await navigator.clipboard.writeText('johannecalcoen@gmail.com');
    alert('Mail copié dans le presse-papier !');
  }

  const copyPhone = async () => {
    await navigator.clipboard.writeText('0780019966');
    alert('Numéro de téléphone copié dans le presse-papier !');
  }

  return (
      <div>
        <Menu />
        <div style={{ paddingTop: '100px' }}> 
          <h1 className='page-title'> Contact </h1>
          <div className='columns-4 content-center' style={{ paddingTop: '150px' }}> 
            <div>
              <a href='https://www.linkedin.com/in/johanne-calcoen-72a5b4194/' target="_blank">
                <AiOutlineLinkedin className='contact-icon'/>
              </a>
              <h4 className="contact contact-linkedin">Linkedin</h4>
            </div>
            <div>
              <a href='https://github.com/johanneclc?tab=repositories' target="_blank">
                <AiOutlineGithub className='contact-icon'/>  
              </a>
              <h4 className="contact contact-github">Github</h4>          
            </div>
            <div>
              <AiOutlineMail className='contact-icon' onClick={copyMail}/>
              <h4 className="contact contact-mail">johannecalcoen@gmail.com</h4>
            </div>
            <div> 
              <AiOutlinePhone className='contact-icon' onClick={copyPhone}/>
              <h4 className="contact contact-phone">07 80 01 99 66</h4>
            </div>
          </div>
        </div>
      </div>
  );
}


