export function crearNotaBtn(btn, desaparecer, aparecer, img1, img2) {

  let primero = true

  const d = document,
  $btn = d.querySelector(btn),
  $desaparecer = d.querySelector(desaparecer),
  $aparecer = d.querySelector(aparecer),
  $btnImg = d.querySelector(`${btn} img`)

  let $inputContenido = d.querySelector(".input-notas")

  $btn.addEventListener("click", e => {

      if(primero){

      $desaparecer.classList.add("invisible")
      setTimeout(() => {
        $desaparecer.classList.add("none")
        $aparecer.classList.remove("none")
        setTimeout(() => {
          $aparecer.classList.remove("invisible")
        }, 300);
      }, 300);
      primero = false
      $btnImg.setAttribute("src", img2)
    }

    else{

      if ($inputContenido.value == ""){
        alert("Debes ingresar texto")
    }
    else{

      $aparecer.classList.add("invisible")
      setTimeout(() => {
        $aparecer.classList.add("none")
        $desaparecer.classList.remove("none")
        setTimeout(() => {
          $desaparecer.classList.remove("invisible")
        }, 300);
      }, 300);
      primero = true
      $btnImg.setAttribute("src", img1)
    }
    }
    })


}

export function btnHoverImg(btn, filter) {
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

export function expandirMenu(btn, clase, menu) {
  const d = document,
  $btn = d.querySelector(btn),
  $menu = d.querySelector(menu)

  $btn.addEventListener("click", e => {
    $menu.classList.toggle(clase)
    $menu.classList.toggle("invisible")
  })
}

export function aparecerElemento(btn, element, element2, img, imgSrc) {
  const d = document,
  $btn = d.querySelector(btn),
  $img = d.querySelector(img),
  $element = d.querySelector(element),
  $element2= d.querySelector(element2)

  $btn.addEventListener("click", e => {
    if ($img.getAttribute("src") != imgSrc){
    $element.classList.add("none")
    $element2.classList.add("none")
  } 
  else{
      $element.classList.remove("none")
      $element2.classList.remove("none")
    }
  })
}

export function ventanaEmergente(btnAppear, btnDisappear, window, img, imgSrc) {
  const d = document,
  $btnAppear = d.querySelector(btnAppear),  
  $btnDisappear = d.querySelector(btnDisappear),  
  $img = d.querySelector(img),  
  $window = d.querySelector(window)

  $btnAppear.addEventListener("click", e => {
    if (d.querySelector(`${window} input`).value == ""){

      if($img.getAttribute("src") === imgSrc){
        $window.classList.remove("none")
        setTimeout(() => {
          $window.classList.remove("invisible")
        }, 300);
      }
      else{
        $window.classList.add("invisible")
      setTimeout(() => {
        $window.classList.add("none")
      }, 300);
      }
    }
  })
  $btnDisappear.addEventListener("click", e => {

    if (d.querySelector(`${window} input`).value == "") {
      alert("Debes ingresar un título")
    }
    else{

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