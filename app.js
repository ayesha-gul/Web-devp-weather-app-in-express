let express = require("express");
let app = express();
let port = 3000;
let path = require("path");
let hbs = require('hbs');

let publicPath = path.join(__dirname,"public");
let templatePath = path.join(__dirname,'templates/views');
let partialPath = path.join(__dirname,'templates/partials');


app.use(express.static(publicPath));
app.set("view engine", 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/about',(req,res) => {
    res.render('about');
})

app.get('/weather',(req,res) => {
   res.render('weather');
})

app.get('*',(req,res) => {
    res.render('404error');
})

app.listen(port, () =>{
    console.log(`listening to the port no ${port}`);
})