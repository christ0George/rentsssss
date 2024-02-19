const express=require("express")
const cors=require("cors")
const multer=require('multer');
const storage=multer.memoryStorage();
const upload=multer({storage:storage});
// const CategoryRouter = require('./routes/Categoryroutes')
// const SubcateRouter = require('./Routes/Subcateroutes')
// const db = require("./Connection/Database")



const app=new express();
const catemodel=require('./model/Cardetails');
const carmodel = require("./model/Cardetails");
const data2model = require("./model/Login");

// const subcatemodel=require('./model/Subcategorydetails')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.listen(4000,(request,response)=>{
    console.log("port is running in 3005")

})

// app.use("/c", CategoryRouter)

// app.use("/s", SubcateRouter)


app.get('/',(request,response)=>{
    response.send("hai")

})
// app.post('/new',(request,response)=>{
//     console.log(request.body)
//     new catemodel(request.body).save();
//     response.send("Record Successfully Saved")

// })
app.post('/cnew',(request,response)=>{
    console.log(request.body)
    new catemodel(request.body).save();
    response.send("Record Successfully Saved")

})
app.get("/view",async(request,response)=>{
    var data=await carmodel.find();
    response.send(data);
});

// app.get("/subview",async(request,response)=>{
//     var data=await subcatemodel.find();
//     response.send(data);
// });


app.get('/view',async(request,response)=>{
    var data=await carodel.find();
    console.log(data)
    response.send(data)
});
// app.get('/views',async(request,response)=>{
//     var data=await subcatemodel.find();
//     response.send(data)
// });

app.put('/edit/:id',async(request,response)=>{
    let id=request.params.id
    await carmodel.findByIdAndUpdate(id,request.body)
    response.send("Data uploaded")
});
app.put('/edits/:id',async(request,response)=>{
    let id=request.params.id
    await carmodel.findByIdAndUpdate(id,request.body)
    response.send("Data uploaded")
})
app.post('/new',upload.single('image1'),async (request,response) => {
    try {
        const { carid,company,model,no,color,fuel,amount,description} = request.body
        const newdata = new catemodel({
            carid,company,model,no,color,fuel,amount,description,
            image1: {
                data:request.file.buffer,
                contentType: request.file.mimetype,}
        })
        console.log(newdata);
        await newdata.save();
        response.status(200).json({ message: 'Record saved' });

    }
    catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });

    }})


    app.post('/Loginsearch',async(request,response)=>{
const {username,password}=request.body;
try{ const user=await data2model.findOne({username,password});
if(user)
{response.json({success: true,message:'Login Successfully'});}
else
{response.json({success: false,message:'Invalid Username and email'});}
}
catch(error)
{
response.status(500).json({sucess: false,message:'Error'})
}
})

       
       
   


