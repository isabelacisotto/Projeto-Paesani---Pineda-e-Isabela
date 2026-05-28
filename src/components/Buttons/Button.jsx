import { FaPlay } from "react-icons/fa";
import "./Button.css";
import { motion } from "motion/react";

export function Button({ label, onClick }) {
    return (
        <motion.button
            className="button"
            whileHover={{ y: -3 }}
            onClick={onClick}
        >
            {label}
            <FaPlay style={{
                marginLeft: "8px",
                fontSize: "0.8rem",
                color: "#F0F0F0"
            }} />
        </motion.button>
    );
}