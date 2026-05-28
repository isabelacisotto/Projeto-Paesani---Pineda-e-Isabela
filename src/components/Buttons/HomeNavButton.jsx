import { FaPlay } from "react-icons/fa";
import "./HomeNavButton.css";
import { motion } from "motion/react";

export function HomeNavButton({ type, label, onClick, width }) {
    return (
        <motion.button 
            className="nav-button" 
            whileHover={{ y: -3 }}
            onClick={onClick} 
            style={
                type === "products" ? {
                    backgroundColor: "#1F6FB2", 
                    color: "#F0F0F0",
                    fontWeight: "500",
                } : 
                type === "services" ? {
                    backgroundColor: "transparent", 
                    color: "#1F6FB2",
                    fontWeight: "500",
                    border: "2px solid #1F6FB2"
                } : ""
            }>
            {label}
            <FaPlay style={
                type === "services" ? { 
                    marginLeft: "8px",
                    fontSize: "0.8rem",
                    color: "1px solid #1F6FB2" 
                } : 
                type === "products" ? { 
                    marginLeft: "8px",
                    fontSize: "0.8rem",
                    color: "#F0F0F0" 
                } : ""
            } />
        </motion.button>
    );
}