const { Router } = require("express");
const routerTemper = Router();
const { getTemps } = require("../controllers/Temperamento");


routerTemper.get("/", async (req, res) => {
  try {
    const temperaments = await getTemps();
    res.status(200).json(temperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = routerTemper;
