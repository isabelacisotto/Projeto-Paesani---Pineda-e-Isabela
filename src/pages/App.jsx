import { useEffect, useState } from "react";
import { paesaniProducts, paesaniServices } from "../api/paesani.api";
import { AboutCard, ProductsCard, ServicesCard } from "../components/Cards/Card";
import { Header } from "../components/Header/Header";
import "./App.css";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer/Footer";
import { HomeNavButton } from "@/components/Buttons/HomeNavButton";
import { CardModal } from "@/components/Cards/CardModal";

export default function App() {
    const [search, setSearch] = useState("");
    const [activeTab, setActiveTab] = useState("inicio");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredProducts = paesaniProducts.filter(() => activeTab === "suporte").filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    const filteredServices = paesaniServices.filter(() => activeTab === "suporte").filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {window.scrollTo({ top: 0, behavior: "smooth", })}, [activeTab]);

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
                            <HomeNavButton label="Ver Serviços" type={"services"} onClick={() => setActiveTab("suporte")} />
                            <HomeNavButton label="Ver Produtos" type={"products"} onClick={() => setActiveTab("suporte")} />
                        </div>
                    </motion.div>
                )}

                {activeTab === "suporte" && (
                    <>
                        <motion.div
                            className="paesani-container"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h1 id="paesani-services" className="paesani-services-title">Serviços</h1>
                            <div className="paesani-services-cards">
                                {filteredServices.length > 0 ? (
                                    filteredServices.map((s) => (
                                        <ServicesCard
                                            key={s.id}
                                            name={s.name}
                                            description={s.description}
                                            image={s.image}
                                        />
                                    ))
                                ) : (
                                    <p>Nenhum serviço encontrado</p>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            className="paesani-container"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h1 id="paesani-products" className="paesani-products-title">Produtos</h1>
                            <div className="paesani-products-cards">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((p) => (
                                        <ProductsCard
                                            key={p.id}
                                            name={p.name}
                                            description={p.description}
                                            image={p.image}
                                            onModalOpen={() => setSelectedItem(p)}
                                        />
                                    ))
                                ) : (
                                    <p>Nenhum produto encontrado</p>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}

                {activeTab === "sobre" && (
                    <motion.div
                        className="paesani-container"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="paesani-about-title">Sobre</h1>
                        <div className="paesani-about-cards">
                            <AboutCard
                                key="1"
                                name="Origem"
                                description="A Paesani surgiu a partir de um sonho: proporcionar conforto e qualidade por meio da climatização de ambientes. Começou como um pequeno negócio familiar, baseado em dedicação e trabalho."
                            />
                            <AboutCard
                                key="2"
                                name="Primeiros Passos"
                                description="Os primeiros passos foram dados com muito esforço, construindo uma reputação baseada em confiança e excelência técnica. Cada cliente satisfeito se tornou um divulgador do nosso trabalho, impulsionando nosso crescimento."
                            />
                            <AboutCard
                                key="3"
                                name="Crescimento"
                                description="Com o passar do tempo, a Paesani cresceu e se consolidou no mercado, ampliando sua área de atuação e diversificando seus serviços. Hoje, contamos com uma equipe especializada e infraestrutura moderna para atender com eficiência."
                            />
                            <AboutCard
                                key="4"
                                name="Evolução e Inovação"
                                description="Estamos sempre em busca de inovação, acompanhando as tendências tecnológicas e oferecendo soluções cada vez mais completas e eficientes. A Paesani se reinventa continuamente para atender às novas demandas do mercado."
                            />
                            <AboutCard
                                key="5"
                                name="Valores e Reconhecimento"
                                description="Nossos pilares são integridade, qualidade e satisfação do cliente. Esse compromisso nos rendeu reconhecimento e a confiança de parceiros e clientes que se tornaram parte da nossa história."
                            />
                            <AboutCard
                                key="6"
                                name="Compromisso com o Cliente"
                                description="O sucesso da Paesani está diretamente ligado ao sucesso dos nossos clientes. Por isso, trabalhamos com dedicação total, oferecendo suporte completo e soluções personalizadas para cada necessidade."
                            />
                        </div>
                    </motion.div>
                )}
                {selectedItem && <CardModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
            </main>
            <Footer />
        </>
    );
}
