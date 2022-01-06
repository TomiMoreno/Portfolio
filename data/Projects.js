const NEXT = "nextjs";
const CSS = "css";
const HTML = "html";
const JAVASCRIPT = "javascript";
const REACT = "react";
const SOLIDITY = "solidity";
const TYPESCRIPT = "typescript";
export const projectList = [
  {
    name: "Blockchain art gallery",
    description: "Esta es una aplicación web3 que permite crear un pixel art, subirlo a la blockchain y visualizar todos los pixel art subidos.",
    descriptionEn: "This is a web3 app that allows you to create a pixel art sketch, upload it to the blockchain and view all the pixel art uploaded.",
    technologies: [REACT, SOLIDITY, NEXT, TYPESCRIPT],
    codeURL: "https://github.com/TomiMoreno/blockchain-art-gallery",
    pageURL: "https://blockchain-art-gallery.vercel.app",
    imageURL: "/covers/blockchain-art-gallery.png",
  },
  {
    name: "Btree",
    description: "Esta app fue creada para automatizar el proceso de creación de un árbol binario de decisiones y una tabla de verdad.",
    descriptionEn: "This app was created to automate the process of creating a binary tree and a truth table.",
    technologies: [NEXT, CSS, HTML, JAVASCRIPT, REACT],
    codeURL: "https://github.com/TomiMoreno/btree",
    pageURL: "https://btree.vercel.app",
    imageURL: "/covers/btree.png",
  },
  {
    name: "Moflix",
    codeURL: "https://github.com/TomiMoreno/Moflix",
    description:"Moflix es una aplicación web, que permite ver trailers de películas.",
    descriptionEn:"Moflix is a web application that allows you to see trailers of movies.",
    pageURL: "moflix.vercel.app",
    imageURL: "/covers/moflix.png",
    technologies: [NEXT, CSS, HTML, JAVASCRIPT, REACT],
  }
];

export const technologiesList = {
  [NEXT]: {
    src: "technologies/nextjs.svg",
    name: "Next.js",
  },
  [CSS]: {
    src: "technologies/css.svg",
    name: "CSS3",
  },
  [HTML]: {
    src: "technologies/html.svg",
    name: "HTML5",
  },
  [REACT]: {
    src: "technologies/react.svg",
    name: "React.js",
  },
  [JAVASCRIPT]: {
    src: "technologies/javascript.svg",
    name: "JavaScript",
  },
  [SOLIDITY]: {
    src: "technologies/solidity.svg",
    name: "Solidity",
  },
  [TYPESCRIPT]: {
    src: "technologies/typescript.svg",
    name: "TypeScript",
  }
};
