import  mongoose  from "mongoose";


const ImageSchema = new mongoose.Schema({
  id:{ type: String , required:true },
  images:[{type: String, required:true}],
  category:{ type: String, required:true }
},
{
    timestamps:true,
})


export const ImageModel = mongoose.model("images",ImageSchema);