const { Router } = require("express");
// Importar todos los routers;
const routerDogs = require("./routerDog");
const routerTemper = require("./routerTemper");

const router = Router();

// Configurar los routers
router.use("/dogs", routerDogs);
router.use("/temperaments", routerTemper);

module.exports = router;
