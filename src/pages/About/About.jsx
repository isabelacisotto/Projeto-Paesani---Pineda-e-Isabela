import { AboutCard } from "@/components/Cards/Card";
import { motion } from "motion/react";
import './About.css'

export default function About() {
    return (
        <>
            <motion.div
                className="paesani-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h1 className="paesani-about-title">Sobre</h1>
                <div className="paesani-about-cards">
                    <AboutCard
                        key="1"
                        name="Origem"
                        description="A Paesani surgiu a partir de um sonho: proporcionar conforto e qualidade por meio da climatização de ambientes. Começou como um pequeno negócio familiar, baseado em dedicação e trabalho."
                    />
                    <AboutCard
                        key="2"
                        name="Primeiros Passos"
                        description="Os primeiros passos foram dados com muito esforço, construindo uma reputação baseada em confiança e excelência técnica. Cada cliente satisfeito se tornou um divulgador do nosso trabalho, impulsionando nosso crescimento."
                    />
                    <AboutCard
                        key="3"
                        name="Crescimento"
                        description="Com o passar do tempo, a Paesani cresceu e se consolidou no mercado, ampliando sua área de atuação e diversificando seus serviços. Hoje, contamos com uma equipe especializada e infraestrutura moderna para atender com eficiência."
                    />
                    <AboutCard
                        key="4"
                        name="Evolução e Inovação"
                        description="Estamos sempre em busca de inovação, acompanhando as tendências tecnológicas e oferecendo soluções cada vez mais completas e eficientes. A Paesani se reinventa continuamente para atender às novas demandas do mercado."
                    />
                    <AboutCard
                        key="5"
                        name="Valores e Reconhecimento"
                        description="Nossos pilares são integridade, qualidade e satisfação do cliente. Esse compromisso nos rendeu reconhecimento e a confiança de parceiros e clientes que se tornaram parte da nossa história."
                    />
                    <AboutCard
                        key="6"
                        name="Compromisso com o Cliente"
                        description="O sucesso da Paesani está diretamente ligado ao sucesso dos nossos clientes. Por isso, trabalhamos com dedicação total, oferecendo suporte completo e soluções personalizadas para cada necessidade."
                    />
                </div>
            </motion.div>
        </>
    );
}
