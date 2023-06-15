const gallery = (function () {
    const GALLERY = document.querySelector(".gallery__container")
    const FOCUSED_IMAGE = document.createElement("img") 
    const THUMBNAILS = document.createElement("div")
    
    FOCUSED_IMAGE.classList.add("gallery__focusedImage")
    THUMBNAILS.classList.add("gallery__thumbnails")   

    const ZOOMED_IMAGE_DIV = document.createElement("div")
    const ZOOMED_IMAGE = document.createElement("img")
    
    function buildThumbnail (image) {
        const BUTTON = document.createElement("button")
        BUTTON.addEventListener("mouseover", changeFocus)
        BUTTON.innerHTML = `<img src="${image}" alt="galleri miniature"
        class="gallery__thumbnail">`
        BUTTON.classList.add("gallery__button")
        THUMBNAILS.append(BUTTON)
    }

    function changeFocus (event){
        if (event.target.tagName == "IMG"){
            FOCUSED_IMAGE.src = event.target.src
        }   
    }

    FOCUSED_IMAGE.addEventListener("mouseover", zoom)    
    
    function zoom (event){
        FOCUSED_IMAGE.addEventListener("mousemove", move)
        FOCUSED_IMAGE.addEventListener("mouseout", stopZoom)
          
    }

    function init (images = []){
        
        FOCUSED_IMAGE.src = images[0]
        
        images.forEach(buildThumbnail)
        GALLERY.append(FOCUSED_IMAGE, THUMBNAILS, ZOOMED_IMAGE_DIV)
    }

    return {
        init
    }

} )()

