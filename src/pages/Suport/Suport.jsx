import './Suport.css'
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Suport() {
    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Mensagem enviada com sucesso!", {
            theme: "light",
        });
    };
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
                <form action="" method="post" className="paesani-suport-form" onSubmit={handleSubmit}>
                    <h1 className="paesani-suport-form-title">Como podemos te ajudar?</h1>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder='Digite seu nome' required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='Digite seu email' required />

                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" placeholder='Descreva sua dúvida' required></textarea>

                    <div className="paesani-suport-form-buttons">
                        <button type="submit" className="paesani-suport-form-btn">
                            Enviar <FaPlay style={{
                                marginLeft: "8px",
                                fontSize: "0.8rem",
                                color: "#F0F0F0"
                            }} />
                        </button>
                    </div>
                </form>
            </motion.div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
            />
        </motion.div>
    )
}