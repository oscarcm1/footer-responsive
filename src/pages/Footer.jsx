import React from 'react'
import { Icon } from '@iconify/react';
import Logo from "../assets/react.svg"
import "./footer.css"

function Footer() {
    return (
        <div className='container'>

            <div className='logo'>
                <img src={Logo} />
            </div>

            <div className='footer'>
                <div className='data'>
                    <Icon icon="ri:home-2-fill" color="white" width={"40px"} />
                    <p>México</p>
                    <a href='#'>Estado de México</a>
                </div>

                <div className='data'>
                    <Icon icon="mingcute:mail-fill" color="white" width={"40px"} />
                    <p>Contacto</p>
                    <a href='#'>mail@gmail.com</a>
                </div>
                <div className='data'>
                    <Icon icon="mingcute:phone-call-fill" color="white" width={"40px"} />
                    <p>Teléfono</p>
                    <a href='#'>+52</a>
                </div>
            </div>

            <div className='line-bg'></div>

            <div className='footer'>

                <div className='data'>
                    <p>Información</p>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Sobre mi</a></li>
                        <li><a href='#'>Tecologías</a></li>
                        <li><a href='#'>Tutoriales</a></li>
                    </ul>

                </div>

                <div className='data'>
                    <p>Helpful Links</p>
                    <li><a href='#'>Información</a></li>
                    <li><a href='#'>Contacto</a></li>
                </div>

                <div className='data'>
                    <p>Suscribete para más</p>
                    <input></input>
                    <button>Suscribir</button>
                </div>

            </div>

            <div className='line-sm'></div>


            <div className='social-media'>
                <div className='social'>
                    <a href="https://www.instagram.com/oscar_psd/" target="_blank" rel="noreferrer" >
                           <Icon icon="ri:instagram-fill" color="white" width={"40px"} />
                    </a>
                    <a href='https://github.com/oscarcm1' target="_blank" rel="noreferrer" > 
                          <Icon icon="mdi:github" color="white" width={"40px"} /> 
                    </a>
                    <a href='#'>
                          <Icon icon="mdi:youtube" color="white" width={"40px"} />
                    </a>
                </div>

                <p>Oscar Chávez  2023.</p>
            </div>


        </div>
    )
}

export default Footer