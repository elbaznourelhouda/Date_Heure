const express = require("express");
const router = express.Router();

router.get("/datetime", (req, res) => {
    try {
        const dateTime = new Date();
        res.json({ dateTime: dateTime });
    } catch (error) {
        console.error("Erreur côté serveur :", error);
        res.status(500).json({ error: "Erreur côté serveur" });
    }
});

module.exports = router;
