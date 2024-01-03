const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/api");

const app = express();

app.use(express.static(__dirname));

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
