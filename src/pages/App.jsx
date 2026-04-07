import { useState } from "react"
import { paesaniProducts, paesaniServices } from "../api/paesani.api"
import { ProductsCard, ServicesCard } from "../components/Cards"
import { Header } from "../components/Header"
import './App.css'

export default function App() {
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState("inicio")
    const filteredProducts = paesaniProducts.filter(() => activeTab === 'inicio').filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    const filteredServices = paesaniServices.filter(() => activeTab === 'inicio').filter((s) => s.name.toLowerCase().includes((search.toLowerCase())));
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
                                key={s.id}
                                name={s.name}
                                description={s.description}
                                image={s.image}
                            />
                        )) : <p>Nenhum serviço encontrado</p>}
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
            </main>
        </>
    )
}