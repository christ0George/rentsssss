const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ponappa001:maybeyes123@kuthira.67uwjmc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let ca=mongoose.Schema;
const carschema=new ca(
    {
        carid:Number,
        company:String,
        model:String,
        no:String,
        color:String,
        fuel:String,
        amount:Number,
        description:String,
        image1:{
            data:Buffer,
            contentType:String,
        }
    }
);
var carmodel=mongoose.model("car",carschema)
module.exports=carmodel;