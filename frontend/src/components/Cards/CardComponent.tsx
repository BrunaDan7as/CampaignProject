// src/components/Carousel.tsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const cards: CardProps[] = [
    {
        image: 'https://picsum.photos/200/350?random=1',
        title: 'Card 1',
        description: 'Descrição do Card 1'
    },
    {
        image: 'https://picsum.photos/200/350?random=2',
        title: 'Card 2',
        description: 'Descrição do Card 2'
    },
    {
        image: 'https://picsum.photos/200/350?random=3',
        title: 'Card 3',
        description: 'Descrição do Card 3'
    },
    {
        image: 'https://picsum.photos/200/350?random=4',
        title: 'Card 4',
        description: 'Descrição do Card 4'
    },
    {
        image: 'https://picsum.photos/200/350?random=5',
        title: 'Card 5',
        description: 'Descrição do Card 5'
    },
    {
        image: 'https://picsum.photos/200/350?random=6',
        title: 'Card 6',
        description: 'Descrição do Card 6'
    },
    {
        image: 'https://picsum.photos/200/350?random=7',
        title: 'Card 7',
        description: 'Descrição do Card 7'
    },
    {
        image: 'https://picsum.photos/200/350?random=8',
        title: 'Card 8',
        description: 'Descrição do Card 8'
    },
];

const CardComponent: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4, // Rola 4 cards por vez
        arrows: true, // Adiciona setas de navegação
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="p-4 flex justify-center">
                        <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs transition-transform duration-300 transform hover:scale-105 ">
                            {/* Pseudo-element para borda */}


                            {/* Imagem */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-100 object-cover"
                            />

                            {/* Título e Descrição */}
                            <div className="p-6 pb-16"> {/* Espaçamento maior na parte inferior */}
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-700">{card.description}</p>
                            </div>

                            {/* Botões de Alterar e Excluir */}
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-3">
                                <button
                                    className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg"
                                    onClick={() => alert(`Alterar ${card.title}`)}
                                >
                                    Alterar
                                </button>
                                <button
                                    className="bg-gradient-to-r from-red-400 to-red-600 text-white text-sm font-semibold py-2 px-4 rounded-full hover:from-red-500 hover:to-red-700 transition-all shadow-lg"
                                    onClick={() => alert(`Excluir ${card.title}`)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardComponent;
