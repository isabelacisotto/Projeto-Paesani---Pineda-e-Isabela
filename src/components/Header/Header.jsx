import { ShoppingCart, Search } from 'lucide-react';
import './Header.css'

export function Header({ search, setSearch, activeTab, setActiveTab }) {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="logo.png" alt="Logo Paesani" className='logo' />
                </div>
                <nav>
                    {activeTab === "services-products" && (
                        <div className="search">
                            <Search color='var(--color2)' size={20} />
                            <input type="text" placeholder='Pesquisar' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    )}
                    <ul>
                        <li className={activeTab === 'inicio' ? 'active' : ''} onClick={() => setActiveTab('inicio')}>Início</li>
                        <li className={activeTab === 'sobre' ? 'active' : ''} onClick={() => setActiveTab('sobre')}>Sobre</li>
                        <li onClick={() => { document.getElementById("footer").scrollIntoView({ behavior: "smooth", }); }}>Contatos</li>
                        <li onClick={() => { document.getElementById("footer").scrollIntoView({ behavior: "smooth", }); }}>Endereço</li>
                        <li className={activeTab === 'suporte' ? 'active' : ''} onClick={() => setActiveTab('suporte')}>Suporte</li>
                    </ul>
                </nav>
                <div className="icons">
                    <ShoppingCart className='icon' color='var(--color2)' size={28} onClick={() => alert('Carrinho')} />
                </div>
            </header>
        </>
    )
}