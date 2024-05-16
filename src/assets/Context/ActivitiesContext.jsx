/* eslint-disable react/prop-types */
import { createContext } from "react";

export const ActivitiesContext = createContext();

export default function ActivitiesContextProvider({ children }) {
  const oneAfternoon = [
    {
      id: 0,
      name: "Mosaïc, le jardin des cultures",
      image: "./public/images/oneafternoon/afternoon1.jpg",
      desc: "Au cœur du Parc de la Deûle, se niche un jardin extraordinaire. Bienvenue à Mosaïc, le jardin des cultures ! Fruit du talent des paysagistes Jacques Simon, Yves Hubert et Jean-Noël Capart, Mosaïc raconte et célèbre la diversité culturelle de la métropole lilloise.",
      hastag: "#BALADE",
      link: "https://www.houplin-ancoisne.fr/mes-loisirs-assos/culture/parc-mosaic",
      city: "Houplin-Ancoisne",
    },

    {
      id: 1,
      name: "Parc du Héron",
      image: "./public/images/oneafternoon/afternoon1.jpg",
      desc: "Le parc du Héron constitue une transition unique entre le milieu urbain et le site agricole préservé et compte 110 hectares d’eau et d’espaces verts. Il abrite la colline des Marchenelles, la Forêt des Anges, ainsi que la Réserve Naturelle Régionale du Héron offrant une diversité ornithologique riche de 200 espèces d’oiseaux.",
      hastag: "#BALADE",
      link: "https://www.villeneuvedascq.fr/le-parc-du-heron",
      city: "Villeneuve d'Ascq",
    },
    {
      id: 2,
      name: "Ballade en bateau",
      image: "./public/images/oneafternoon/afternoon2.jpg",
      desc: "Découvrez la Deûle comme vous ne l’avez jamais vue à bord de bateaux 100% électriques, sans permis et surtout silencieux ! 2 parcours possibles : 1h ou 2h",
      hastag: "#DETENTE",
      link: "https://www.marindeaudouce.fr/base-nautique-de-lille/",
      city: "Lille",
    },
    {
      id: 3,
      name: "Forêt de Phalempin",
      image: "./public/images/oneafternoon/afternoon3.jpg",
      desc: "Située à environ 20 kilomètres de Lille, la forêt de Phalempin est l’une des forêts domaniales les plus fréquentées de la région. Sur ses 679 hectares, elle accueille près de 300 000 visiteurs par an. ",
      hastag: "#DETENTE",
      link: "https://www.phalempin.fr/2019/01/08/promenades-et-randonnees/",
      city: "Phalempin",
    },
    {
      id: 4,
      name: "Randonnée urbaine",
      image: "./public/images/oneafternoon/afternoon4.jpg",
      desc: "L'application AllTrails permet de trouver des chemins de randonnées dans différents lieux, en voilà une compilation des randonnées à Lille !",
      hastag: "#RANDONNEE",
      link: "https://www.alltrails.com/fr/france/nord/lille",
      city: "Lille",
    },
    {
      id: 5,
      name: "Accrobranche",
      image: "./public/images/oneafternoon/afternoon5.jpg",
      desc: "7 parcours d'accrobranche pour toute la famille en plein coeur de la citadelle de Lille !",
      hastag: "#SPORT",
      link: "https://chloro-fil.fr/accrolille/",
      city: "Lille",
    },
  ];
  console.log(oneAfternoon)

  return (
    <ActivitiesContext.Provider
      value={{
        oneAfternoon : oneAfternoon
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
}
