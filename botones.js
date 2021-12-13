const d = document

export function crearNotaBtn(btn, desaparecer, aparecer, img1, img2) {

  /*Esta función controla el botón de crear y confirmar notas*/

  const d = document,
  $btn = d.querySelector(btn),
  $desaparecer = d.querySelector(desaparecer),
  $aparecer = d.querySelector(aparecer),
  $btnImg = d.querySelector(`${btn} img`)

  let $inputContenido = d.querySelector(".input-notas")

  $btn.addEventListener("click", e => {

      if($btnImg.getAttribute("src") == img1){ // Si la imagen presionada es la de crear la nota, desaparecerá el index, aparecerá el editor y cambiará la imagen por la de confirmar

      $desaparecer.classList.add("invisible")
      setTimeout(() => {
        $desaparecer.classList.add("none")
        $aparecer.classList.remove("none")
        setTimeout(() => {
          $aparecer.classList.remove("invisible")
        }, 300);
      }, 300);
      $btnImg.setAttribute("src", img2)
    }

    else{

      // Si la imagen presionada es la de confirmar, se validará que el campo de texto del editor tenga texto. Si no lo tiene, no dejará seguir, y si lo tiene, cambiará la imágen, desaparecerá el editor y nuevamente mostrará el index

      if ($inputContenido.value != ""){
        $aparecer.classList.add("invisible")
      setTimeout(() => {
        $aparecer.classList.add("none")
        $desaparecer.classList.remove("none")
        setTimeout(() => {
          $desaparecer.classList.remove("invisible")
        }, 300); // Uso el setTimeOut porque la clase tiene una transición de 0.3 segundos (o 300 milisegundos)
      }, 300);
      $btnImg.setAttribute("src", img1)
    }
    }
    })


}

export function btnHoverImg(btn, filter) {

  // Esta función agregará un filtro a una imagen mientras el cursor esté sobre un elemento

  const d = document,
   $btn = d.querySelector(btn),
  $img = d.querySelector(`${btn} img`)

  $btn.addEventListener("mouseover", e => {
    $img.classList.add(filter)
  })
  $btn.addEventListener("mouseout", e => {
    $img.classList.remove(filter)
  })

}

export function expandirMenu(btn, clase, menu, elementos) {

  // Esta función agrega o quita una clase a un elemento al presionar un botón. En este caso, la uso para expandir o disminuir el área de menú al presionar el botón

  const d = document,
  $btn = d.querySelector(btn),
  $elementos = d.querySelector(elementos),
  $menu = d.querySelector(menu)
  
  $btn.addEventListener("click", e => {
    
    $menu.classList.toggle(clase)
    $menu.classList.toggle("invisible");

    (!$menu.classList.contains("invisible"))
    ? setTimeout(() => {
      $elementos.classList.remove("invisible")
    }, 300)
    : $elementos.classList.add("invisible")
  })
}

export function mostrarMenu(menu, menuOculto, functionAppear, functionDisappear, btnImg, editImg) {

  // Esta función, cada que se realiza click en el documento, comprueba la imagen del botón usado para crear y confirmar. Si la imagen es la de confirmar, el menú aparecerá. Si es la de crear, desaparecerá

  const $btnImg = d.querySelector(btnImg)

  d.addEventListener("click", e => {
    if ($btnImg.getAttribute("src") !== editImg) functionAppear(menu)
    if ($btnImg.getAttribute("src") !== editImg) functionAppear(menuOculto)
    else{
      functionDisappear(menu)
      functionDisappear(menuOculto)
    } 
      
  })
}

export function ventanaEmergente(btnAppear, btnDisappear, window, img, imgEdit) {

  // Esta función hace que, luego de presionar el botón de crear/confirmar, si la imágen es la de editar, aparezca la ventana emergente para poner un título (ya que significaría que se va a crear una nueva nota). También permite que, al presionar el botón de aceptar (siempre y cuando haya contenido en el input de confirmar), desaparezca la ventana

  const d = document,
  $btnAppear = d.querySelector(btnAppear),  
  $btnDisappear = d.querySelector(btnDisappear),  
  $img = d.querySelector(img),  
  $window = d.querySelector(window)

  $btnAppear.addEventListener("click", e => {
    if($img.getAttribute("src") == imgEdit){
      $window.classList.remove("none")
        setTimeout(() => {
          $window.classList.remove("invisible")
        }, 300);
    }
  })

  $btnDisappear.addEventListener("click", e => {
    if (d.querySelector(`${window} input`).value != "") { // Aquí se confirma que el input tenga contenido. Si no lo tuviese, se crearía una nota sin título, lo cual no es lo ideal
      $window.classList.add("invisible")
      setTimeout(() => {
        $window.classList.add("none")
      }, 300);
    }
  })
}

export function devolverValorInput(input) {
  const $input = document.querySelector(input)
  return $input.value
} 

export function mostrarNotas(funcionObtenerNotas, selector, desaparecer, aparecer, btnImg, img, btn, funcion, textarea, funcionCambiarTitulo, titulo, funcionSubirDatos) {

  // Esta función permite que, al presionar una nota, se muestre el contenido en el editor (ya sea para visualizar o para modificar)

  let $notas = d.querySelectorAll(selector),
  notasGuardadas = funcionObtenerNotas("notas"),
  $desaparecer = d.querySelector(desaparecer),
  $aparecer = d.querySelector(aparecer),
  $btn = d.querySelector(btn),
  $btnImg = d.querySelector(btnImg)

   $notas.forEach((nota, index) => {
    nota.addEventListener("click", e => { // Aquí se añade el evento a cada nota para que, al ser presionadas, se muestren

      if(index >= funcionObtenerNotas("notas").length){
            index = funcionObtenerNotas("notas").length - 1
          }

      funcion(textarea, notasGuardadas[index].content) // Aquí se añade el contenido de la nota en el área de edición
      funcionCambiarTitulo(titulo, `Editando: ${notasGuardadas[index].title}`) // Aquí se modifica el título de la página y se pone "Editando: {nombre de la nota}"
      $desaparecer.classList.add("invisible") // Aquí se desaparece el index y se abre el editor
      setTimeout(() => {
        $desaparecer.classList.add("none")
        $aparecer.classList.remove("none")
        setTimeout(() => {
          $aparecer.classList.remove("invisible")
        }, 300);
      }, 300);
      $btnImg.setAttribute("src", img) // Aquí se cambia la imágen del botón por la de confirmar (recordemos que en la primera función sólo se cambia la imágen si se presiona el botón de crear/confirmar, y aquí se presionó una nota)
    })
  });

  $btn.addEventListener("click", e => {
    setTimeout(() => {

      // Aquí va el código que se ejecuta luego de presionar el botón de confirmar

      $notas = d.querySelectorAll(selector)
      notasGuardadas = funcionObtenerNotas("notas")
      $notas.forEach((nota, index) => { 

        // Aquí se vuelve a asignar el evento a cada nota para que al ser presionadas se muestren (se vuelve a poner ya que, al crearse una nueva nota, ésta no tendrá asignado el evento que previamente le dimos a las que estaban creadas desde antes)

        nota.addEventListener("click", e => {

          if(index >= funcionObtenerNotas("notas").length){
            index = funcionObtenerNotas("notas").length - 1
          }
        
      funcionSubirDatos(index, "index")
      funcion(textarea, funcionObtenerNotas("notas")[index].content)
      funcionCambiarTitulo(titulo, `Editando: ${funcionObtenerNotas("notas")[index].title}`)
      $desaparecer.classList.add("invisible")
      setTimeout(() => {
        $desaparecer.classList.add("none")
        $aparecer.classList.remove("none")
        setTimeout(() => {
          $aparecer.classList.remove("invisible")
        }, 300);
      }, 300);
      $btnImg.setAttribute("src", img)
    })
  });
    }, 500);
  })
}

export function btnBorrar(btn, funcionBorrar, funcionVolver, titulo, obtenerDatos, subirDatos, inputContenido, inputTitulo, editor, index, btnImg, imgEditar, cambiarTitulo) {
  
  const $titulo = d.querySelector(titulo),
  $btn = d.querySelector(btn),
  $btnDiv = d.querySelector(btn)

  $btn.addEventListener("click", e => {
    if($titulo.textContent.includes("Editando: ")){
      funcionVolver(index, editor, btnImg, inputTitulo, inputContenido, imgEditar, cambiarTitulo)
      funcionBorrar(obtenerDatos, subirDatos, ".notas", ".nota")
    }
    else{
      funcionVolver(index, editor, btnImg, inputTitulo, inputContenido, imgEditar, cambiarTitulo)
    }
  })
}

export function modificarTamañoFuente(btn, clase, zoomOut) {
  
  const $btn = d.querySelector(btn),
  $element = d.querySelector(clase)

  let tamañoFuente = 1.6

  $btn.addEventListener("click", e => {
    if(zoomOut == true){
      if($element.style.fontSize === "") $element.style.fontSize = "1.7rem"
      
      tamañoFuente = parseFloat($element.style.fontSize.slice(0, 3))

      if(tamañoFuente > 1.5){

      tamañoFuente -= 0.2

      $element.style.fontSize = `${tamañoFuente}rem`
      }
    }
    else{
      if($element.style.fontSize === "") $element.style.fontSize = "1.9rem"
      
      tamañoFuente = parseFloat($element.style.fontSize.slice(0, 3))

      if(tamañoFuente < 4){
        
        tamañoFuente += 0.2
        
        $element.style.fontSize = `${tamañoFuente}rem`
      }
    }
  })
}

export function cerrarMenu(menu, btn, input, clase, elementos) {
  const $menu = d.querySelector(menu),
  $btn = d.querySelector(btn),
  $input = d.querySelector(input),
  $elementos = d.querySelector(elementos)

  $btn.addEventListener("click", e => {
    if($input.value != ""){
      $menu.classList.remove(clase)
      $menu.classList.add("invisible")
       (!$menu.classList.contains("invisible"))
    ? setTimeout(() => {
      $elementos.classList.remove("invisible")
    }, 300)
    : $elementos.classList.add("invisible")
    } 
  })
}

export function cerrarMenuBtn(menu, btn, clase, elementos) {
  const $menu = d.querySelector(menu),
  $btn = d.querySelector(btn),
  $elementos = d.querySelector(elementos)

  $btn.addEventListener("click", e => {
    $menu.classList.remove(clase)
      $menu.classList.add("invisible");

      (!$menu.classList.contains("invisible"))
    ? setTimeout(() => {
      $elementos.classList.remove("invisible")
    }, 300)
    : $elementos.classList.add("invisible")
  })
}