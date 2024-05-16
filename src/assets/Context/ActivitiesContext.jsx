import { createContext } from "react";

export const ActivitiesContext = createContext();

export default function ActivitiesProvider({ children }) {
  const weekEnd = [
    {
      id: 1,
      name: "A la mer",
      image: "./public/images/weekEnd/cote.jpg",
      city: "Cote d'Opale",
      desc: "Les trésors de la Côte d'Opale sont nombreux aussi bien le long de la côte que dans l’arrière-pays. Visitez les Deux-Caps ou encore Nausicaá.",
      link: "https://www.cote-dopale.com/",
      hashtag: "#DETENTE",
    },
    {
      id: 2,
      name: "Nuit en tipi",
      image: "./public/images/weekEnd/tipi.jpg",
      city: "Palluel",
      desc: "Aventure en famille sous une yourte ou un tipi : insolite ! C'est aussi un éco-lieu, ouvert à tous pour s’évader sans partir loin",
      link: "https://www.weekend-hautsdefrance.com/insolites/ecoland-aventures-en-famille-et-nuit-insolite-pres-darras-0 ",
      hashtag: "#ORIGINAL",
    },
    {
      id: 3,
      name: "Nuit dans une bulle",
      image: "./public/images/weekEnd/bulle.jpg",
      city: "Drincham",
      desc: "La Route des Bulles vous propose des nuits insolites dans des bulles dans le Nord de la France. Au bord d’un étang, sous un ciel étoilé , évadez-vous le temps d’une nuit !",
      link: "https://routedesbulles.fr/les-bulles-des-hauts-de-flandre/",
      hashtag: "#ORIGINAL",
    },
    {
      id: 4,
      name: "Nuit en cabane",
      image: "./public/images/weekEnd/cabane.jpg",
      city: "Mormal",
      desc: "Une cabane de bois perchée à 6m de hauteur pour une douce nuit ! Calme, cosy, chaleureuse et confortable, la grange de Mormal est située en plein coeur de la forêt",
      link: "https://www.weekend-hautsdefrance.com/insolites/nuit-insolite-en-foret-en-duo-en-cabane-au-coeur-de-mormal",
      hashtag: "#ORIGINAL",
    },
  ];
  return <ActivitiesContext.Provider>{children}</ActivitiesContext.Provider>;
}
