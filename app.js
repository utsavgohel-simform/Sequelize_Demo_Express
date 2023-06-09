const express = require("express");
const app = express();
require("./models");
const userController = require("./controller/userController");
app.get("/add", userController.addUser);
app.get("/crud", userController.crudOperation);
app.get("/finder", userController.finderData);
app.get("/validation", userController.validationController);
app.get("/rawQuery", userController.rawQuery);
app.get("/oneToOne", userController.oneToOne);
app.get("/belongTo", userController.belongTo);
app.get("/hasMany", userController.hasMany);
app.get("/ManyToMany", userController.ManyToMany);

app.listen(3000, () => {
  console.log("Server Running");
});
