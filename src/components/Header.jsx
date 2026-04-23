import { CalendarClock, ShoppingCart, Search } from 'lucide-react';
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
                        <li className={activeTab === 'contatos' ? 'active' : ''} onClick={() => setActiveTab('contatos')}>Contatos</li>
                        <li className={activeTab === 'endereco' ? 'active' : ''} onClick={() => setActiveTab('endereco')}>Endereço</li>
                        <li className={activeTab === 'suporte' ? 'active' : ''} onClick={() => setActiveTab('suporte')}>Suporte</li>
                    </ul>
                </nav>
                <div className="icons">
                    <ShoppingCart className='icon' color='var(--color2)' size={28} />
                    <CalendarClock className='icon' color='var(--color2)' size={28} />
                </div>
            </header>
        </>
    )
}