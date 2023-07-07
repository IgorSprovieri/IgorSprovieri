const express = require("express");
const router = express.Router();

router.get("/my-description", (req, res) => {
  const { weigth, size, align, family } = req.query;

  const text = `Programador desde 2013, comecei a atuar profissionalmente em 2020
  desenvolvendo jogos com a Unity, onde eu abri meu estúdio de jogos e até
  2022 desenvolvi 16 projetos em equipe, autorais e de terceiros. Também fui
  redator por mais de um ano do site crieseusjogos.com.br. Após esse período
  comecei a me dedicar ao desenvolvimento web e hoje atuo como desenvolvedor
  fullstack com react e node.`;

  const svg = `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <style>
        .text{
          font: ${weigth || 400} ${size || "16px"} ${family || "Sans-Serif"};
          text-align: ${align || "left"};
        }
      </style>
      <foreignObject
          width="100%"
          height="100%" 
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
        <p class='text' xmlns="http://www.w3.org/1999/xhtml">${text}</p>
      </foreignObject>
    </svg>`;
  return res.type("svg").send(svg);
});

module.exports = router;
