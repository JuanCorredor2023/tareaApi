const User = require("../models/User")

// requerir el modelo
const AppControllers = {}

AppControllers.createUser = async (req, res) =>{
    try{
    const newUser = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        username: req.body.username,
        eMail: req.body.eMail,
        phone: req.body.phone,
        password: req.body.password
    })
    await newUser.save()
    res.status(200).json({message: `User Created`})
      }catch(error){
          console.log(error)
      }
}

AppControllers.updateUser = async (req, res)=> {
    try{
        const id=req.params.userId
        const obj= req.body
        const updated=await User.findByIdAndUpdate(id, obj, {new:true})
        
        console.log(updated)
        if(updated){
            res.status(202).json({message:`user updated`})

        }else{
            res.status(401).json({message:`user no existe`})

        }
    }catch(error){
        res.status(400).json({message:`error`,error:error})
    }


}
AppControllers.getUserById= async (req,res)=>{
    try{
        const user = await User.findById(req.params.userId)

        if(user){
            res.status(200).json({message:`User Found`,user:user})
        }else{
            res.status(401).json({message:`User not exist`})
        }
    }catch(error){
        res.status(400).json({message:`error`,error:error})
    }
}
AppControllers.getAllUser= async (req,res)=>{
    try{
       const user = await User.find()

        if(user){
            res.status(200).json({message:`User Found`,user:user})
        }else{
            res.status(401).json({message:`User do not exist`})
        }
    }catch(error){
        res.status(400).json({message:`error`,error:error})
    }
}
AppControllers.deleteUser= async(req,res)=>{
    try{
        const deleted=await User.findByIdAndDelete(req.params.userId)

        res.status(202).json({message:`DELETED!`})
    }catch(error){
        res.status(400).json({message:`error`,error:error})
    }
    
}
// AppControllers.getUserByName= async (req,res)=>{
//     try{
//         const user = await User.find(name:"michael")

//         if(user === "michael"){
//             res.status(200).json({message:`User Found`,user:user})
//         }else{
//             res.status(401).json({message:`User not exist`})
//         }
//     }catch(error){
//         res.status(400).json({message:`error`,error:error})
//     }
// }

module.exports=AppControllers