require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./models/Fruits.js");
const vegetables = require("./models/Veggies.js");
const Fruit =require('./models/fruit.js')
const Vegetable = require('./models/vegetable.js');
const mongoose = require('mongoose');


//connect WITH MONGOOSE
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // remove : useCreateIndex: true
     
})

mongoose.connection.once('open', ()=> {
    console.log('connected to mongoDB');
});

//setting view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//middleware
app.use((req, res, next)=> {
    console.log('I run for all routes!')
    next();
})

//this allows the body of a post request
app.use(express.urlencoded({extended: false}))

//index route

app.get("/vegetables", async function (req, res) {
    const foundVegetables = await Vegetable.find({});
    res.render("vegetables/index", {
      vegetables: foundVegetables,
    });
  });
// New Routes for vegetables
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

//create = post for vegetables

//Create = POST
app.post("/vegetables", async (req, res) => {
    console.log(req.body);
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    const createdVegetable = await Vegetable.create(req.body);
    console.log(createdVegetable);
    res.redirect("/vegetables");
  });
    
//show vegetable route
app.get("/vegetables/:index", function (req, res) {
    res.render("vegetables/Show", {
        vegetable: vegetables[req.params.index],
    });
});

//middleware
app.use((req, res, next)=> {
    console.log('I run for all routes!')
    next();
})

//this allows the body of a post request
app.use(express.urlencoded({extended: false}))

//index route


app.get("/fruits", async function (req, res) {
    const foundFruits = await Fruit.find({})
   res.render('fruits/Index', {
    fruits: foundFruits,
   });
});

//New Route for fruits
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

//create = post for fruits
app.post("/fruits",  async (req, res)=> {
    console.log("this is the created fruit", req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    }else {
        req.body.readyToEat = false;
    }
    const createdFruit = await Fruit.create(req.body)
    res.redirect('/fruits')
})


 
//show
app.get("/fruits/:id", async (req, res)=> {
    const oneFruit =await Fruit.findById(req.params.id)
    res.render('fruits/show', {
        fruit: oneFruit
    })
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});