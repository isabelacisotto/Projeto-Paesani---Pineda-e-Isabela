import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { HomeNavButton } from "@/components/Buttons/HomeNavButton";
import { motion } from 'framer-motion';
import ServicesProducts from "./ServicesProducts/ServicesProducts";
import About from "./About/About";
import { Suport } from "./Suport/Suport";
import { Checkout } from "./Checkout/Checkout";

export default function App() {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("inicio");
    const [cart, setCart] = useState([]);

    useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth", }) }, [activeTab]);

    const addToCart = (product, quantity) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    return (
        <>
            <div className="header">
                <Header
                    search={search}
                    setSearch={setSearch}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>

            <main className="main-container">
                {activeTab === "inicio" && (
                    <motion.div
                        className="paesani-home-container"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="paesani-home-title"> O clima perfeito para os seus melhores momentos.</h1>
                        <h3 className="paesani-home-description">Somos referência em refrigeração e cuidados especializados.</h3>

                        <div className="paesani-home-nav-buttons">
                            <HomeNavButton
                                label="Ver Serviços"
                                type={"services"}
                                onClick={() => setActiveTab("services-products")} 
                            />
                            <HomeNavButton
                                label="Ver Produtos"
                                type={"products"}
                                onClick={() => setActiveTab("services-products")} 
                            />
                        </div>
                    </motion.div>
                )}

                {activeTab === "services-products" && <ServicesProducts addToCart={addToCart} />}
                {activeTab === "sobre" && <About />}
                {activeTab === "suporte" && <Suport />}
                {activeTab === "carrinho" && <Checkout cart={cart} setCart={setCart} />}
            </main>
            <Footer />
        </>
    );
}
