const { Router } = require("express");
const routerDog = Router();
const { validate1 } = require("./middlewars");
const {
  getRaces,
  getRaceByName,
  getDogIdDB,
  getDogIdAPI,
  createDog,
  deleteDog,
} = require("../controllers/dogs");

// me trae todos o solo los de tal raza
routerDog.get("/", async (req, res) => {
  const { race } = req.query;
  try {
    let races;
    if (!race) races = await getRaces();
    else races = await getRaceByName(race);
    res.status(200).json(races);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// trae por id, verifica que tipo de id es y busca donde debe
routerDog.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let perroId;
    if (isNaN(id)) perroId = await getDogIdDB(id); //UUID
    else perroId = await getDogIdAPI(id); //solo number

    return res.status(200).send(perroId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

routerDog.post("/", validate1, async (req, res) => {
  const {
    name,
    race,
    life_span_min,
    life_span_max,
    height_min,
    height_max,
    weight_min,
    weight_max,
    temperament,
  } = req.body;

  try {
    const newDog = await createDog(
      name,
      race,
      life_span_min,
      life_span_max,
      height_min,
      height_max,
      weight_min,
      weight_max
    );
    await newDog.addTemperaments(temperament); // relaciono temps con el newDog

    res.status(201).send("Dog created successfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

routerDog.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dogDelete = await this.deleteDog(id);
    res.status(200).json(dogDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = routerDog;
