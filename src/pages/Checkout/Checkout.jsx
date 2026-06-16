import { motion } from "framer-motion"
import './Checkout.css'
import { CheckoutCard } from "@/components/Cards/Card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Checkout({ cart, setCart }) {
    if (cart.length === 0) return <p>Seu carrinho está vazio.</p>;

    return (
        <motion.div className="paesani-checkout-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h1 className="paesani-checkout-title">Meu Carrinho</h1>

            <div className="paesani-checkout-content">
                {cart.map((item) => (
                    <CheckoutCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                        description={item.description}
                    />
                ))}
            </div>
        </motion.div>
    )
}