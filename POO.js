export class Nota{
  constructor(title, content){
    this.title = title
    this.content = content
  }}

export function crearObjeto(clase, par1, par2) {
  return new clase(par1, par2)
}

export function crearNotasDom(notas, claseDiv, container) {
  notas.forEach(nota => {
    const d = document,
    $div = d.createElement("div"),
    $title = d.createElement("h2"),
    $content = d.createElement("p"),
    $container = d.querySelector(container)

    $div.appendChild($title)
    $div.appendChild($content)
    $div.classList.add(claseDiv)

    $title.textContent = nota.title
    $content.textContent = nota.content

    $container.appendChild($div)
  });
}

export function crearUltimaNotaDom(notas, claseDiv, container) {

  const nota = notas[notas.length - 1]

    const d = document,
    $div = d.createElement("div"),
    $title = d.createElement("h2"),
    $content = d.createElement("p"),
    $container = d.querySelector(container)

    $div.appendChild($title)
    $div.appendChild($content)
    $div.classList.add(claseDiv)

    $title.textContent = nota.title
    $content.textContent = nota.content

    $container.appendChild($div)
}