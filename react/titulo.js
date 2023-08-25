export const crearTitulo = (div) => {
    const titulo = document.createElement('h1')
    titulo.innerText = 'Titulo'

    const subtitulo = document.createElement('h2')
    subtitulo.innerText = 'subtitulo'

    div.appendChild(titulo)
    div.appendChild(subtitulo)
}