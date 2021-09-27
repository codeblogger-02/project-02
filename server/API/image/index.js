import express, { Router } from "express";

//Database model 
import {ImageModel} from "../../Database/Image"


//Routes

/*
route      /
des         uploads given image to the Database
params      none
Access      public
method      post 
*/

Router.post("/", async(req,res) => {
    try {

        const {newImage} = req.body;
        await ImageModel.create(newImage);

        return res.json({message: "Image has been added!!!"});
        
    } catch (error) {
        return res.json({error: error.message});
    }
})


/*
route      /
des         get an particular image based on catogery
params      none
Access      params
method      get 
*/


Router.get("/c/:category" , async(req,res) => {
    try {
        const getSpecificImage = await ImageModel.findOne({category: req.params.category});
        if (!getSpecificImage){
            return res.json({
                error: `No image found for category of ${req.params.category}`,
            });
        }
    } catch (error) {
        return res.json({error: error.message});
    }
})


export default Router;