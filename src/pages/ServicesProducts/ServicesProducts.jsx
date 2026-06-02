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
import { Search } from "lucide-react";

export default function ServicesProducts({ addToCart }) {
  const [servicesSearch, setServicesSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredServices = paesaniServices.filter((s) =>
    s.name.toLowerCase().includes(servicesSearch.toLowerCase()),
  );

  const filteredProducts = paesaniProducts.filter((p) =>
    p.name.toLowerCase().includes(productsSearch.toLowerCase()),
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
        whileInView={{ opacity: 1 }}
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
        <div className="paesani-services-head">
          <h1 id="paesani-services" className="paesani-services-title">
            Serviços
          </h1>

          <div className="search">
            <Search color='var(--color2)' size={22} />
            <input 
              type="text" 
              placeholder='Pesquisar serviços' 
              value={servicesSearch} 
              onChange={(e) => setServicesSearch(e.target.value)} 
            />
          </div>
        </div>

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
        <div className="paesani-products-head">
          <h1 id="paesani-products" className="paesani-products-title">
            Serviços
          </h1>

          <div className="search">
            <Search color='var(--color2)' size={20} />
            <input 
              type="text" 
              placeholder='Pesquisar produtos' 
              value={productsSearch} 
              onChange={(e) => setProductsSearch(e.target.value)}
            />
          </div>
        </div>

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
        <CardModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        addToCart={addToCart} />
      )}
    </>
  );
}
