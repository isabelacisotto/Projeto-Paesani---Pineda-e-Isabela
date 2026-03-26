import { CalendarClock, ShoppingCart, Search } from 'lucide-react';
import './Header.css'

export function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="logo.png" alt="Logo Paesani" className='logo' />
                </div>
                <nav>
                    <div className="search">
                        <Search color='var(--color2)' size={20} /> <input type="text" placeholder='Pesquisar' />
                    </div>
                    <ul>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Agendamentos</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Endereço</a></li>
                        <li><a href="#">Suporte</a></li>
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