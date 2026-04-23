import { useEffect, useState } from "react"
import { paesaniProducts, paesaniServices } from "../api/paesani.api"
import { AboutCard, ProductsCard, ServicesCard } from "../components/Cards/Card"
import { Header } from "../components/Header"
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function App() {
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState("inicio")
    const filteredProducts = paesaniProducts.filter(() => activeTab === 'inicio').filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    const filteredServices = paesaniServices.filter(() => activeTab === 'inicio').filter((s) => s.name.toLowerCase().includes((search.toLowerCase())));

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    return (
        <>
            <div className="header">
                <Header search={search} setSearch={setSearch} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <main className="main-container">
                <div className="paesani-services">
                    <h1 className="paesani-services-title">
                        {activeTab === 'inicio' && 'Serviços'}
                        {activeTab === 'sobre' && 'Sobre'}
                        {activeTab === 'contatos' && 'Contatos'}
                        {activeTab === 'endereco' && 'Endereço'}
                        {activeTab === 'suporte' && 'Suporte'}
                    </h1>

                    <div className="paesani-services-cards">
                        {filteredServices.length > 0 ? filteredServices.map((s) => (
                            <ServicesCard
                                data-aos="fade-left"
                                key={s.id}
                                name={s.name}
                                description={s.description}
                                image={s.image}
                            />
                        )) : <p>{
                            activeTab === 'inicio' && 'Nenhum serviço encontrado' ||
                            activeTab === 'contatos' && 'Nenhum contato encontrado' ||
                            activeTab === 'endereco' && 'Nenhum endereço encontrado' ||
                            activeTab === 'suporte' && 'Nenhum suporte encontrado'
                        }</p>}
                    </div>
                </div>

                {activeTab === 'inicio' && (
                    <div className="paesani-products">
                        <h1 className="paesani-products-title">Produtos</h1>
                        <div className="paesani-products-cards">
                            {filteredProducts.length > 0 ? filteredProducts.map((p) => (
                                <ProductsCard
                                    key={p.id}
                                    name={p.name}
                                    description={p.description}
                                    image={p.image}
                                />
                            )) : <p>Nenhum produto encontrado</p>}
                        </div>
                    </div>
                )}

                {activeTab === 'sobre' && (
                    <div className="paesani-about">
                        <div className="paesani-about-cards">
                            <AboutCard
                                key='1'
                                name="Origem"
                                description="A Paesani surgiu a partir de um sonho: proporcionar conforto e qualidade por meio da climatização de ambientes. Começou como um pequeno negócio familiar, baseado em dedicação e trabalho."
                            />
                            <AboutCard
                                key='2'
                                name="Primeiros Passos"
                                description="Os primeiros passos foram dados com muito esforço, construindo uma reputação baseada em confiança e excelência técnica. Cada cliente satisfeito se tornou um divulgador do nosso trabalho, impulsionando nosso crescimento."
                            />
                            <AboutCard
                                key='3'
                                name="Crescimento"
                                description="Com o passar do tempo, a Paesani cresceu e se consolidou no mercado, ampliando sua área de atuação e diversificando seus serviços. Hoje, contamos com uma equipe especializada e infraestrutura moderna para atender com eficiência."
                            />
                            <AboutCard
                                key='4'
                                name="Evolução e Inovação"
                                description="Estamos sempre em busca de inovação, acompanhando as tendências tecnológicas e oferecendo soluções cada vez mais completas e eficientes. A Paesani se reinventa continuamente para atender às novas demandas do mercado."
                            />
                            <AboutCard
                                key='5'
                                name="Valores e Reconhecimento"
                                description="Nossos pilares são integridade, qualidade e satisfação do cliente. Esse compromisso nos rendeu reconhecimento e a confiança de parceiros e clientes que se tornaram parte da nossa história."
                            />
                            <AboutCard
                                key='6'
                                name="Compromisso com o Cliente"
                                description="O sucesso da Paesani está diretamente ligado ao sucesso dos nossos clientes. Por isso, trabalhamos com dedicação total, oferecendo suporte completo e soluções personalizadas para cada necessidade."
                            />
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}