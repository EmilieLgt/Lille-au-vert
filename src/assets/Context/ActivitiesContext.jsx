/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ActivitiesContext = createContext();

export default function ActivitiesContextProvider({ children }) {
  const oneAfternoon = [
    {
      id: 0,
      name: "Mosaïc",
      image: "./public/images/oneafternoon/afternoon0.jpg",
      desc: "Au cœur du Parc de la Deûle, se niche un jardin extraordinaire. Bienvenue à Mosaïc, le jardin des cultures ! Fruit du talent des paysagistes Jacques Simon, Yves Hubert et Jean-Noël Capart, Mosaïc raconte et célèbre la diversité culturelle de la métropole lilloise.",
      hashtag: "BALADE",
      link: "https://www.houplin-ancoisne.fr/mes-loisirs-assos/culture/parc-mosaic",
      city: "Houplin-Ancoisne",
    },

    {
      id: 1,
      name: "Parc du Héron",
      image: "./public/images/oneafternoon/afternoon1.jpg",
      desc: "Le parc du Héron constitue une transition unique entre le milieu urbain et le site agricole préservé et compte 110 hectares d’eau et d’espaces verts. Il abrite la colline des Marchenelles, la Forêt des Anges, ainsi que la Réserve Naturelle Régionale du Héron offrant une diversité ornithologique riche de 200 espèces d’oiseaux.",
      hashtag: "BALADE",
      link: "https://www.villeneuvedascq.fr/le-parc-du-heron",
      city: "Villeneuve d'Ascq",
    },
    {
      id: 2,
      name: "Balade en bateau",
      image: "./public/images/oneafternoon/afternoon2.jpg",
      desc: "Découvrez la Deûle comme vous ne l’avez jamais vue à bord de bateaux 100% électriques, sans permis et surtout silencieux ! 2 parcours possibles : 1h ou 2h",
      hashtag: "DETENTE",
      link: "https://www.marindeaudouce.fr/base-nautique-de-lille/",
      city: "Lille",
    },
    {
      id: 3,
      name: "Forêt de Phalempin",
      image: "./public/images/oneafternoon/afternoon3.jpg",
      desc: "Située à environ 20 kilomètres de Lille, la forêt de Phalempin est l’une des forêts domaniales les plus fréquentées de la région. Sur ses 679 hectares, elle accueille près de 300 000 visiteurs par an. ",
      hashtag: "DETENTE",
      link: "https://www.phalempin.fr/2019/01/08/promenades-et-randonnees/",
      city: "Phalempin",
    },
    {
      id: 4,
      name: "Randonnée urbaine",
      image: "./public/images/oneafternoon/afternoon4.jpg",
      desc: "L'application AllTrails permet de trouver des chemins de randonnées dans différents lieux, en voilà une compilation des randonnées à Lille !",
      hashtag: "RANDONNEE",
      link: "https://www.alltrails.com/fr/france/nord/lille",
      city: "Lille",
    },
    {
      id: 5,
      name: "Accrobranche",
      image: "./public/images/oneafternoon/afternoon5.jpg",
      desc: "7 parcours d'accrobranche pour toute la famille en plein coeur de la citadelle de Lille !",
      hashtag: "SPORT",
      link: "https://chloro-fil.fr/accrolille/",
      city: "Lille",
    },
  ];

  const weekEnd = [
    {
      id: 1,
      name: "A la mer",
      image: "./public/images/weekEnd/cote.jpg",
      city: "Cote d'Opale",
      desc: "Les trésors de la Côte d'Opale sont nombreux aussi bien le long de la côte que dans l’arrière-pays. Visitez les Deux-Caps ou encore Nausicaá.",
      link: "https://www.cote-dopale.com/",
      hashtag: "DETENTE",
    },
    {
      id: 2,
      name: "Nuit en tipi",
      image: "./public/images/weekEnd/tipi.jpg",
      city: "Palluel",
      desc: "Aventure en famille sous une yourte ou un tipi : insolite ! C'est aussi un éco-lieu, ouvert à tous pour s’évader sans partir loin",
      link: "https://www.weekend-hautsdefrance.com/insolites/ecoland-aventures-en-famille-et-nuit-insolite-pres-darras-0 ",
      hashtag: "ORIGINAL",
    },
    {
      id: 3,
      name: "Nuit dans une bulle",
      image: "./public/images/weekEnd/bulle.jpg",
      city: "Drincham",
      desc: "La Route des Bulles vous propose des nuits insolites dans des bulles dans le Nord de la France. Au bord d’un étang, sous un ciel étoilé , évadez-vous le temps d’une nuit !",
      link: "https://routedesbulles.fr/les-bulles-des-hauts-de-flandre/",
      hashtag: "ORIGINAL",
    },
    {
      id: 4,
      name: "Nuit en cabane",
      image: "./public/images/weekEnd/cabane.jpg",
      city: "Mormal",
      desc: "Une cabane de bois perchée à 6m de hauteur pour une douce nuit ! Calme, cosy, chaleureuse et confortable, la grange de Mormal est située en plein coeur de la forêt",
      link: "https://www.weekend-hautsdefrance.com/insolites/nuit-insolite-en-foret-en-duo-en-cabane-au-coeur-de-mormal",
      hashtag: "ORIGINAL",
    },
  ];

  const oneHour = [
    {
      id: 1,
      name: "Parc Jean-Baptiste Lebas",
      image: "./public/images/oneHour/jblebas.webp",
      city: "Lille",
      desc: "Ces 3 hectares de nature au cœur de la ville s'organisent autour de la trame originelle des marronniers centenaires, confortée par la plantation de jeunes tilleuls. Les chemins et les placettes pavés offrent aux promeneurs des points de vue et des ambiances variés.",
      link: "https://www.lille.fr/Nos-equipements/Parc-Jean-Baptiste-Lebas",
      hashtag: "BALADE",
    },
    {
      id: 2,
      name: "Parc de la Citadelle",
      image: "./public/images/oneHour/citadelle.jpeg",
      city: "Lille",
      desc: "Le plus grand espace vert de Lille va vous surprendre encore, à travers une offre d’activités sportives pour tous, la mise en valeur de son patrimoine historique et naturel exceptionnel, un zoo enrichi et rénové, un nouvel espace de détente...",
      link: "https://parcdelacitadelle.lille.fr",
      hashtag: "BALADE",
    },
    {
      id: 3,
      name: "Yoga à la Citadelle",
      image: "./public/images/oneHour/yoga.webp",
      city: "Lille",
      desc: "Bonne nouvelle : les séances de yoga dominicales à la Citadelle sont de retour ce 26 mai à Lille avec le professeur Olivier Bartlinski... En l'occurrence, en fonction du temps, le yoga dominical organisé à la Citadelle est bel et bien de retour pour la saison estivale. Gratuit et ouvert à tous.",
      hashtag: "BALADE",
    },
    {
      id: 4,
      name: "Parc Barbieux",
      image: "./public/images/oneHour/barbieux.jpeg",
      city: "Roubaix",
      desc: "Ce parc propose une diversité naturelle hors du commun. Outre ses 60 essences d'arbres et ses plans d'eau, le parc offre un magnifique parcours de promenade. Espace de loisirs et de détente, on y trouve également une aire de jeux pour les enfants et un terrain de pétanque.",
      link: "https://www.roubaixtourisme.com/avoir/leparcbarbieux/",
      hashtag: "BALADE",
    },
    {
      id: 5,
      name: "Jardin des plantes",
      image: "./public/images/oneHour/jardindesplantes.jpeg",
      city: "Lille",
      desc: "Situé dans le quartier Moulins, le Jardin des plantes propose une grande diversité de milieux et de végétaux : parcours des arbres remarquables, carrés botaniques, belles perspectives et grandes pelouses en font un exceptionnel lieu de promenade pour les curieux.",
      link: "https://www.lille.fr/Nos-equipements/Le-Jardin-des-plantes",
      hashtag: "BALADE",
    },
    {
      id: 6,
      name: "Ferme pédagogique Marcel Dhénin ",
      image: "./public/images/oneHour/ferme.jpeg",
      city: "Lille",
      desc: "La ferme pédagogique Marcel Dhénin est un lieu de découverte incontournable des animaux et des plantes domestiques, en particulier des races et des variétés régionales.",
      link: "https://www.tripadvisor.fr/Attraction_Review-g187178-d6825485-Reviews-La_Ferme_Marcel_Dhenin-Lille_Nord_Hauts_de_France.html",
      hashtag: "DECOUVERTE",
    },
    {
      id: 7,
      name: "Jardin Vauban",
      image: "./public/images/oneHour/vauban.webp",
      city: "Lille",
      desc: "Ce jardin paysager de style anglais, dans le quartier de Vauban-Esquermes à Lille, est traversé par des allées sinueuses et présente un patrimoine arboré remarquable, des bassins, de grandes pelouses...",
      link: "https://www.lilletourism.com/explorer/hello-nature/prendre-lair/parcs-jardins/jardin-vauban-lille-fr-4432159/",
      hashtag: "BALADE",
    },
    {
      id: 8,
      name: "Parc du château de Robersart",
      image: "./public/images/oneHour/robersart.jpeg",
      city: "Wambrechies",
      desc: "Cheminements, espace détente, aire de jeux, fontaine, étangs, arboretum évolutif, des milieux naturels des quatre coins du monde reconstitués, jardin rond... pour une balade ou un pique-nique, en plein centre-ville !",
      link: "https://www.wambrechies.fr/decouvrir-wambrechies/patrimoine-naturel-et-vegetal/le-parc-du-chateau-de-robersart",
      hashtag: "BALADE",
    },
    {
      id: 9,
      name: "Jardin des géants",
      image: "./public/images/oneHour/jardingeants.jpeg",
      city: "La Madeleine",
      desc: "Au cours de votre balade, vous pouvez découvrir aussi les sculptures de Quentin Garel et de l'artiste Stéphanie Buttier.",
      link: "https://enm.lillemetropole.fr/espaces-nature/le-jardin-des-geants",
      hashtag: "BALADE",
    },
  ];

  const daily = [
    {
      id: 1,
      name: "Trouver un parc près de chez moi",
      image: "./public/images/daily/parcs.jpeg",
      city: "MEL",
      desc: "Lille est une belle ville mais elle regorge également de nombreux parcs. Voici une carte représentant les parcs urbains de Lille",
      link: "https://www.google.fr/maps/search/parc+urbains+lille/@50.6282205,3.0130996,12.48z?entry=ttu",
      hashtag: "PRATIQUE",
    },
    {
      id: 2,
      name: "Courir à Lille et ses alentours",
      image: "./public/images/daily/courir.webp",
      city: "MEL",
      desc: "Courir en ville n'est pas toujours évident, ce site nous présente 5 endroits dépaysants dans la MEL.",
      link: "https://bomolet.com/blogs/infos/ou-courir-a-lille-running-bomolet-courseapied-sportu",
      hashtag: "SPORT",
    },
    {
      id: 3,
      name: "Les jardins partagés",
      image: "./public/images/daily/jardin.jpeg",
      city: "Lille",
      desc: "Vivre en ville signifie souvent ne pas avoir d'espace vert. La ville de Lille propose plusieurs jardins partagés pour cultiver des légumes mais également des fleurs.",
      link: "https://www.lille.fr/Nature-a-Lille/Faites-de-Lille-votre-jardin/Les-jardins-partages-et-en-bacs",
      hashtag: "DECOUVERTE",
    },
    {
      id: 4,
      name: "V'lille",
      image: "./public/images/daily/vlille.jpeg",
      city: "Lille",
      desc: "Se déplacer en ville peut vite être stressant et long avec les bouchons. Un moyen de se déconnecter de sa journée et de gagner du temps est l'utilisaiton du vélo avec les v'lille et ses nombreuses bornes.",
      link: "https://www.ilevia.fr/v-lille",
      hashtag: "PRATIQUE",
    },
    {
      id: 5,
      name: "LPA",
      image: "./public/images/daily/lpa.jpeg",
      city: "Lille",
      desc: "La LPA a toujours besoin de bénévoles et propose souvent d'être utile pour les animaux. Il peut être demandé de promener les animaux, de les nourir, de passer un moment avec eux...",
      link: "https://www.lpa-nf.org/je-m-engage/",
      hashtag: "BENEVOLAT",
    },
    {
      id: 6,
      name: "La ferme urbaine Concorde",
      image: "./public/images/daily/ferme.jpeg",
      city: "Lille",
      desc: "Vente en direct de légumes et de paniers de légumes le mercredi après-midi de 13h à 17h",
      link: "https://www.lille.fr/Nature-a-Lille/Zoo-et-Ferme-pedagogique/Ferme-urbaine-Concorde",
      hashtag: "PRATIQUE",
    },
  ];

  /*      CLICK FUNCTION        */
  const [countClick, setCountClick] = useState(0);
  const clicksLimit = 5;
  const clicksLimit2 = 7;

  const handleClick = () => {
    setCountClick(countClick + 1);
    setFilter();
  };

  useEffect(() => {
    if (countClick === clicksLimit) {
      alert(
        "Ouh là, ça commence à faire longtemps que vous êtes là ! Il est temps de sortir et de prendre l'air !"
      );
    } else if (countClick === clicksLimit2) {
      alert(
        "Toujours là ? Il faut choisir une activité et fermer cette page !"
      );
    }
  }),
    [countClick];

  /*      FILTER FUNCTION        */
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <ActivitiesContext.Provider
      value={{
        oneHour: oneHour,
        daily: daily,
        oneAfternoon: oneAfternoon,
        weekEnd: weekEnd,
        handleClick: handleClick,
        countClick: countClick,
        filter: filter,
        setFilter: setFilter,
        handleChangeFilter: handleChangeFilter,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
