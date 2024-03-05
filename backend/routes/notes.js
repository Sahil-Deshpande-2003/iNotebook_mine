const express = require('express')
const router = express.Router()
const Note_model = require('../models/Notes')
const { body, validationResult } = require('express-validator');
const fetchUserID = require('../middleware/fetchUserID');
const User_model = require('../models/Users')

// Add note using /api/notes/addnote

router.post('/addnote',[
    // password must be at least 5 chars long

    body('title','Title should be atleast 5 characters').isLength({ min: 5 }),
    body('description','Description should be atleast 3 characters').isLength({ min: 3 }),
],fetchUserID,
async(req,res)=>{

    console.log("Inside list")

    let success = false;

    try{

        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }

    success = true;

    let newNote = await Note_model.create({
        title:req.body.title,description:req.body.description,tag:req.body.tag,user:req.user.id
    })

    let savedNote = await newNote.save();

    success = true;

    res.json({success,savedNote})

    

    }catch(error){
        return res.status(400).json({success,error:error.message})
    }

})

// Fetch note using GET /api/notes/getnote

router.get('/getnote',fetchUserID,
async(req,res)=>{

   
    let success = false;

    try{

      
    let userID = req.user.id

    let notes = await Note_model.find({user:req.user.id})

    if (!notes){
        return res.status(400).json({success,error:"Not Allowed"})
    }

    success = true;

    res.json({success,notes})


    }catch(error){
        return res.status(400).json({success,error:error.message})
    }

})

//  Delete note using /api/notes/deletenote

router.delete('/deletenote/:id',fetchUserID,async(req,res)=>{

    let success = false;

    try{

        let note = await Note_model.findById(req.params.id)

        if (!note){
            return res.status(400).json({success,error:"Note does not exist"})
        }

        if (req.user.id!==note.user.toString()){
            return res.status(400).json({success,error:"Not Allowed"})
        }

        let deleted_note = await Note_model.findByIdAndDelete(req.params.id)

        success = true;

        res.json({success,deleted_note})
        

    }catch(error){
        return res.status(400).json({success,error:error.message})
    }
})



// Update Notes using /api/notes/updatenote




router.put('/updatenote/:id',fetchUserID,async(req,res)=>{

    let success = false;

    try{

        let note = await Note_model.findById(req.params.id)

        if (!note){
            return res.status(400).json({success,error:"Note does not exist"})
        }

        if (req.user.id!==note.user.toString()){
            return res.status(400).json({success,error:"Not Allowed"})
        }

        let newNote = {}

        if (req.body.title) newNote.title = req.body.title
        if (req.body.description) newNote.description = req.body.description
        if (req.body.tag) newNote.tag = req.body.tag

        note = await Note_model.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})

        success = true;

        res.json({success,note})

      


        
        

    }catch(error){
        return res.status(400).json({success,error:error.message})
    }
})



module.exports = router