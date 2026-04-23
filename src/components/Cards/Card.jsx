import { ChartNoAxesCombined, Footprints, Lightbulb, ScrollText, Trophy, Users } from 'lucide-react';
import './Card.css';

export function ServicesCard({ name, description, image, index }) {
    return (
        <div className="card" data-aos="fade-right" data-aos-delay={index * 100}>
            <img src={image} alt={name} className='card-img' />

            <div className="card-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <button className="play-btn"> Contrate já! </button>
            </div>
        </div>
    )
}

export function ProductsCard({ name, description, image, index }) {
    return (
        <div className="card" data-aos="fade-right" data-aos-delay={index * 100}>
            <img src={image} alt={name} className='card-img' />

            <div className="card-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <button className="play-btn"> Compre aqui! </button>
            </div>
        </div>
    )
}

export function AboutCard({ name, description }) {
    return (
        <div className="about-card" data-aos="fade-right">
            <div className="about-card-icon">
                {name === 'Origem' && <ScrollText size={30} color='var(--color1)' />}
                {name === 'Primeiros Passos' && <Footprints size={30} color='var(--color1)' />}
                {name === 'Crescimento' && <ChartNoAxesCombined size={30} color='var(--color1)' />}
                {name === 'Evolução e Inovação' && <Lightbulb size={30} color='var(--color1)' />}
                {name === 'Valores e Reconhecimento' && <Trophy size={30} color='var(--color1)' />}
                {name === 'Compromisso com o Cliente' && <Users size={30} color='var(--color1)' />}
            </div>

            <div className="about-card-info">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
