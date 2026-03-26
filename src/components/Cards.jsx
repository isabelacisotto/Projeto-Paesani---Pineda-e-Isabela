import './Card.css';

export function ServicesCard({ name, description, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} className='card-img' />

            <div className="card-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <button className="play-btn"> Contrate já! </button>
            </div>
        </div>
    )
}

export function ProductsCard({ name, description, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} className='card-img' />

            <div className="card-info">
                <h4>{name}</h4>
                <p>{description}</p>
                <button className="play-btn"> Compre aqui! </button>
            </div>
        </div>
    )
}
