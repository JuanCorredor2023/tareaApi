const express = require("express")
const router = express.Router()

// controladores
const AppControllers = require("../controllers/app.controllers")
//mongo connect
router.post("/createUser", AppControllers.createUser)
router.put("/updateUser/:userId", AppControllers.updateUser)
router.get("/getUser/:userId", AppControllers.getUserById)
router.get("/getAllUser", AppControllers.getAllUser)
router.delete("/deleteUser/:userId", AppControllers.deleteUser)
// router.get("/getUserName", AppControllers.getUserByName)


module.exports=router