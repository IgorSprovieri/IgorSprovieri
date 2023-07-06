require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Igor Sprovieri API is running");
});

app.get("/pt/description", (req, res) => {
  res.send(
    "Programador desde 2013, comecei a atuar profissionalmente em 2020 desenvolvendo jogos com a Unity, onde eu abri meu estúdio de jogos e até 2022 desenvolvi 16 projetos em equipe, autorais e de terceiros. Também fui redator por mais de um ano do site crieseusjogos.com.br. Após esse período comecei a me dedicar ao desenvolvimento web e hoje atuo como desenvolvedor fullstack com react e node."
  );
});

app.get("/en/description", (req, res) => {
  res.send(
    "Programmer since 2013, I started to work professionaly in 2020, developing games with Unity, where I opened my game studio and until 2022 I developed 16 team projects, copyright and third-party. I was also a writer for more than a year on the website crieseusjogos.com.br. After this period I started to dedicate to web development and today I work as a fulltack developer with react and node."
  );
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Igor Sprovieri API listening on port ${port}`);
});
