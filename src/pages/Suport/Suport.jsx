import { HomeNavButton } from '@/components/Buttons/HomeNavButton';
import './Suport.css'
import { motion } from 'framer-motion';
import { Button } from '@/components/Buttons/Button';

export function Suport() {
    return (
        <motion.div className="paesani-suport-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h1 className="paesani-suport-title">Suporte</h1>
            <motion.div className="paesani-suport-content"
                initial={{ opacity: 0, y: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <form action="" method="post" className="paesani-suport-form">
                    <h1 className="paesani-suport-form-title">Como podemos te ajudar?</h1>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder='Digite seu nome' />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='Digite seu email' />

                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" placeholder='Descreva sua dúvida'></textarea>

                    <div className="paesani-suport-form-buttons">
                        <Button label="Enviar" />
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}