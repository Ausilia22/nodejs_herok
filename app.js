const functions = require("./functions")

// console.log("Hello Ausilia!")

// functions.add(1,2);
// functions.helloWorld()

// const http = require("http");

// const handler = (request, response) => {
// console.log("funkcja działa")
// response.end("Hello Ausilia!!! How are you today?")
// }

// const server = http.createServer(handler);

const express =require("express");
const path = require ("path");
const app = express();



const port = 9000;

app.set("view engine","hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")))


app.get("/", function(req,res){
    
    res.render("index", {
        pageTitle: "Zajęcia 14.02.2021",
        subTitle: functions.subtitle,
        subsubTitle: functions.sample()
    })
})

app.get("/about",function(req,res){res.render("about")}  )


app.listen(port, (err) => {
    if (err) {return console.log(`błąd ${err}`)}
    console.log(`server działa na porcie ${port}`)
}) 