import controle from '../assets/controle.png'
import defletor from '../assets/defletor.png'
import equipamentos from '../assets/equipamentos.png'
import filtro from '../assets/filtro.png'
import infraestrutura from '../assets/infraestrutura.jpg'
import Limpeza from '../assets/limpeza.jpg'
import manutencao from '../assets/manutencao.jpeg'
import reparo from '../assets/reparo.webp'
import slider1 from '../assets/paesaniSlider.png'
import slider2 from '../assets/paesaniSlider2.png'

export const paesaniServices = [
    {
        id: 1,
        name: "Instalação e Manutenção (Residencial/Comercial)",
        description: "Instalação profissional e manutenção técnica para garantir o máximo desempenho do seu ar-condicionado.",
        image: manutencao
    },
    {
        id: 2,
        name: "Limpeza e Higienização",
        description: "Limpeza profunda dos componentes internos, eliminando fungos e bactérias para um ar mais saudável.",
        image: Limpeza
    },
    {
        id: 3,
        name: "Infraestrutura de Espera",
        description: "Preparação da tubulação e pontos elétricos durante a obra, facilitando futuras instalações.",
        image: infraestrutura
    },
    {
        id: 4,
        name: "Carga de Gás e Reparo de Vazamento",
        description: "Identificação e correção de vazamentos com reposição precisa da carga de gás refrigerante.",
        image: reparo
    }
]

export const paesaniProducts = [
    {
        id: 1,
        name: "Controle Remoto Universal",
        description: "Controles práticos e compatíveis com diversas marcas e modelos do mercado.",
        modalDescription: "Controles remotos universais compatíveis com diversas marcas e modelos de ar-condicionado. Possuem configuração simples, design ergonômico e funções completas para ajuste de temperatura, velocidade, modos de operação e timer. Ideal para substituir controles danificados ou perdidos com praticidade e eficiência.",
        price: 29.99,
        availability: "Em estoque",
        image: controle,
        especifications: [
            "Compatível com diversas marcas",
            "Configuração simples e rápida",
            "Design ergonômico e moderno",
            "Longo alcance",
        ]
    },
    {
        id: 2, 
        name: "Filtro de Carvão Ativado",
        description: "Tecnologia avançada para neutralizar odores e filtrar partículas finas no ambiente.",
        modalDescription: "Filtros de carvão ativado desenvolvidos para melhorar a qualidade do ar, ajudando na remoção de odores, poeira, fumaça e partículas finas presentes no ambiente. Proporcionam um ar mais limpo, fresco e saudável, sendo ideais para residências, escritórios e ambientes climatizados.",
        price: 19.99,
        availability: "Em estoque",
        image: filtro,
        especifications: [
            "Tecnologia de carvão ativado",
            "Eficaz na neutralização de odores",
            "Filtra partículas finas e poeira",
            "Melhora a qualidade do ar",
        ]
    },
    {
        id: 3,
        name: "Defletor de Ar",
        description: "Acessório ideal para direcionar o fluxo de ar e evitar o contato direto com o vento frio.",
        modalDescription: "Defletores de ar projetados para direcionar o fluxo do ar-condicionado de maneira mais confortável e eficiente. Evitam o contato direto com o vento frio, auxiliando no bem-estar de crianças, idosos e pessoas sensíveis ao ar gelado. Fácil instalação e compatibilidade com diferentes modelos.",
        price: 14.99,
        availability: "Em estoque",
        image: defletor,
        especifications: [
            "Direciona o fluxo de ar",
            "Evita contato direto com vento frio",
            "Ideal para crianças e idosos",
            "Fácil instalação e compatibilidade",
        ]
    },
    {
        id: 4,
        name: "Aparelho Novo",
        description: "Venda de equipamentos das melhores marcas com garantia de eficiência e tecnologia.",
        modalDescription: "Trabalhamos com aparelhos de ar-condicionado novos das principais marcas do mercado, oferecendo tecnologia moderna, alta eficiência energética e excelente desempenho. Modelos ideais para residências, empresas e ambientes comerciais, com garantia, suporte técnico e instalação especializada.",
        price: 1999.99,
        availability: "Em estoque",
        image: equipamentos,
        especifications: [
            "Tecnologia moderna",
            "Alta eficiência energética",
            "Excelente desempenho",
            "Suporte técnico",
            "Instalação especializada"
        ]
    }
]

export const paesaniSlider = [
    {
        id: 1,
        image: slider1
    },
    {
        id: 2,
        image: slider2
    }
]