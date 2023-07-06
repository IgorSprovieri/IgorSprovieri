const express = require("express");
const router = express.Router();

router.get("/my-description", (req, res) => {
  const { weigth, size, align, family } = req.query;

  const text = `Programmer since 2013, I started to work professionaly in 2020,
  developing games with Unity, where I opened my game studio and until 2022 I
  developed 16 team projects, copyright and third-party. I was also a writer
  for more than a year on the website crieseusjogos.com.br. After this period
  I started to dedicate to web development and today I work as a fulltack
  developer with react and node.`;

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
  return res.send(svg);
});

module.exports = router;
