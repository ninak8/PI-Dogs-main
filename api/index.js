//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Temperament } = require("./src/db");
const { getTemperament } = require("./src/controllers/Temperamento");

const loaderTemp = async () => {
  const temps = await getTemperament();
  try {
    temps.forEach(async (elem) => {
      await Temperament.findOrCreate({
        where: {
          name: elem,
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log("%s listening at 3001"); // eslint-disable-line no-console
//   });
// });

server.listen(3001, async () => {
  console.log("tamo activo en el puerto 3001");
  conn.sync({ force: true });
  await loaderTemp();
});
