import { btnBorrar, btnHoverImg, cerrarContadorBtn, cerrarMenu, cerrarMenuBtn, contar, crearNotaBtn, devolverValorInput, expandirMenu, modificarTamañoFuente, mostrarMenu, mostrarNotas, toggleContadorBtn, ventanaEmergente } from "./botones.js";
import searchFilter from "./filtro_busquedas.js";
import { getData, uploadData, uploadOneElement } from "./ls.js";
import { borrarNota, cambiarTexto, cambiarTituloEditor, cambiarTituloVentanaEmergente, contarCaracteres, insertarValorTextarea, mostrarElemento, ocultarElemento, ocultarVentanaEmergente, volverAIndex } from "./otras_funciones.js";
import { crearNotasDom, crearObjeto, crearUltimaNotaDom, Nota } from "./POO.js";

const d = document,
claseNotas = Nota;

let titulo = "No hay título"

d.addEventListener("DOMContentLoaded", e => {
  
  cambiarTituloEditor(".campo-notas textarea", ".create", "h1", ".create img", "confirm.webp", cambiarTexto)
  ventanaEmergente(".create", ".elegirTitulo button", ".centrar", ".create img", "edit.webp", "confirm.webp")
  ocultarVentanaEmergente(".trash-can", ".centrar")
  searchFilter(".buscador", ".nota")
  crearNotaBtn(".create", ".index", ".campo-notas","edit.webp","confirm.webp")
  btnHoverImg(".create", "invert")
  btnHoverImg(".menu", "invert")
  btnHoverImg(".trash-can", "invert")
  btnHoverImg(".zoom-in", "invert")
  btnHoverImg(".zoom-out", "invert")
  btnHoverImg(".estadistic", "invert")
  cerrarContadorBtn(".contador button", ".contador")
  cerrarContadorBtn(".trash-can", ".contador")
  toggleContadorBtn(".estadistic", ".contador")
  contar(".estadistic", contarCaracteres, ".contador-caracteres", ".input-notas")
  mostrarNotas(getData, ".nota", ".index", ".campo-notas", ".create img", "confirm.webp", ".create", insertarValorTextarea, ".campo-notas textarea", cambiarTexto, "h1", uploadOneElement)
  btnBorrar(".trash-can", borrarNota, volverAIndex, "h1", getData, uploadOneElement, ".input-notas", ".elegirTitulo input", ".index", ".campo-notas", ".create img", "edit.webp", cambiarTexto)
  expandirMenu(".menu","menu-activo", ".menu-oculto", ".botones-menu")
  cerrarMenu(".menu-oculto", ".create", ".input-notas", "menu-activo", ".botones-menu")
  cerrarMenuBtn(".menu-oculto", ".trash-can", "menu-activo", ".botones-menu")
  mostrarMenu(".menu", ".menu-oculto",mostrarElemento, ocultarElemento, ".create img", "edit.webp", "confirm.webp")
  cambiarTituloVentanaEmergente(cambiarTexto, "h1", ".elegirTitulo input", ".elegirTitulo button")
  modificarTamañoFuente(".zoom-out", ".input-notas", true)
  modificarTamañoFuente(".zoom-in", ".input-notas", false)

  /*Código que no está en módulos uwun't */


  const $btnTitulo = d.querySelector(".elegirTitulo button"),
  $crearObjetoNotaBtn = d.querySelector(".create"),
  $crearObjetoNotaBtnImg = d.querySelector(".create img"),
  $inputTitulo = d.querySelector(".elegirTitulo input"),
  $titulo = d.querySelector("h1"),
  $notas = d.querySelectorAll(".nota"),
  $inputContenido = d.querySelector(".input-notas")
  
  let $contenidoNotas = d.querySelectorAll(".nota p")

  $btnTitulo.addEventListener("click", e => {
    titulo = devolverValorInput(".elegirTitulo input")
  })

  
  $crearObjetoNotaBtn.addEventListener("click", e => {
    
    if ($crearObjetoNotaBtnImg.getAttribute("src") == "edit.webp"){
      
      if($titulo.textContent.includes("Editando: ")){
        
        if(getData("index") >= getData("notas").length){
                uploadOneElement(0, "index")
              }

        let notasGuardadasEditando = getData("notas"),
        nuevaNota = notasGuardadasEditando[getData("index")]

        nuevaNota.content = $inputContenido.value

        const nuevoArreglo = []

        notasGuardadasEditando.forEach((el, index) => {
          (index == getData("index"))
          ? nuevoArreglo.push(nuevaNota)
          : nuevoArreglo.push(el)
        });

        uploadOneElement(nuevoArreglo, "notas")

        $contenidoNotas = d.querySelectorAll(".nota p")

        $contenidoNotas[getData("index")].textContent = `${nuevoArreglo[getData("index")].content.slice(0,80)}...` 

        //`${nota.content.slice(0,80)}...`
        
        $inputTitulo.value = ""
        $inputContenido.value = ""

        
      }

      else{

        
        if ($inputContenido.value == ""){
          alert("Debes ingresar algo")
        }
        else{
          uploadData(
            getData("notas"),
            crearObjeto(claseNotas, devolverValorInput(".elegirTitulo input"), devolverValorInput(".input-notas")), "notas")
            crearUltimaNotaDom(getData("notas"), "nota", ".notas")
            
            $inputTitulo.value = ""
            $inputContenido.value = ""
            
          }
        }
    }
  })

})

let notasGuardadas = getData("notas")

if (notasGuardadas.length === 0){
  uploadData([], crearObjeto(claseNotas, "Presioname uwun't", "Veo que es tu primera vez entrando, así que aquí va una pequeña explicación del funcionamiento de la página.\n\n 1. Crear una nota: Para crear una nota, debes hacer click en el lápiz que se encuentra en la esquina inferior derecha del menú de inicio. Luego de hacerlo, aparecerá una ventana en la que deberás ingresar un título. Este será el nombre con el que se guardará la nota. Después de ingresar el título y presionar el botón de aceptar, se mostrará un área de color blanco en la que escribirás tu texto. Al terminar, deberás presionar el botón de la esquina inferior derecha con un pulgar arriba para guardar la nota.\n\n2. Editar una nota: Para modificar el contenido textual de una nota, deberás hacer click sobre ésta misma. Luego de esto, serás enviado al mismo editor de texto que cuando creas la nota, aunque con la diferencia de que, en vez de estar vacío, contendrá la nota que habías guardado. Aquí es donde podrás modificar el contenido. Una vez que hayas terminado, puedes presionar el botón de la esquina inferior derecha y se guardará automáticamente.\n\n3. Borrar una nota: Para borrar una nota, únicamente hace falta ingresar a la nota, abrir el menú de opciones en la esquina inferior izquierda y presionar la caneca de basura.\n\n4. Aumentar/Disminuir tamaño de letra: Abre la nota, presiona el menú de opciones en la esquina inferior izquierda y presiona la lupa con el simbolo + para acercar y la lupa con el simbolo - para alejar.\n\n5. Contar palabras o caracteres: Abre la nota, presiona el menú de opciones en la esquina inferior izquierda y presiona el botón que contiene una gráfica circular. Al hacerlo, aparecerá una ventana emergente con la cantidad de palabras y caracteres") , "notas")
  uploadOneElement(0, "index")
}

crearNotasDom(getData("notas"), "nota", ".notas")