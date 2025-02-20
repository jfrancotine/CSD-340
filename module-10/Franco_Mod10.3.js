document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".container img");

    images.forEach(img => {
        img.onclick = function(event) {
            let imgElement = event.target;
            let oldSrc = imgElement.dataset.old;
            let newSrc = imgElement.dataset.new;
            let currentSrc = imgElement.src;
            let nextSrc = currentSrc.includes(newSrc) ? oldSrc : newSrc;
            
            imgElement.classList.add("glitch");
            setTimeout(() => {
                imgElement.src = nextSrc;
                imgElement.classList.remove("glitch");
            }, 500);
        };
    });
});
