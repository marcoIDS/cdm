const express = require('express'); //importamos express
let con = require('./src/mysql_conector.js');
const app = express(); //Iniciamos express
let registroExitoso = "";
let usuarioEncontrado = "";
let usuario;
//Iniciamos express
app.listen('8000', () =>
{
    console.log('aplicación iniciada en el puerto 8000')
});

//Configurar ejs
app.set('view engine', 'ejs');
app.set('views', './vistas');
app.use(express.urlencoded({ extended: false}));


//Configurar archivos estáticos
app.use(express.static('./vistas'));
app.use(express.static('./src'));
app.use(express.static('./css'));
app.use(express.static('./img'));

//Renderizar vistas
app.get('/', (req, res) =>
{
    res.render('index', {titulo: 'CDM'});
});

app.get('/menuCoach', (req, res) =>
{
    res.render('menuCoach', {titulo: 'CDM'});
});

app.get('/menuDeportista', (req, res) =>
{
    res.render('menuDeportista', {titulo: 'CDM'});
});

app.get('/signin', (req, res) =>
{
    res.render('signIn', {alerta: registroExitoso});
    registroExitoso = "";
});


app.get('/login', (req, res) =>
{
    res.render('login', {alerta: usuarioEncontrado});
    usuarioEncontrado = "";
});

app.get('/agregar/:nombre/:correo/:contrasena/:fecha/:peso/:altura/:sexo/:coach', (req,res) =>
{
    console.log(req.params.nombre, req.params.correo, req.params.contrasena, req.params.fecha, req.params.peso, req.params.altura, req.params.sexo, req.params.coach);
    let nombre =req.params.nombre;
    let correo = req.params.correo;
    let contrasena = req.params.contrasena;
    let fecha = req.params.fecha;
    let peso = req.params.peso;
    let altura = req.params.altura;
    let sexo = req.params.sexo;
    let coach = req.params.coach;
    try
    {
        con.agregarDeportista(nombre, correo, contrasena, fecha, peso, altura, sexo, coach);
        registroExitoso = 'Registro exitoso.';
        res.redirect('/signin');
    }
    catch
    {
        registroExitoso = 'Registro rechazado, correo inválido. Introduzca un correo distinto.';
    }
    

});

app.get('/iniciar/:correo/:contrasena/:opcion', async (req,res) => 
{
    
    let correo = req.params.correo;
    let contrasena =req.params.contrasena;
    let opcion = req.params.opcion;
    console.log(correo, contrasena, opcion);
    usuario = await con.consultarUsuario(opcion, correo);
    console.log(usuario);
    if(usuario.length < 1)
    {
        usuarioEncontrado = `No existe ningun ${opcion} con ese correo electrónico.`;
        res.redirect('/login');
    }
    else
    {
        if(contrasena != usuario[0].contraseña)
        {
            usuarioEncontrado = 'La contraseña es incorrecta.';
            res.redirect('/login');
            console.log(usuario.length);
        }
        else
        {
            if(opcion == "coach")
            {
                res.redirect('/menuCoach');
            }
            else
            {
                res.redirect('/menuDeportista');
            }

        }
    }
});


















/*
app.get('/agregar/:nombre/:correo/:contraseña/:fecha/:peso/:altura/:sexo/:coach', (req, res) =>
{
    let nombre = req.params.nombre;
    let correo = req.params.correo;
    let contraseña = req.params.contraseña;
    let fecha = req.params.fecha;
    let peso = req.params.peso;
    let altura = req.params.altura;
    let sexo = req.params.sexo;
    let coach = req.params.coach;
    console.log(nombre, correo, contraseña, fecha, peso, altura, sexo, coach);
});
*/
