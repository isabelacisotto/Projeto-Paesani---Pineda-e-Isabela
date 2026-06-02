import { ChartNoAxesCombined, Footprints, Lightbulb, ScrollText, ShoppingCart, Trophy, Users, X } from 'lucide-react';
import './Card.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function ServicesCard({ name, description, image }) {
    return (
        <motion.div className="card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <img src={image} alt={name} className='card-img' />

            <div className="card-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <button className="play-btn"> Contrate já! </button>
            </div>
        </motion.div>
    )
}

export function ProductsCard({ name, description, image, onModalOpen }) {
    return (
        <motion.div className="card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <img src={image} alt={name} className='card-img' />

            <div className="card-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <button className="play-btn" onClick={onModalOpen}>
                    Compre aqui!
                </button>
            </div>
        </motion.div>
    )
}

export function AboutCard({ name, description }) {
    return (
        <motion.div className="about-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.div className="about-card-icon"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
            >
                {name === 'Origem' && <ScrollText size={25} color='var(--color1)' />}
                {name === 'Primeiros Passos' && <Footprints size={25} color='var(--color1)' />}
                {name === 'Crescimento' && <ChartNoAxesCombined size={25} color='var(--color1)' />}
                {name === 'Evolução e Inovação' && <Lightbulb size={25} color='var(--color1)' />}
                {name === 'Valores e Reconhecimento' && <Trophy size={25} color='var(--color1)' />}
                {name === 'Compromisso com o Cliente' && <Users size={25} color='var(--color1)' />}
            </motion.div>

            <div className="about-card-info">
                <motion.h4
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    viewport={{ once: true }}
                >{name}</motion.h4>
                <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    viewport={{ once: true }}
                >{description}</motion.p>
            </div>
        </motion.div>
    )
}

export function CardModal({ item, onClose, addToCart }) {
    if (!item) return null

    const [quantity, setQuantity] = useState(1);
    const totalPrice = item.price * quantity;

    const toggleAddedToCart = () => {
        addToCart(item, quantity);
        onClose();
    }

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-body">
                        <h2>{item.name}</h2>
                        <p className='modal-category'>{item.modalDescription}</p>
                        <h1>Por apenas: R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h1>
                        <p>disponibilidade: {item.availability}</p>

                        <div className="modal-buttons">
                            <button className="checkout-btn" onClick={toggleAddedToCart}>
                                Adicionar ao Carrinho <ShoppingCart size={20} />
                            </button>
                            <div className="add-decrease-button">
                                <button className="decrease-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    -
                                </button>
                                <span className="quantity">{quantity}</span>
                                <button className="increase-btn" onClick={() => setQuantity(quantity + 1)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="modal-banner-container">
                        <img className='modal-banner' src={item.image} alt={item.name} />
                        <button className="close-btn" onClick={onClose}>
                            <X size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export function CheckoutCard({ name, price, image, quantity, isAdded }) {
    const totalPrice = price * quantity;

    return (
        <div className="checkout-card">
            <img src={image} alt={name} className='checkout-card-img' />
            <div className="checkout-card-info">
                <h4>{name}</h4>
                <p>Quantidade: {quantity}</p>
                <p>Preço total: R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                {isAdded && (
                    <p className="added-to-cart">Adicionado ao carrinho!</p>
                )}
                <button className="remove-btn">
                    Remover do Carrinho
                </button>
            </div>
        </div>
    )
}