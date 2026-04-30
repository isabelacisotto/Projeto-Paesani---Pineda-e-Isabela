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
                    <div className="search">
                        <Search color='var(--color2)' size={20} />
                        <input type="text" placeholder='Pesquisar' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <ul>
                        <li className={activeTab === 'inicio' ? 'active' : ''} onClick={() => setActiveTab('inicio')}>Início</li>
                        <li className={activeTab === 'sobre' ? 'active' : ''} onClick={() => setActiveTab('sobre')}>Sobre</li>
                        <a href="#footer">Contatos</a>
                        <a href="#footer">Endereço</a>
                        <a href="#">Suporte</a>
                    </ul>
                </nav>
                <div className="icons">
                    <ShoppingCart className='icon' color='var(--color2)' size={28} onClick={() => alert('Carrinho')} />
                </div>
            </header>
        </>
    )
}