import { paesaniProducts, paesaniServices } from "../api/paesani.api"

function App() {
    return (
        <main className="main-container"> 
            <div className="paesani-services">
                {paesaniServices.map((s) => (
                    <ServicesCard
                        key={s.id}
                        name={s.name}
                        description={s.description}
                        image={s.image}
                    />
                ))}
            </div>
            <div className="paesani-products">
                {paesaniProducts.map((p) => (
                    <ProductsCard
                        key={p.id}
                        name={p.name}
                        description={p.description}
                        image={p.image}
                    />
                ))}
            </div>
        </main>
    )
}
export default App