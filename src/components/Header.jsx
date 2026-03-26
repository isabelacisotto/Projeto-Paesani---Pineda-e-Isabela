import './Header.css'
import { CircleUser } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CalendarClock } from 'lucide-react';

export function Header() {
    return(
        <>
            <header>
                <div className="logo">
                    <img src="logo.png" alt="" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
                <div className="actions">
                    <CircleUser />
                    <ShoppingCart />
                    <CalendarClock />
                </div>
            </header>
        </>
    )
}