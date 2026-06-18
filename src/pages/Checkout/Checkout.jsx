import { motion } from "framer-motion"
import './Checkout.css'
import { CheckoutCard } from "@/components/Cards/Card";
import "react-toastify/dist/ReactToastify.css";

export function Checkout({ cart, setCart, onRemoveItem }) {
    const handleWhatsAppCheckout = () => {
        const phone = '5515991529492';
        const cartItems = cart.map(item => `${item.name} (x${item.quantity}) - R$${(item.price * item.quantity).toFixed(2)}`).join('\n');
        const total = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
        const message = `Olá! Gostaria de finalizar a seguinte compra:\n\n${cartItems}\n\nTotal: R$${total}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <motion.div
            className="paesani-checkout-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h1 className="paesani-checkout-title">Meu Carrinho</h1>

            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <div className="paesani-checkout-content">
                    {cart.map((item) => (
                        <CheckoutCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}
                            description={item.description}
                            setCart={setCart}
                            onRemoveItem={onRemoveItem}
                        />
                    ))}

                    <div className="paesani-checkout-buttons">
                        <button className="paesani-checkout-btn" onClick={handleWhatsAppCheckout}>
                            Finalizar Compra
                        </button>

                        <button className="paesani-clear-cart-btn" onClick={() => setCart([])}>
                            Limpar Carrinho
                        </button>

                        <p>Valor Total: R${" "}{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </p>
                    </div>
                </div>
            )}
        </motion.div>
    );
}