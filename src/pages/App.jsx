import { paesaniProducts, paesaniServices } from "../api/paesani.api"
import { ProductsCard, ServicesCard } from "../components/Cards"
import { Header } from "../components/Header"
import './App.css'

export default function App() {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <main className="main-container">
                <div className="paesani-services">
                    <h1 className="paesani-services-title">Serviços</h1>
                    <div className="paesani-services-cards">
                        {paesaniServices.map((s) => (
                            <ServicesCard
                                key={s.id}
                                name={s.name}
                                description={s.description}
                                image={s.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="paesani-products">
                    <h1 className="paesani-products-title">Produtos</h1>
                    <div className="paesani-products-cards">
                        {paesaniProducts.map((p) => (
                            <ProductsCard
                                key={p.id}
                                name={p.name}
                                description={p.description}
                                image={p.image}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}