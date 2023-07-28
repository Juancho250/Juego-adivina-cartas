document.addEventListener("DOMContentLoaded", function(){
    //Variables del juego
    let imagenes=[
        {
            "nombre":"Pikachu-naruto-vestido","url":"img/Pichachu-naruto-vestido.jpeg"
        },
        {
            "nombre":"Pikachu-banda-naruto", "url":"img/Pikachu-banda-naruto.jpeg"
        },
        {
            "nombre":"Pikachu-basico", 
            "url":"img/Pikachu-basico.png"
        },
        {
            "nombre":"Pikachu-fondo-azul", 
            "url":"img/Pikachu-fondo-azul.jpeg"
        },
        {
            "nombre":"Pikachu-robot", 
            "url":"img/Pikachu-robot.jpeg"
        },
        {
            "nombre":"Pikachu-Urbano", 
            "url":"img/Pikachu-Urbano.jpeg"
        },
        {
            "nombre":"Pikachu-naruto-vestido","url":"img/Pichachu-naruto-vestido.jpeg"
        },
        {
            "nombre":"Pikachu-banda-naruto", "url":"img/Pikachu-banda-naruto.jpeg"
        },
        {
            "nombre":"Pikachu-basico", 
            "url":"img/Pikachu-basico.png"
        },
        {
            "nombre":"Pikachu-fondo-azul", 
            "url":"img/Pikachu-fondo-azul.jpeg"
        },
        {
            "nombre":"Pikachu-robot", 
            "url":"img/Pikachu-robot.jpeg"
        },
        {
            "nombre":"Pikachu-Urbano", 
            "url":"img/Pikachu-Urbano.jpeg"
        }
    ]
    //Crear una variable que seleccione el tablero
    let tablero= document.querySelector(".tablero");
    //Crear una variable para guardar la cantidad de imagenes
    let numeroImg=[];
    //Crear una variable para guardar los nombres de las imagenes
    let nombreImg=[];
    //Crear variables para las estadisticas
    let aciertos=0;
    let intentos=0;
    let mostrarAciertos=document.querySelector(".aciertos");
    let mostrarIntentos=document.querySelector(".intentos");
    let tiempo=40;
    let mostrarTiempo=document.querySelector(".tiempo");
    let nivel=1;
    let mostrarNiveles=document.querySelector(".nivel");
    let botonIniciar=document.querySelector(".iniciar");
    let registroTiempo;
    //Poner las imagenes aleatorias
    imagenes.sort(function() { return Math.random() - 0.5})
    //sort ordena los elementos de un arreglo local y devuelve este arreglo ordenado, quiere decir que ordena las filas de una matriz segun los valores de una o mas columnas

    //Al boton le vamos dar la funcion para iniciar el juego
    botonIniciar.addEventListener("click",function()
    {
      //alert("Probando la funcionalidad del boton")
    
      //Mostrar las cartas
      AgregarImagenes();//Esta funcion la creamos mas adelante, para que muestre las cartas del juego

      //Tiempo regresivo
        mostrarNiveles.textContent=nivel;
        //setInterval() ejecuta una funcion una cantidad de veces una y otra vez, donde podemos establecer el tiempo de ejecución, asi se retarda el tiempo en la que son ejecutadas las funciones
        registroTiempo=setInterval(function()
        {
            tiempo--;
            mostrarTiempo.textContent=tiempo;
            if(tiempo==0)
            {
                alert("Tiempo agotado, Intententalo de nuevo");
                location.reload();
                //location.reload(); recarga la pagina actual
            }
        },1000) //1000 hacen referencia a milisegundos: 1s

    });
    //Funcion para agregar las imagenes al tablero
    let AgregarImagenes=()=>
    {
        for(var x=0;x<imagenes.length;x++)
        {
            //Crear la etiqueta div con sus clases
            let div=document.createElement("div");
            //a esta div crear le vamos a enviar unos atributos
            div.setAttribute("class","col-lg-3 col-md-4 col-3");
            //createElement:<div>
            //setAttribute: <div class='col-lg-3 col-md-4 col-3'>
            //<nombreetiqueta atributo='valor'>
            
            //Crear la etiqueta de la imagen
            let img=document.createElement("img");
            //createElement:<img>
            //La img le vamos a enviar unos atributos:
            img.setAttribute("src","img/ocultal.png"); 
            img.setAttribute("class","img-fluid img-thumbnail");

            //Agregar un id a cada imagen
            img.setAttribute("id",x);
            //Agregar el evento a cada imagen
            img.addEventListener("click",mostrarImagen);
            //Agregar las imagemes en los div
            div.appendChild(img);
            //Agregar div con las imagenes al tablero
            tablero.appendChild(div);
            //appendChild es uno de los metodos mas fundamentales en el DOM, ya que este inserta un nuevo nodo dentro de la estructura del DOM, con este metodo podemos crear y añadir elementos para cosntruir una pagina web directamente desde JS
        }
    }
    function mostrarImagen()
    {
        /* alert("Le dimos clic a la imagen"); */
        let imgID=this.getAttribute("id");
        
        this.setAttribute('src', imagenes[imgID].url);

        //Guardar los nombres y los numeros de las imagenes
        nombreImg.push(imagenes[imgID].nombre);
        numeroImg.push(imgID);
        //push anade uno o mas elementos al array

        //COmparar las imagenes despues que de clic 2 veces
        if(nombreImg.length==2)
        {
            setTimeout(compararImagenes, 500);
        }
        //setTimeout establece un temporizador en milisegundos para ejecutar una funcion callback al finalizar dicho temporizador

    }
    //funcion quitar imagenes
    function quitarImagenes(){
        let imagenesActuales= document.querySelector(".tablero div")
        for(let index=0; index<imagenesActuales.length; index++)
        {
            imagenesActuales[index].remove();
        }
    }
    //Funcion para comparar imagenes seleccionadas
    function compararImagenes()
    {
        //Guaradar imagenes actuales
        let imagenesActuales=document.querySelectorAll(".tablero div img");
        //Guardar imagenes 1 y la imagen 2
        let opcionuno=nombreImg[0];
        let opciondos=nombreImg[1];

        //Compara imagenes escogiones
        if(opcionuno === opciondos)
        {
            if(numeroImg[0] !== numeroImg[1])
            {
                imagenesActuales[numeroImg[0]].setAttribute('src','img/listo.png');
                imagenesActuales[numeroImg[1]].setAttribute('src','img/listo.png');

                imagenesActuales[numeroImg[0]].removeAttribute("click", mostrarImagen);
                imagenesActuales[numeroImg[1]].removeAttribute("click", mostrarImagen);

                aciertos++;
                mostrarAciertos.textContent=aciertos;
            }
            else
            {
                alert("Debes escoger otra imagen");
                imagenesActuales[numeroImg[0]].setAttribute("src", "img/ocultal.png");
                imagenesActuales[numeroImg[1]].setAttribute("src", "img/ocultal.png");
            }
        }
        else
        {
                imagenesActuales[numeroImg[0]].setAttribute("src", "img/ocultal.png");
                imagenesActuales[numeroImg[1]].setAttribute("src", "img/ocultal.png");
        }
        intentos++;
        mostrarIntentos.textContent=intentos;
        numeroImg=[];
        nombreImg=[];
    }

}

)