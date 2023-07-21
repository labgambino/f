document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        {img: '1.jpg'},
        {img: '2.jpg'},
        {img: '3.jpg'},
        {img: '4.jpg'},
        {img: '5.jpg'},
        {img: '6.jpg'},
        {img: '7.jpg'},
        {img: '8.jpg'},
        {img: '9.jpg'},
        {img: '10.jpg'},
        {img: '11.jpg'},
        {img: '12.jpg'},
        {img: '13.jpg'},
        {img: '14.jpg'},
        {img: '15.jpg'},
        {img: '16.jpg'},
        {img: '17.jpg'},
        {img: '18.jpg'},
        {img: '19.jpg'},
        {img: '20.jpg'},
        {img: '21.jpg'},
        {img: '22.jpg'},
        {img: '23.jpg'},
        {img: '24.jpg'},
        {img: '25.jpg'},
        {img: '26.jpg'},
        {img: '27.jpg'},
        {img: '28.jpg'},
        {img: '29.jpg'},
        {img: '30.jpg'},
        {img: '31.jpg'},
        {img: '32.jpg'},
        {img: '33.jpg'},
        {img: '34.jpg'},
        {img: '35.jpg'},
        {img: '36.jpg'},
        {img: '37.jpg'},
        {img: '38.jpg'},
        {img: '39.jpg'},
        {img: '40.jpg'},
        {img: '41.jpg'},
        {img: '42.jpg'},
        {img: '43.jpg'},
        {img: '44.jpg'},
        {img: '45.jpg'},
        {img: '46.jpg'},
        {img: '47.jpg'},
        {img: '48.jpg'},
        {img: '49.jpg'},
        {img: '50.jpg'}
    
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')
    
    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src =imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.lenght - 1].img
                contador = imagenes.lenght - 1
            }
        } else if (tgt == adelante) {
            if (contador <imagenes.lenght - 1) {
                img.src = imagenes[contador +1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada =+event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
        
    })

document.querySelector('.btn_cerrar').addEventListener('click', () => {
    overlay.style.opacity=0
    overlay.style.visibility = 'hidden'
    })   
})