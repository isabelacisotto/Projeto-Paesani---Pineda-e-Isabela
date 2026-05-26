import {
  paesaniProducts,
  paesaniServices,
  paesaniSlider,
} from "@/api/paesani.api";
import { CardModal, ProductsCard, ServicesCard } from "@/components/Cards/Card";
import { Slider } from "@/components/Slider/Slider";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import "./ServicesProducts.css";

export default function ServicesProducts() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredProducts = paesaniProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredServices = paesaniServices.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sliderSettings = {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <motion.div className="container-slider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Slider settings={sliderSettings}>
          {paesaniSlider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-content">
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="slider-image"
                />
                <div
                  className="slide-overlay"
                  style={{ borderBottom: "8px solid $(slide.color)" }}
                >
                  <span>{slide.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </motion.div>

      <motion.div
        className="paesani-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 id="paesani-services" className="paesani-services-title">
          Serviços
        </h1>
        <div className="paesani-services-cards">
          {filteredServices.length > 0 ? (
            filteredServices.map((s) => (
              <ServicesCard
                key={s.id}
                name={s.name}
                description={s.description}
                image={s.image}
              />
            ))
          ) : (
            <p>Nenhum serviço encontrado</p>
          )}
        </div>
      </motion.div>

      <motion.div
        className="paesani-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 id="paesani-products" className="paesani-products-title">
          Produtos
        </h1>
        <div className="paesani-products-cards">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <ProductsCard
                key={p.id}
                name={p.name}
                description={p.description}
                image={p.image}
                onModalOpen={() => setSelectedItem(p)}
              />
            ))
          ) : (
            <p>Nenhum produto encontrado</p>
          )}
        </div>
      </motion.div>
      {selectedItem && (
        <CardModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
