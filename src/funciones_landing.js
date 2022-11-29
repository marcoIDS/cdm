let bu = true, bm = true, bd = true, bc = true;
let imprimirm = (texto) =>
{
    
    if(bm)
    {
        document.getElementById("dmartin").innerHTML = "";
        document.getElementById("dmartin").innerHTML = texto;
        bm = false;
    }
    else
    {
        document.getElementById("dmartin").innerHTML = "";
        bm = true;

    }
    
}

let mostrarm = (callback) =>
{
    let cadenam = "<br><h2>Martin Ochoa</h2> <p>Edad: 19 años<\p> <p>Tel: 9651193170</p> <a>Correo: 221254@ids.upchiapas.edu.mx <\a> <br> <a href='https://www.facebook.com/martin.ochoaespinosa' target='_blank'><br>Facebook</a><br>";
    callback(cadenam);
}

let imprimirc = (texto) =>
{
    if(bc)
    {
        document.getElementById("dcristian").innerHTML = "";
        document.getElementById("dcristian").innerHTML = texto;
        bc = false;
    }
    else
    {
        document.getElementById("dcristian").innerHTML = "";
        bc = true;

    }
}

let mostrarc = (callback) =>
{
    let cadenam = "<br><h2>Cristian Ovando</h2> <p>Edad: 20 años<\p> <p>Tel: 9651257602</p> <a>Correo: 221256@ids.upchiapas.edu.mx <\a> <a href=''><\a><br><a href='https://www.facebook.com/cristian.ovandogomez' target='_blank'><br>Facebook</a><br>";
    callback(cadenam);

}

let imprimird = (texto) =>
{
    if(bd)
    {
        document.getElementById("ddiego").innerHTML = "";
        document.getElementById("ddiego").innerHTML = texto;
        bd = false;
    }
    else
    {
        document.getElementById("ddiego").innerHTML = "";
        bd = true;

    }
}

let mostrard = (callback) =>
{
    let cadenam = "<br><h2>Diego Ortiz</h2> <a>Edad: 19 años<\a> <p>Tel: 9181071656</p> <a>Correo: 221277@ids.upchiapas.edu.mx <\a> <br> <a href='https://www.facebook.com/joseantonio.ortizdelarosa' target='_blank'><br>Facebook</a><br>";
    callback(cadenam);

}

let imprimiru = (texto) =>
{
    if(bu)
    {
        document.getElementById("dulises").innerHTML = "";
        document.getElementById("dulises").innerHTML = texto;
        bu = false;
    }
    else
    {
        document.getElementById("dulises").innerHTML = "";
        bu = true;

    }
}

let mostraru = (callback) =>
{
    let cadenam = "<br><h2>Ulises Gálvez</h2> <a>Edad: 22 años<\a> <p>Tel: 9651032159</p> <a>Correo: 213691@ids.upchiapas.edu.mx <\a> <br> <a href='https://www.facebook.com/ulises.galvez.52/' target='_blank'><br>Facebook</a><br>";
    callback(cadenam);

}

window.onscroll = function(){encabezado()};

let register = () =>{
    let frm = document.frm_uno;
    let nom = frm.elements.username;
    let ape = frm.elements.apellido;
    let eda = frm.elements.edad;
    let altu = frm.elements.altura;
    let pes = frm.elements.peso;
    let corr = frm.elements.correo;
    alert("Nombre: " + nom.value + "\n" + " Apellido: " + ape.value + "\n" + "Edad: " + eda.value +"\n"+ "Altura: " + altu.value +"\n"+ "Peso: " + pes.value +"\n"+ "Correo: " + corr.value);
}

//#558985;
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});