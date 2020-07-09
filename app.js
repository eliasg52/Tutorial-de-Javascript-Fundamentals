/* let amount = 10;

while (amount > 0) {
  console.log(`Yo tengo ${amount} dolares`);
  amount--;
}
 */

/* let money = 0;

do {
  console.log(`Vos tenes ${money} pesos`);
  money++;
} while (money < 10);
 */

/* let nombres = ['elias', 'joaquin', 'balboa'];
let apellido = 'garcia';
let newArray = [];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
  const nombreCompleto = `${nombres[i]} ${apellido}`;
  newArray.push(nombreCompleto);
}
console.log(newArray);
 */

/*  APLICANDO FUNCIONES EN ARRAYS Y OBJETOS

const gas = [20, 40, 100, 30];
const comida = [10, 41 , 50];

function calcularTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Estas gastando mucha plata!`);
    return total;
  } else {
    console.log(`Esta bien gastaste menos de 100`);
  }
  return total;
}

const gasTotal = calcularTotal(gas);
const comidaTotal = calcularTotal(comida);
const arrayRandomTotal = calcularTotal([100, 200, 300]);

console.log({
  gas: gasTotal,
  comida: comidaTotal,
  random: arrayRandomTotal,
}); */

// NULL Y UNDEFINED
/* 
let numero = 20 + null;
console.log(numero);

let numero2 = 20 + undefined;
console.log(numero2);
 */

// GLOBAL SCOPE

/* let name = 'bobo';
name = 'peter';
//  ESTO ES PERMITIDO YA QUE SE PUEDE CAMBIAR EL VALOR PERO SI PONGO:
// const name = 'jhon';
// ESTO ME TIRARIA ERROR XQ YA DEFINI UNA VARIABLE CON ESE NOMBRE

console.log(`mi nombre es ${name} y soy el mejor 😀`); */

/* const numeroGlobal = 5;

function sumar(num1, num2) {
  const resultado = num1 + num2 + numeroGlobal;
  return resultado;
}

console.log(sumar(3, 4)); */

// CALLBACK FUNCTIONS -- NO LAS ENTENDI REPASAR

/* function buenosDias(name) {
  const myName = 'Elias';
  console.log(`Buenos dias ${name}, mi nombre es ${myName}`);
}

buenosDias('Julieta'); */

// POWERFULL ARRAY METHODS: FOREACH, MAP, FILTER, FIND, REDUCE

// FORMA TRADICIONAL DE MOSTRAR TODOS LOS ELEMENTOS DE UN ARRAY
// const numbers = [0, 1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//FOREACH:

/* const gente = [
  { name: 'Elias', edad: 29, trabajo: 'programador' },
  { name: 'Joaquin', edad: 25, trabajo: 'vendedor' },
  { name: 'Balboa', edad: 20, trabajo: 'rrpp' },
];

function mostrarPersona(persona) {
  console.log(persona.trabajo.toUpperCase());
}

gente.forEach(mostrarPersona); //PRIMER CASO. DECLARANDO UNA FUNCION POR SEPARADO CON UN CALLBACK FUNCTION.

gente.forEach(function (persona) {
  console.log(persona.trabajo.toUpperCase()); //SEGUNDO CASO PASANDOLE UNA FUNCION ANONIMA DIRECTAMENTE
}); */

//LAS 2 REALIZAN LAS MISMAS TAREAS, HAY QUE ELEGIR LA QUE MAS ME GUSTE.

/* const numeros = [1, 2, 3, 4];

numeros.forEach(function (numero) {
  console.log(numero);
}); //MOSTRANDO UN ARRAY CON FOREACH.

 */

//MAP METHOD.

/* const gente = [
  { name: 'Elias', edad: 29, trabajo: 'programador' },
  { name: 'Joaquin', edad: 25, trabajo: 'vendedor' },
  { name: 'Balboa', edad: 20, trabajo: 'rrpp' },
];

const edades = gente.map(function (persona) {
  return persona.edad + 5; //DEVOLVIENDO UN ELEMENTO
});

const nuevaGente = gente.map(function (persona) {
  return {
    firstName: persona.name.toUpperCase(),
    viejaEdad: persona.edad + 20, //DEVOLVIENDO UN OBJETO
  };
});

console.log(edades);
console.log(nuevaGente); */

//FILTER METHOD

/* const gente = [
  { name: 'Elias', edad: 20, trabajo: 'programador' },
  { name: 'Joaquin', edad: 25, trabajo: 'vendedor' },
  { name: 'Balboa', edad: 30, trabajo: 'rrpp' },
  { name: 'Snake', edad: 35, trabajo: 'rrpp' },
];

const genteJoven = gente.filter(function (persona) {
  return persona.edad <= 25;
});

const programadores = gente.filter(function (persona) {
  return persona.trabajo === 'programador';
});

console.log(genteJoven);
console.log(programadores);
 */

//FIND METHOD

/* const gente = [
  { name: 'Elias', edad: 20, trabajo: 'programador', id: 1 },
  { name: 'Joaquin', edad: 25, trabajo: 'vendedor', id: 2 },
  { name: 'Balboa', edad: 30, trabajo: 'rrpp', id: 3 },
  { name: 'Snake', edad: 35, trabajo: 'rrpp', id: 4 },
];

const person = gente.find(function (persona) {
  //BUSCANDO EN EL OBJETO ATRAVES DE SU ID
  return persona.id === 3;
});

console.log(person); */

/* const nombres = ['elias', 'joaquin', 'garcia'];

console.log(
  nombres.find(function (nombre) {
    return nombre === 'garcia'; //BUSCANDO A TRAVES DEL ARRAY POR EL NOMBRE Y PONIENDO LA FUNCION DIRECTAMENTE EN EL LOG SIN GUARDARLA EN UNA VARIABLE
  })
); */

// REDUCE METHOD
/* 
const gente = [
  { name: 'Elias', edad: 20, trabajo: 'programador', id: 1, salario: 200 },
  { name: 'Joaquin', edad: 25, trabajo: 'vendedor', id: 2, salario: 300 },
  { name: 'Balboa', edad: 30, trabajo: 'rrpp', id: 3, salario: 500 },
  { name: 'Snake', edad: 35, trabajo: 'rrpp', id: 4, salario: 500 },
];

const total = gente.reduce(function (acc, currItem) {
  console.log(`total: ${acc}`);
  console.log(`plata actual: ${currItem.salario}`);
  acc += currItem.salario;
  return acc; //SIEMPRE SIEMPRE SIEMPRE SE RETORNA EL ACUMULADOR, SI NO SE REALIZA ESTO SE PROVOCARIAN BUGS.
}, 0); //EL 0 es para indicar que quiero que me retorne un numero. Si quiero un array pongo [], o un objeto {}. Es el valor inicial del 'acc'

console.log(`La suma de todos los salarios es de ${total}`);
 */

// OBJETO MATH

/* const numero = 16;
const result = Math.sqrt(numero);

console.log(result); */

/* const numero = 5.14;
const result = Math.floor(numero);

console.log(result);
 */

/* const numero = 16;
const result = Math.sqrt(numero);

console.log(result); */

/* const numeros = [4, 5, 6, 7, 8];
const resultado = Math.min(...numeros); //UTILIZANDO EL SPREAD OPERATOR '...' */

/* const resultado = Math.min(1, 2, 3, 4); //UTILIZANDO LOS VALORES DIRECTAMENTE
console.log(resultado); */

/* const resultado = Math.max(200, 300, 400, 500);
console.log(resultado); */

/* const result = Math.ceil(Math.random() * 10); //ESTA ES UNA FORMA DE QUE ME MUESTRE EL NRO 10 INCLUIDO YA QUE SI NO LE PASO EL CEIL SOLO ME MOSTRARIA HASTA EL 9
const result2 = Math.floor(Math.random() * 10 + 1); //ESTA SERIA OTRA FORMA UTILIZANDO EL FLOOR Y SUMANDOLE 1

console.log(result);
console.log(result2); */

//OBJETO DATE

/* const date = new Date();
console.log(date); //MUESTRA LA FECHA Y HORA ACTUAL DE MI PAIS

const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const mes = date.getMonth();
console.log(mes); //AL UTILIZAR ESTO ME MUESTRA EL NRO DEL MES EN EL QUE ESTAMOS Y NO EL MES EN SI. POR ESTO HAY QUE HACER REFERENCIA AL INDEX DE UNA VARIABLE PREVIAMENTE CREADA CON LOS MESES
console.log(meses[mes]); //ESTO ES IGUAL A meses[5]; ya que 5 es el es actual

const dia = date.getDay(); //ESTO TMB ME DEVUELVE UN INDEX, EN ESTE CASO 0 XQ ES DOMINGO. HAY QUE HACER REFERENCIA A UNA VARIABLE CON LOS DIAS
console.log(dia);

const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

console.log(dias[dia]);

const sentencia = `${dias[dia]}, ${date.getDate()} de ${
  meses[mes]
} del ${date.getFullYear()}`; //getDate me da el numero del mes, en este caso 28.

document.body.innerHTML = sentencia; //ESTO INTRODUCE LA FECHA CREADA EN EL BODY

const date2 = new Date('1/12/2000'); //PASANDOLE UNA FECHA ESTATICA
console.log(date2);
 */

//DOM

/* document.body.style.backgroundColor = 'pink';
document.body.style.color = 'blue'; //PASANDOLE ESTILOS DIRECTAMENTE A LOS ELEMENTOS.
document.getElementById('boton').style.backgroundColor = 'red'; */

/* const $boton = document.querySelector('button');
$boton.style.backgroundColor = 'green'; //GUARDANDO EL ELEMENTO HTML EN UNA VARIABLE Y LUEGO MANIPULARLO
console.log($boton);

const name = $boton.nodeName;
console.log(name); //ESTO MUESTRA EL NOMBRE DEL NODO

const css = $boton.style;
console.log(css); //ME MUESTRA LOS ESTILOS CSS DEL NODO */

//WINDOW OBJECT

/* console.dir(document); // ESTO ME MUESTRA TODOS LOS METODOS Y PROPIEDADES DEL OBJETO DOCUMENT */

//SELECCION DE LOS ELEMENTOS HTML PARA SU MANIPULACION

//POR ID

/* const $h1 = document.getElementById('titulo'); //ALMACENANDO EL ELEMENTO EN UNA VARIABLE POR ID
$h1.style.backgroundColor = 'red';

document.getElementById('boton').style.backgroundColor = 'yellow'; //PASANDOLE EL ESTILO DIRECTAMENTE SIN ALMACENARLA EN UNA VARIABLE

const $boton = document.getElementById('boton'); //GUARDANDO EL ELEMENTO EN UNA VARIABLE Y LUEGO MODIFICANDOLO. ESTO ES MAS RECOMENDABLE QUE PASAR LOS ESTILOS DIRECTAMENTE
$boton.style.color = 'green'; */

//POR TAGNAME

/* const $headings = document.getElementsByTagName('h2');

console.log($headings); //ESTO DEVUELVE UN NODE-LIST EL CUAL ES COMO UN OBJETO ARRAY. */

//PUEDO USAR LAS PROPIEDADES INDEX Y LENGHT PERO NO METODOS DE ARRAY.

/* $headings[0].style.color = 'red';
console.log($headings.length); //ESTO ES UN NODO CON LOS 'li' dentro.
const $nodoItems = document.getElementsByTagName('li');
$nodoItems[2].style.color = 'orange'; //LE DOY COLOR AL ITEM DEL NODO CON LA PROPIEDAD STYLE.
console.log($nodoItems);

const $arrayItems = [...$nodoItems]; //CON ESTA LINEA TRANSFORMO EL NODO EN UN ARRAY
console.log($arrayItems);

//POR CLASSNAME

const $itemsConClase = document.getElementsByClassName('special');
console.log($itemsConClase);
$itemsConClase[2].style.color = 'blue'; */

//POR QUERYSELECTOR

/* const $result = document.querySelector('#result');
$result.style.backgroundColor = 'magenta';

const item = document.querySelector('.special'); //ESTO ME TRAE EL PRIMER 'li' CON LA CLASE SPECIAL
console.log(item); */

/* const $items = document.querySelectorAll('.special'); //TRAIGO TODOS LOS LI CON CLASE 'special'
console.log($items); //USAR METODOS DE ARRAY SIN LA NECESIDAD DE TRANSFORMALO. CASO CONTRARIO CON CLASSNAME,TAGNAME E IDNAME

const $itemsEnArray = [...$items]; //CONVIERTO EL NODO $ITEMS, EN UN ARRAY. PERO CON QUERYSELECTOR NO HACE FALTA YA QUE PUEDO 
console.log($itemsEnArray);

$items.forEach(function (item) {
  //PASANDOLE UN METODO DE ARRAY AL NODO $ITEMS. LO PUEDO HACER XQ TARGETEE EL ELEMENTO CON QUERYSELECTOR
  console.log(item);
}); */

//CHILDNODES

/* const $lista = document.querySelector('#result2');
console.log($lista); */

/* const result = document.querySelector('#result2');
const children = result.children; //DE ESTA FORMA TRAIGO LOS ELEMENTOS DE LA LISTA.
console.log(children);
 */

//PARENTELEMENT

/* const header = document.querySelector('h2');
console.log(header.parentElement); //ESTO ME MUESTRA EL ELEMENTO PADRE.
console.log(header.parentElement.parentElement.parentElement);
//PUEDO APLICARLO MUCHAS VECES PARA IR ESCALANDO EN LOS PADRES. HASTA LLEGAR AL <html> QUE ES EL ULTIMO. DESPUES DE ESTO DEVOLVERIA NULL
const elementoPadre = header.parentElement;
elementoPadre.style.color = 'red'; */

//SIBLING

/* const primerItem = document.querySelector('.primero');
// const segundo = primero.nextSibling;
//AL HACER ESTO ME VA A DEVOLVER UN ESPACIO VACIO. POR LO QUE HAY QUE HACERLO 2 VECES PARA LLEGAR AL SEGUNDO ITEM
const segundoItem = primerItem.nextSibling.nextSibling;
//ESTO ME RETORNA EL ITEM 2. PUDE TARJETEARLO AUNQUE NO TENIA UN ID, APARTIR DEL ID DEL PRIMER ELEMENTO

const ultimoItem = document.querySelector('.ultimo');

const tercerItem = (ultimoItem.previousSibling.previousSibling.style.color =
  'red');
//DE ESTA FORMA TARJETO EL TERCER ITEM APARTIR DEL ULTIMO QUE TENIA ID.
console.log(tercerItem);

//!!EXISTE UNA MANERA MAS FACIL DE REALIZAR ESTO SIN QUE ME RETORNE UN ESPACIO EN BLANCO
//ESTA FORMA ES USANDO previousElementSibling y nextElementSibling.

// const segundoItem = primerItem.previousElementSibling;  */

//NODE VALUE Y TEXT CONTENT

/* const item = document.getElementById('special');
const valorDelItem = item.firstChild.nodeValue;
console.log(valorDelItem);

const valorDelItemMasFacil = item.textContent; //ESTO ES LO MISMO QUE EL PRIMER 'VALORDELITEM 'PERO DE UNA MANERA MAS FACIL
//YA QUE USANDO NODEVALUE HAY QUE AGREGAR MAS PROPIEDADES COMO FIRSTCHILD
console.log(valorDelItemMasFacil);
 */

//GET ATTRIBUTE Y SET ATTRIBUTE

/* const primero = document.querySelector('.primero');
const valorClass = primero.getAttribute('class'); //TRAIGO EL VALOR DEL ATRIBUTO CLASE DEL ELEMENTO HTML
primero.setAttribute('id', 'asd'); //AGREGO ATRIBUTOS CON SET ATTRIBUTE Y LE PASO EL VALOR DE 'asd'
console.log(valorClass);

const link = document.getElementById('link');
const mostrarLink = link.getAttribute('href'); //MUESTRO EL VALOR DE HREF
console.log(mostrarLink);

const ultimoLi = link.nextElementSibling;
const darAtributo = ultimoLi.setAttribute('class', 'primero'); //LE DOY UN ATRIBUTO AL ULTIMO LI Y LE CAMBIO EL VALOR AL TEXTO DE FORMA DINAMICA
ultimoLi.textContent = 'AHORA YO TMB TENGO COMO ATRIBUTO CLASS PRIMERO!';

const links = document.querySelectorAll('.primero'); //AHORA TENGO 2 ELEMENTOS CON CLASE PRIMERO XQ AGREGUE LA CLASS AL ULTIMO LI
console.log(links); */

//AGREGANDO ESTILOS CSS DE FORMA DINAMICA CON JS

/* const primerItem = document.getElementById('primero');
const segundoItem = document.getElementById('segundo');
const tercerItem = document.getElementById('tercero');

const valorDeClase = primerItem.className; //CHEQUEO EL VALOR DE CLASS DEL PRIMER ITEM
console.log(valorDeClase);

segundoItem.className = 'colors'; //CON CLASSNAME TAMBIEN PUEDO CAMBIAR EL VALOR AL QUE QUIERA DE ESTA FORMA
//SI QUIERO AGREGAR UNA SEGUNDA CLASE A UN ELEMENTO, HACERLO DE ESTA FORMA NO ES UNA OPCION YA QUE LA SOBREESCRIBIRIA Y NO LA AGREGARIA
//PARA AGREGAR CLASES SE USA CLASSLIST.

segundoItem.className = 'colors text';
//UNA FORMA DE AGREGAR OTRA CLASE ES ESTA, PERO NO ES RECOMENDABLE YA QUE SI DSP QUIERO AGREGAR MAS SE VAN A SOBREESCRIBIR

//tercerItem.classList.add('colors'); //ESTA ES LA FORMA RECOMENDABLE DE AGREGAR OTRA CLASE
//tercerItem.classList.add('text'); //AGREGO OTRA CLASE CON CLASSLIST 
tercerItem.classList.add('colors', 'text'); //OTRA FORMA DE AGREGAR VARIAS CLASES DE UNA VEZ Y NO 1 POR 1
tercerItem.classList.remove('text'); //CON EL REMOVE SACAMOS CLASES
const classTercerItem = tercerItem.classList; //ALMACENO LA CLASE DEL TERCER ITEM EN UNA VARIABLE DSP DE AGREGARLE LA CLASE 'colors'
console.log(classTercerItem); //MUESTRO LA CLASE DEL TERCER ITEM

let result = tercerItem.classList.contains('colors'); //LO QUE HACE CONTAIN ES CHEQUEAR SI EL TERCER ITEM TIENE UNA CLASE CON EL NOMBRE 'COLORS'
if (result) {
  //SI EL RESULTADO ES TRUE SE EJECUTA ESTO, SINO EL ELSE.
  console.log(`EL ELEMENTO TIENE/CONTIENE LA CLASE 'COLORS'`);
} else {
  console.log(`EL ELEMENTO NO TIENE LA CLASE 'COLORS'`);
} */

//CREATE ELEMENT, CREATETEXTNODE, ELEMENT.APPENDCHILD

/* const resultado = document.querySelector('#result');

//CREAR UN ELEMENTO VACIO

const bodyDiv = document.createElement('div');

//CREAR UN TEXT NODE

const texto = document.createTextNode('BODY CREADO DE FORMA DINAMICA');

//INTRODUZCO EL TEXTO CREADO EN EL DIV VACIO CREADO (CHILD)

bodyDiv.appendChild(texto); //CON APPENDCHILD METO EL TEXTO DENTRO DEL DIV VACIO.
//console.log(bodyDiv); //MUESTRO QUE SE HAYA REALIZADO CORRECTAMENTE.

//AGREGO EL DIV CON EL TEXTO AL BODY PRINCIPAL

document.body.appendChild(bodyDiv);

//CHEQUEO CUANTOS HIJOS TIENE RESULT

console.log(resultado.children); //POR AHORA TIENE UNO SOLO PERO VAMOS A AGREGARLO OTRO */

//**CREAR UN H2 AGREGARLE TEXTO Y AGREGARLO AL BODY PRINCIPAL

/* const resultado = document.querySelector('#result');

const heading2 = document.createElement('h2');
//creo el h2

const texto2 = document.createTextNode('H2 dinamico creado con JS :D');
//creo el texto del h2

heading2.appendChild(texto2);
//agrego como hijo el texto al h2

heading2.classList.add('blue');
//le agrego la clase 'blue'

resultado.appendChild(heading2);
//agrego el h2 creado como hijo(child) al div!

//REMOVECHILD
//REEMPLAZAR EL H2 CON UN H6

const headingChico = document.createElement('h6');
//creo el h6

const textoh6 = document.createTextNode('Soy un H6 dinamico');
//creo el texto del h6

headingChico.classList.add('red');
//le agrego una clase al h6 creado

headingChico.appendChild(textoh6);
//meto el texto creado dentro del h6 creado

resultado.replaceChild(headingChico, heading2);
//reemplazo el h2 con el h6 */

//PREPEND , INNERTEXT

//INSRETAR UN H2

/* const heading2 = document.createElement('h2');
//creo el h2

heading2.innerText = 'Soy un heading dinamico!';
//le introduzco el texto de h2

document.body.prepend(heading2);
//introduzco el h2 con el metodo prepend. */

//REMOVE, REMOVECHILD

/* const resultado = document.querySelector('#resultado');
//tarjeteo el elemento

// resultado.remove();
//elimino el segundo h1 de forma dinamica

const heading2 = resultado.querySelector('h1');
//PONGO RESULTADO EN VEZ DE DOCUMENT PARA TARJETEAR DIRECTAMENTE EL H1 QUE SE ENCUENTRA AHI DENTRO

resultado.removeChild(heading2);
//elimino el segundo h1 de forma dinamica tmb pero especificando el Child
//EN EL PRIMER CASO (linea 553) SACO TODO EL DIV ENTERO. EN CAMBIO CON EL REMOVECHILD SOLO SACO EL HEADING */

//INNERHTML, TEXTCONTENT

/* const lista = document.getElementById('primero');
const div = document.getElementById('segundo');
const item = document.querySelector('.item');

console.log(item.textContent);
//Muestra el texto dentro de la variable item

console.log(lista.innerHTML);
//me muestra todo el contenido de la lista incluidos los tags

const listaDesordenada = document.createElement('ul');
//creo una lista desordenada

listaDesordenada.innerHTML = `<li class="item">Item de lista dinamico</li>
      <li>Item de lista dinamico</li>`;
//CREO LOS LI CON INNERHTML Y ME AHORRO MUCHOS PASOS SI LO CREABA DE OTRA FORMA COMO LAS VISTAS ANTERIORMENTE.
//YA QUE CREO TODO DIRECTAMENTE Y NO TENGO QUE CREAR VARIAS VARIABLES

document.body.appendChild(listaDesordenada);
//AGREGO LA UL CREADA AL BODY

div.textContent = 'TEXTO RANDOM DEL DIV';
//CAMBIO EL VALOR DEL CONTENIDO DEL TEXTO DEL DIC CON TEXTCONTENT */

//CAMBIANDO CSS CON LA PROPIEDAD STYLE

/* const random = document.querySelector('.random');

// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.textTransform = 'capitalize';
// random.style.fontSize = '3rem';
//DE ESTA FORMA LE PASO ESTILOS CSS PERO NO ES PRACTICO YA QUE TENGO QUE PASARLE UNA POR UNA.
//HAY UNA FORMA MAS RAPIDO DE HACERLO Y ESA ES PASARLE LA CLASE PREVIAMENTE CREADA EN CSS

random.classList.add('titulo');
//DE ESTA FORMA UTILIZO SOLO UNA LINEA, Y SEPARO EL CSS DEL CODIGO JS */

//EVENTOS

/* const boton = document.querySelector('.btn');
//selecciono el elemento a ponerle un evento

const heading = document.querySelector('h2');
//selecciono el elemento al cual afectar cuando suceda el evento

// boton.addEventListener('click', function () {
  //heading.classList.add('red');
//}); 
//le paso al elemento el 'escuchador de eventos'. Le paso como argumento el evento. en este caso cuando hagan click
//y le paso como segundo argumento una callback function que solo quiero que se ejecute cuando se realiza esta accion

//EVENTO CON LOGICA Y FUNCION SEPARADA

function cambiarColor() {
  let tieneClase = heading.classList.contains('red');
  if (tieneClase) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
}
boton.addEventListener('click', cambiarColor); */

//EVENTOS DE MOUSE

/* const boton = document.querySelector('.btn');
const heading2 = document.querySelector('h2');

boton.addEventListener('click', function () {
  console.log('me tocasteee');
});

boton.addEventListener('mousedown', function () {
  console.log('click presionado');
});

boton.addEventListener('mouseup', function () {
  console.log('click soltado');
});

heading2.addEventListener('mouseenter', function () {
  heading2.classList.add('red');
});

heading2.addEventListener('mouseleave', function () {
  heading2.classList.remove('red');
}); */

//EVENTOS DE TECLADO(KEY)

/* const nombreInput = document.querySelector('#nombre');

// nombreInput.addEventListener('keypress', function () {
//   console.log('apretaste una tecla');
// });

// nombreInput.addEventListener('keydown', function () {
//   console.log('apretaste una tecla');
// });

nombreInput.addEventListener('keyup', function () {
  console.log(nombreInput.value);
});
//ME MUESTRA CUAL TECLA PRESIONE!! */

//OBJETO EVENTO

/* const heading = document.querySelector('h1');
const boton = document.querySelector('.btn');
const link = document.getElementById('link');

// heading.addEventListener('click', function () {
//   heading.classList.add('blue');
// });
//AGREGANDOLE CLASE ESPECIFICANDO EL ELEMENTO

heading.addEventListener('click', function (event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});
//AGREGANDOLE CLASE SIN ESPECIFICAR EL ELEMENTO. CON EL METODO CURRENT TARGET Y PASANDO COMO ARGUMENTO LA PALABRA 'event'
//CURRENTTARGET SIEMPRE VA A APUNTAR AL ELEMENTO QUE ESTA ADJUNTO

function algunaFuncion(e) {
  e.preventDefault();
  console.log(e.type);
}
//CREO LA FUNCION POR SEPARADO PARA PASARLA COMO REFERENCIA EN EL LISTENER.//

link.addEventListener('click', algunaFuncion); */

//CURRENT TARGET Y TARGET

/* const botones = document.querySelectorAll('.btn');
//selecciono todos los botones

botones.forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    console.log(e.currentTarget);
    e.currentTarget.style.color = 'green';
  });
});

//UTILIZO EL METODO FOREACH PARA SELECCIONAR A CADA BOTON
//LUEGO SETEO EL LISTENER PARA CADA BOTON
//LE PASO COMO ARGUNMENTOS EL EVENTO Y LA FUNCION ANONIMA CON ARGUMENTO DE 'E'
//LE DIGO QUE LE DE COLOR VERDE AL BOTON PRESIONADO

//LA DIFERENCIA CON TARGET ES QUE ESTE, SI HAY ELEMENTOS ANIDADOS, ME VA A MOSTRAR EL ELEMENTO EN EL QUE TOQUE Y NO TODO EL
//ELEMENTO QUE ESTA VINCULADO AL LISTENER COMO HACE CURRENT TARGET. EJ:

// botones.forEach(function (boton) {
//   boton.addEventListener('click', function (e) {
//     console.log(e.target);
//     e.target.style.color = 'green';
//   });
// }); */

//EVENT BUBBLING, CAPTURING, PROPAGATION

/* const contenedor = document.querySelector('.contenedor');
const lista = document.querySelector('.lista-items');
//tarjeteo la lista y el contenedor

function mostrarBubbling(event) {
  console.log('current target', event.currentTarget);
  console.log('target', event.target);
  if (event.target.classList.contains('link')) {
    console.log('clickeaste en un link');
  }
  //veo si el usuario clickeo en el target que contiene la palabra 'link'
}
//creo una funcion para mostar los target y current target

function detenerPropagacion(event) {
  console.log('clickeaste en una lista pero se paro la propagacion');
  event.stopPropagation();
}

//lista.addEventListener('click', mostrarBubbling);
lista.addEventListener('click', detenerPropagacion); */

//EJEMPLO DE EVENT PROPAGATION

/* const contenedor = document.querySelector('.container');
// const header = document.querySelector('.heading');
const boton = document.querySelector('.btn');

function decirHola() {
  console.log('Hola Usuario!');
}

// header.addEventListener('click', decirHola);

boton.addEventListener('click', function () {
  const elementoNuevo = document.createElement('h1');
  elementoNuevo.classList.add('heading');
  elementoNuevo.textContent = 'Yo tambien estoy adentro del contenedor';
  contenedor.appendChild(elementoNuevo);
});

//SI COMENTO EL H1 DEL HTML, ESTO ME VA A DAR UN ERROR YA QUE EL EVENT LISTENER NO PUEDE HACER UN EVENTO DE UN ELMENTO QUE NO EXISTE
//LO QUE SE PUEDE HACER ES SELECCIONAR EL ELEMENTO PADRE Y AGREGAR EL EVENT AL MISMO

contenedor.addEventListener('click', function (evento) {
  if (event.target.classList.contains('heading')) {
    decirHola();
  }
});

//AGREGO EL HEADING DE FORMA DINAMICA Y LUEGO PUEDO AGREGAR AL EVENTLISTENER
 */

//FORM SUBMIT

/* const formulario = document.querySelector('#form');
const nombre = document.querySelector('#nombre');
const contrasenia = document.querySelector('#password');

formulario.addEventListener('submit', function (evento) {
  //AL FORM GENERALMENTE SE LE PONE DE ACCION EL SUBMIT, QUE SERIA CUANDO SE ENVIA LA INFORMACION ATRAVES DEL BOTON
  evento.preventDefault(); //AL AGREGAR ESTO EVITO QUE SE REFRESQUE LA PAGINA
  console.log('submit enviado');
  console.log(nombre.value); //MUESTRO EL NOMBRE PUESTO EN EL FORM
  console.log(contrasenia.value); //MUESTRO LA CONTRASENIA PUESTA EN EL FORM
});
//AL PONER ESTO PUEDO VER POR UN MOMENTO EL TEXTO DE 'SUBMIT ENVIADO' PERO DESAPARECE YA QUE SE REFRESCA LA PAGINA */

//WEB STORAGE API, LOCAL STORAGE, SESSION STORAGE

/* localStorage.setItem('nombre', 'Elias');
localStorage.setItem('trabajo', 'programador');
localStorage.setItem('direccion', 'arroyo cordero 1906');

const trabajo = localStorage.getItem('trabajo');
console.log(trabajo);

localStorage.removeItem('direccion');

localStorage.clear(); */

//EJEMPLO DE LOCAL STORAGE MAS COMPLEJO

const amigos = ['ari', 'sebi', 'tincho'];

//localStorage.setItem('amigos', amigos); //ESTO NO ME DEVOLVERIA LOS VALORES DEL ARRAYA SI QUISIERA ACCEDER A ELLOS
localStorage.setItem('amigos', JSON.stringify(amigos)); //CON ESTO PUEDO MANTENER EL ARRAY SIN ROMPERLO

//const valores = localStorage.getItem('amigos'); //CON ESTO NO ME DEVOLVERIA EL VALOR DEL ARRAY
const valores = JSON.parse(localStorage.getItem('amigos')); //USO EL JSON.PARSE PARA MANTENER EL ARRAY

console.log(valores[1]);

//VALIDACION SI EXISTE UN ITEM EN LOCAL STORAGE

let frutas;

if (localStorage.getItem('frutas')) {
  frutas = JSON.parse(localStorage.getItem('frutas'));
} else {
  frutas = [];
}

console.log(frutas);
// frutas.push('manzana');
frutas.push('naranja');

localStorage.setItem('frutas', JSON.stringify(frutas));

//FUNCIONAMIENTO: Primero creo una variable vacia con nombre de frutas. Despues valida (si en el local storage hay un item con el nombre 'frutas')
//Si esto es true: entonces la variable frutas es igual a el item que este guardado en la variable
//si es false: entonces crea un array vacio en la variable frutas
//dsp hago un console.log y me muestra un array vacio ya que la condicion va al else y crea un array vacio/
//dsp agrego un valor al array vacio con el metodo push.
//dsp creo un item de local storage con el setItem
//ahora al momento de hacer log me va a mostrar que la variable frutas contiene el valor manzana.
//si comento la linea del push, el valor va a seguir manteniendose en el local storage ya que queda guardado
//si agrego mas valores, estos se van a agregar al item manzana
//y al momento de refrescar la pagina me va a mostrar los items de manzana y los agregados dsp tmb

//FINAL DEL CURSO JAVASCRIPT FUNDAMENTALS DE CODING ADDICT
