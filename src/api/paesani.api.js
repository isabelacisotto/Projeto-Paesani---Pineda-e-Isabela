import controle from '../assets/controle.jpg'
import defletor from '../assets/defletor.jpg'
import equipamentos from '../assets/equipamentos.jpg'
import filtro from '../assets/filtro.png'
import infraestrutura from '../assets/infraestrutura.jpg'
import Limpeza from '../assets/limpeza.jpg'
import manutencao from '../assets/manutencao.jpeg'
import reparo from '../assets/reparo.webp'

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
        name: "Controles Remotos Universais",
        description: "Controles práticos e compatíveis com diversas marcas e modelos do mercado.",
        image: controle
    },
    {
        id: 2,
        name: "Filtros de Carvão Ativado",
        description: "Tecnologia avançada para neutralizar odores e filtrar partículas finas no ambiente.",
        image: filtro
    },
    {
        id: 3,
        name: "Defletores de Ar",
        description: "Acessório ideal para direcionar o fluxo de ar e evitar o contato direto com o vento frio.",
        image: defletor
    },
    {
        id: 4,
        name: "Aparelhos Novos",
        description: "Venda de equipamentos das melhores marcas com garantia de eficiência e tecnologia.",
        image: equipamentos
    }
]