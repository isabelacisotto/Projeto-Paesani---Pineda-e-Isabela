import { X } from "lucide-react"
import "./CardModal.css"

export function CardModal({ item, onClose }) {
    if (!item) return null

    return (
        <>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-body">
                        <h2>{item.name}</h2>
                        <p className='modal-category'>{item.modalDescription}</p>
                    </div>

                    <div className="modal-banner-container">
                        <img className='modal-banner' src={item.image} alt={item.name} />
                        <button className="close-btn" onClick={onClose}>
                            <X size={24} color='black' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}