import React from "react";
import Card from "./Card";

const restaurants = [
    { 
        name: "Birria-Landia", 
        cuisine: "Mexican", 
        link: "https://custom.order.online/es-US/store/BirriaLandia-35980545", 
        image: "https://picsum.photos/id/488/400/300" 
    },
    { 
        name: "Pujol", 
        cuisine: "Mexican", 
        link: "https://www.pujol.com.mx/en/menus", 
        image: "https://picsum.photos/id/493/400/300" 
    },
    { 
        name: "Arepa Lady", 
        cuisine: "Colombian", 
        link: "https://www.grubhub.com/restaurant/arepa-lady-jackson-heights-77-17-37th-ave-queens/2192425", 
        image: "https://picsum.photos/id/225/400/300" 
    },
    { 
        name: "Porto’s Bakery", 
        cuisine: "Cuban", 
        link: "https://order.portosbakery.com/menu", 
        image: "https://picsum.photos/id/312/400/300" 
    },
    { 
        name: "Guasaca", 
        cuisine: "Venezuelan", 
        link: "https://guasaca.com/raleigh-research-triangle-guasaca-south-american-grill-food-menu", 
        image: "https://picsum.photos/id/429/400/300" 
    },
    { 
        name: "Don Julio", 
        cuisine: "Argentinian", 
        link: "https://carniceria-parrilladonjulio.com.ar/", 
        image: "https://picsum.photos/id/163/400/300" 
    },
    { 
        name: "Cosme", 
        cuisine: "Mexican", 
        link: "https://www.cosmenyc.com/menu/", 
        image: "https://picsum.photos/id/292/400/300" 
    },
    { 
        name: "Maido", 
        cuisine: "Nikkei (Peru)", 
        link: "https://maido.pe/en/menu/", 
        image: "https://picsum.photos/id/674/400/300" 
    },
    { 
        name: "Central", 
        cuisine: "Peruvian", 
        link: "https://centralrestaurante.com.pe/en/menu", 
        image: "https://picsum.photos/id/1060/400/300" 
    },
    { 
        name: "Leo", 
        cuisine: "Colombian", 
        link: "https://restauranteleo.com/en/", 
        image: "https://picsum.photos/id/835/400/300" 
    },
    { 
        name: "Quintonil", 
        cuisine: "Mexican", 
        link: "https://quintonil.com/Destilados&Cocteles/Menu-Bebidas-Destilados.pdf", 
        image: "https://picsum.photos/id/1080/400/300" 
    },
    { 
        name: "Mani", 
        cuisine: "Brazilian", 
        link: "https://www.restaurantemani.com.br/menu-ingles/", 
        image: "https://picsum.photos/id/30/400/300" 
    },
    { 
        name: "Boragó", 
        cuisine: "Chilean", 
        link: "https://borago.cl/en/eat/", 
        image: "https://picsum.photos/id/139/400/300" 
    },
    { 
        name: "El Chato", 
        cuisine: "Colombian", 
        link: "https://elchato.co/en/menu/", 
        image: "https://picsum.photos/id/766/400/300" 
    },
    { 
        name: "La Casita Blanca", 
        cuisine: "Puerto Rican", 
        link: "https://www.prmenus.com/restaurant-menus/casita-blanca", 
        image: "https://picsum.photos/id/102/400/300" 
    }
];
const Board = () => {
    return (
        <div className="Board">
            {restaurants.map((res, index) => (
                <Card 
                    key={index} 
                    name={res.name} 
                    cuisine={res.cuisine} 
                    image={res.image} 
                    link={res.link} 
                />
            ))}
        </div>
    );
};

export default Board;