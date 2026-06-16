import { motion } from "framer-motion"
import './Checkout.css'
import { CheckoutCard } from "@/components/Cards/Card";
import "react-toastify/dist/ReactToastify.css";

export function Checkout({ cart, setCart, onRemoveItem }) {
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
                        <button className="paesani-checkout-btn">
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