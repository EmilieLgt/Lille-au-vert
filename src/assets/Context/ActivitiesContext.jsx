import { createContext } from "react";

export const ActivitiesContext = createContext();

export default function ActivitiesProvider({ children }) {
  const oneHour = [
    {
      id: 1,
      name: "Parc Jean-Baptiste Lebas",
      image: "./public/images/oneHour/jblebas.webp",
      city: "Lille",
      desc: "Ces 3 hectares de nature au cœur de la ville s'organisent autour de la trame originelle des marronniers centenaires, confortée par la plantation de jeunes tilleuls. Les chemins et les placettes pavés offrent aux promeneurs des points de vue et des ambiances variés.",
      link: "https://www.lille.fr/Nos-equipements/Parc-Jean-Baptiste-Lebas",
      hashtag: "#BALADE",
    },
    {
      id: 2,
      name: "Parc de la Citadelle",
      image: "./public/images/oneHour/citadelle.jpeg",
      city: "Lille",
      desc: "Le plus grand espace vert de Lille va vous surprendre encore, à travers une offre d’activités sportives pour tous, la mise en valeur de son patrimoine historique et naturel exceptionnel, un zoo enrichi et rénové, un nouvel espace de détente...",
      link: "https://parcdelacitadelle.lille.fr",
      hashtag: "#BALADE",
    },
    {
      id: 3,
      name: "Yoga à la Citadelle",
      image: "./public/images/oneHour/yoga.webp",
      city: "Lille",
      desc: "Bonne nouvelle : les séances de yoga dominicales à la Citadelle sont de retour ce 26 mai à Lille avec le professeur Olivier Bartlinski... En l'occurrence, en fonction du temps, le yoga dominical organisé à la Citadelle est bel et bien de retour pour la saison estivale. Gratuit et ouvert à tous.",
      hashtag: "#BALADE",
    },
    {
      id: 4,
      name: "Parc Barbieux",
      image: "./public/images/oneHour/barbieux.jpeg",
      city: "Roubaix",
      desc: "Ce parc propose une diversité naturelle hors du commun. Outre ses 60 essences d'arbres et ses plans d'eau, le parc offre un magnifique parcours de promenade. Espace de loisirs et de détente, on y trouve également une aire de jeux pour les enfants et un terrain de pétanque.",
      link: "https://www.roubaixtourisme.com/avoir/leparcbarbieux/",
      hashtag: "#BALADE",
    },
    {
      id: 5,
      name: "Jardin des plantes",
      image: "./public/images/oneHour/jardindesplantes.jpeg",
      city: "Lille",
      desc: "Situé dans le quartier Moulins, le Jardin des plantes propose une grande diversité de milieux et de végétaux : parcours des arbres remarquables, carrés botaniques, belles perspectives et grandes pelouses en font un exceptionnel lieu de promenade pour les curieux.",
      link: "https://www.lille.fr/Nos-equipements/Le-Jardin-des-plantes",
      hashtag: "#BALADE",
    },
    {
      id: 6,
      name: "Ferme pédagogique Marcel Dhénin ",
      image: "./public/images/oneHour/ferme.jpeg",
      city: "Lille",
      desc: "La ferme pédagogique Marcel Dhénin est un lieu de découverte incontournable des animaux et des plantes domestiques, en particulier des races et des variétés régionales.",
      link: "https://www.tripadvisor.fr/Attraction_Review-g187178-d6825485-Reviews-La_Ferme_Marcel_Dhenin-Lille_Nord_Hauts_de_France.html",
      hashtag: "#DECOUVERTE",
    },
    {
      id: 7,
      name: "Jardin Vauban",
      image: "./public/images/oneHour/vauban.webp",
      city: "Lille",
      desc: "Ce jardin paysager de style anglais, dans le quartier de Vauban-Esquermes à Lille, est traversé par des allées sinueuses et présente un patrimoine arboré remarquable, des bassins, de grandes pelouses...",
      link: "https://www.lilletourism.com/explorer/hello-nature/prendre-lair/parcs-jardins/jardin-vauban-lille-fr-4432159/",
      hashtag: "#BALADE",
    },
    {
      id: 8,
      name: "Parc du château de Robersart",
      image: "./public/images/oneHour/robersart.jpeg",
      city: "Wambrechies",
      desc: "Cheminements, espace détente, aire de jeux, fontaine, étangs, arboretum évolutif, des milieux naturels des quatre coins du monde reconstitués, jardin rond... pour une balade ou un pique-nique, en plein centre-ville !",
      link: "https://www.wambrechies.fr/decouvrir-wambrechies/patrimoine-naturel-et-vegetal/le-parc-du-chateau-de-robersart",
      hashtag: "#BALADE",
    },
    {
      id: 9,
      name: "Jardin des géants",
      image: "./public/images/oneHour/jardingeants.jpeg",
      city: "La Madeleine",
      desc: "Au cours de votre balade, vous pouvez découvrir aussi les sculptures de Quentin Garel et de l'artiste Stéphanie Buttier.",
      link: "https://enm.lillemetropole.fr/espaces-nature/le-jardin-des-geants",
      hashtag: "#BALADE",
    },
  ];

  const daily = [
    {
      id: 1,
      name: "Trouver un parc près de chez moi",
      image: "./public/images/oneHour/parcs.jpeg",
      city: "MEL",
      desc: "Lille est une belle ville mais elle regorge également de nombreux parcs. Voici une carte représentant les parcs urbains de Lille",
      link: "https://www.google.fr/maps/search/parc+urbains+lille/@50.6282205,3.0130996,12.48z?entry=ttu",
      hashtag: "#PRATIQUE",
    },
    {
      id: 2,
      name: "Courir à Lille et ses alentours",
      image: "./public/images/oneHour/courir.webp",
      city: "MEL",
      desc: "Courir en ville n'est pas toujours évident, ce site nous présente 5 endroits dépaysants dans la MEL.",
      link: "https://bomolet.com/blogs/infos/ou-courir-a-lille-running-bomolet-courseapied-sportu",
      hashtag: "#SPORT",
    },
    {
      id: 3,
      name: "Les jardins partagés",
      image: "./public/images/oneHour/jardin.jpeg",
      city: "Lille",
      desc: "Vivre en ville signifie souvent ne pas avoir d'espace vert. La ville de Lille propose plusieurs jardins partagés pour cultiver des légumes mais également des fleurs.",
      link: "https://www.lille.fr/Nature-a-Lille/Faites-de-Lille-votre-jardin/Les-jardins-partages-et-en-bacs",
      hashtag: "#DECOUVERTE",
    },
    {
      id: 4,
      name: "V'lille",
      image: "./public/images/oneHour/vlille.jpeg",
      city: "Lille",
      desc: "Se déplacer en ville peut vite être stressant et long avec les bouchons. Un moyen de se déconnecter de sa journée et de gagner du temps est l'utilisaiton du vélo avec les v'lille et ses nombreuses bornes.",
      link: "https://www.ilevia.fr/v-lille",
      hashtag: "#PRATIQUE",
    },
    {
      id: 5,
      name: "LPA",
      image: "./public/images/oneHour/lpa.jpeg",
      city: "Lille",
      desc: "La LPA a toujours besoin de bénévoles et propose souvent d'être utile pour les animaux. Il peut être demandé de promener les animaux, de les nourir, de passer un moment avec eux...",
      link: "https://www.lpa-nf.org/je-m-engage/",
      hashtag: "#BENEVOLAT",
    },
    {
      id: 6,
      name: "Acheter local à la ferme urbaine Concorde",
      image: "./public/images/oneHour/ferme.jpeg",
      city: "Lille",
      desc: "Vente en direct de légumes et de paniers de légumes le mercredi après-midi de 13h à 17h",
      link: "https://www.lille.fr/Nature-a-Lille/Zoo-et-Ferme-pedagogique/Ferme-urbaine-Concorde",
      hashtag: "#PRATIQUE",
    },
  ];

  return (
    <ActivitiesContext.Provider value={{ oneHour, daily }}>
      {children}
    </ActivitiesContext.Provider>
  );
}
