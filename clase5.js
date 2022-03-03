//funcion que maneja el titulo

//Funcion que maneja la seleccion del usuario
    //funcion que maneja el cambio de imagen
    // funcion que maneja el resultado
//funcion que maneja la jugada
    //funcion que maneja el cambio de imagen
    // funcion que maneja el resultado
function ponerTitulo(titulo) {
    $('.caja-titulo').html(`<i>${titulo}</i>`)
}
function imprimirResultado(resultado){
    $('.caja-resultado').html(`<i>${resultado}</i>`);

    var resultadoColor={
        'GANASTE':'limegreen',
        'EMPATASTE':'yellow',
        'PERDISTE':'red'
    };
    var color=resultadoColor[resultado]
    $('.caja-resultado').css('color',color ? color:'')
};
function imprimirImagen(id,img){
    if(img=='')img='signo'
$('#'+id).attr('src','imagenes/'+img+'.jpg')
};
var opcionJugador='';
function configurarSeleccionJugador(){
    //imagenes iniciales
    imprimirImagen('img-jugador','piedra')
    imprimirImagen('img-computadora','')
    //cambiar la seleccion
    $('select').change(function(){
        opcionJugador=$('select').val();
        imprimirImagen('img-jugador',opcionJugador)
        imprimirResultado('jugar!');
        imprimirImagen('img-computadora','')
    });
};

function configurarBotonJugar () {
    $('button').click(function(){
        var opcionComputadora=sortear();
        imprimirImagen('img-computadora',opcionComputadora);
        obtenerResultado(opcionComputadora,opcionJugador)
    })
};

function sortear(min=0, max=3) {
var ramdon= Math.floor(Math.random()*(max-min)+min)
var opcionComputadora=['piedra','papel','tijera'];
return opcionComputadora[ramdon];
};

function obtenerResultado(opCom,opJug) {
    if(opCom=='tijera' && opJug=='papel'){
        final='PERDISTE'
    }else if(opCom=='tijera'&& opJug=='piedra'){
        final='GANASTE'
    }else if(opCom=='papel' && opJug=='tijera'){
        final='GANASTE'
    }else if(opCom=='papel' && opJug=='piedra'){
        final='PERDISTE'
    }else if(opCom=='piedra'&& opJug=='tijera'){
        final='PERDISTE'
    }else if(opCom=='piedra'&& opJug=='papel'){
        final='GANASTE'
    }else if(opCom==opJug){
        final ='EMPATASTE'
    }
    imprimirResultado(final);
return
}
    function star() {
        ponerTitulo('Piedra,Papel  ,Tijeras');

        configurarSeleccionJugador();

        configurarBotonJugar();

        imprimirResultado('Elegir opcion');
}
// ejecucion de la callback al cargar la estructura html
$(document).ready(star);