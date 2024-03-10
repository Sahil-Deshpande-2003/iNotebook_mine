const express = require('express')
const router = express.Router()
const User_model = require('../models/Users')
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchUserID = require('../middleware/fetchUserID');
const JWT_SECRET = "This is a secret"
router.get('/',(req,res)=>{
    res.json("This is auth page")
})

// Create user using POST /api/auth/createuser

router.post('/createuser',[
    body('email').isEmail(),
  // password must be at least 5 chars long
  body('name','Name should be atleast 5 characters').isLength({ min: 5 }),
  body('password','Password should be atleast 3 characters').isLength({ min: 3 }),
],async(req,res)=>{

    let success = false;

    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }

    let user = await User_model.findOne({email:req.body.email})


    if (user){

        return res.status(400).json({ success,errors: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    success = true;

    user = await User_model.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })

      const authtoken = jwt.sign(data, JWT_SECRET);

      res.json({success,authtoken})
    }catch(error){

        return res.status(400).json({success,error:error.message})
    }

    

    })

// Login user using POST /api/auth/loginuser

router.post('/loginuser',[
    body('username','Enter a valid email').isEmail(),
  // password must be at least 5 chars long
  body('password','Password cant be blank').exists(),
],async(req,res)=>{

    let success = false;

    try{

        

        let user = await User_model.findOne({email:req.body.email})

        if (!user){

           return res.status(400).json({success,error:"Enter valid login credentials"})
        }

        let passComp = await bcrypt.compare(req.body.password,user.password)
       
        if (!passComp){

           return res.status(400).json({success,error:"Enter valid login credentials"})
        }


        let data = {

            user:{
                id:user.id
            }
        }

      

        const authtoken = jwt.sign(data, JWT_SECRET); // Sign user's id with the secret string

        success = true;

        // res.json({success,authtoken})
        res.json({success,authtoken})

    }catch(error){
        console.error(error.message)

        res.json({success,errors:error.message})
    }
})


// Get Logged In User Details using GET /api/auth/getuser 

router.get('/getuser',fetchUserID,async(req,res)=>{

    let success = false;

    try{

        let userID = req.user.id

        let user = await User_model.findById(userID).select("-password")

        if (!user){
            res.status(400).json({success,error:"User not found"})
        }

        success = true;

        res.json({success,user})

        
        

    }catch(error){



        console.error(error.message)

         res.status(400).json({success,error:error.message})
    }

})


module.exports = router