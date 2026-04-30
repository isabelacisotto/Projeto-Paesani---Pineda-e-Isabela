import { Mail, PhoneIncoming, MapPin, Clock } from 'lucide-react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { MapPaesani } from '../Map/Map'
import './Footer.css'

export function Footer() {
    return (
        <footer id='footer'>
                <div className="contacts">
                    <h3><PhoneIncoming size={24} />Entre em contato</h3>
                    <p><FaWhatsapp color='#fff' size={18} /> (15) 99152-9492</p>
                    <p><Mail color='#fff' size={18} />paesani.ar@gmail.com</p>
                    <p><FaFacebook color='#fff' size={18} />Paesani Ar Condicionado</p>
                </div>

                <div className="address" style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h3 style={{ display: 'flex', alignItems: 'center' }}>
                        <MapPin size={24} />Endereço
                    </h3>
                    <p>Rua Giácomo Módolo, 1134 - Cerquilho, SP</p>
                    
                    <div className="map" style={{ marginTop: '16px' }}>
                        <MapPaesani />
                    </div>
                </div>

                <div className="opening-hours">
                    <h3><Clock size={24} />Horário de atendimento</h3>
                    <p>Segunda a Sexta: 8:00 ás 17:00</p>
                    <p>Sábados: 7:30 ás 12:00</p>
                    <p>Domingos: Fechado</p>
                </div>
        </footer>
    )
}