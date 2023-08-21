
const express = require("express");
const app = express();
const port = 3000;
const fruits = require("./models/Fruits.js");
const vegetables = require("./models/Veggies.js");

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


app.get("/vegetables", function (req, res) {
    res.render("vegetables/Index", { vegetables: vegetables });
});
// New Routes for vegetables
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

//create = post for vegetables
app.post("/vegetables", (req, res)=> {
    console.log("this is the created vegetables", req.body)
    if (req.body.readyToCook === 'on') {
        req.body.readyToCook = true;
    }else {
        req.body.readyToCook = false;
    }
    vegetables.push(req.body)
    console.log("this is the vegetables array", vegetables)
    res.redirect('/vegetables')
})


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
app.get("/fruits", function (req, res) {
    res.render("fruits/Index", {
         fruits: fruits });
});
//New Route for fruits
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

//create = post for fruits
app.post("/fruits", (req, res)=> {
    console.log("this is the created fruit", req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    }else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body)
    console.log("this is the fruits array", fruits)
    res.redirect('/fruits')
})


 
//show
app.get("/fruits/:index", function (req, res) {
    res.render("fruits/Show", {
        fruit: fruits[req.params.index],
    });
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});