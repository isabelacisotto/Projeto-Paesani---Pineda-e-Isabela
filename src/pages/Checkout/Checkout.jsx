import { motion } from "framer-motion"
import './Checkout.css'
import { CheckoutCard } from "@/components/Cards/Card";
import { paesaniProducts } from "@/api/paesani.api";

export function Checkout() {
    return (
        <motion.div className="paesani-checkout-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h1 className="paesani-checkout-title">Checkout</h1>

            <div className="paesani-checkout-content">
                {paesaniProducts.length > 0 ? (
                    paesaniProducts.map((product) => (
                        <CheckoutCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            quantity={product.quantity}
                            isAdded={product.isAdded}
                        />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div>
        </motion.div>
    )
}