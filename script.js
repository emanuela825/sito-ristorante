const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
})) 




/*GALLERIA*/
 const foto = document.querySelectorAll(".foto-galleria img");

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  const closeButton = document.getElementById("lightboxClose");
  const prevButton = document.getElementById("lightboxPrev");
  const nextButton = document.getElementById("lightboxNext");

  let fotoAttuale = 0;


/* =========================================
   APRI LIGHTBOX
========================================= */

  function apriFoto(indice) {

    fotoAttuale = indice;
    lightboxImage.src = foto[indice].src;
    lightboxImage.alt = foto[indice].alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }


/* =========================================
   CHIUDI LIGHTBOX
========================================= */

  function chiudiFoto() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }


/* =========================================
   FOTO SUCCESSIVA
========================================= */

  function fotoSuccessiva() {

    fotoAttuale++;
    if (fotoAttuale >= foto.length) {
        fotoAttuale = 0;
    }
    lightboxImage.src = foto[fotoAttuale].src;
    lightboxImage.alt = foto[fotoAttuale].alt;
  }


/* =========================================
   FOTO PRECEDENTE
========================================= */

  function fotoPrecedente() {

    fotoAttuale--;
    if (fotoAttuale < 0) {    
        fotoAttuale = foto.length - 1;
    }
    lightboxImage.src = foto[fotoAttuale].src;
    lightboxImage.alt = foto[fotoAttuale].alt;
  }

/* =========================================
   CLICK SULLE FOTO
========================================= */
  foto.forEach((immagine, indice) => {

    immagine.addEventListener("click", () => {

        apriFoto(indice);

    });

  });

/* =========================================
   PULSANTI
========================================= */

  closeButton.addEventListener("click", chiudiFoto);

  nextButton.addEventListener("click", fotoSuccessiva);

  prevButton.addEventListener("click", fotoPrecedente);

/* =========================================
   ESC DA TASTIERA
========================================= */

  document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        chiudiFoto();
    }

    if (event.key === "ArrowRight") {
        fotoSuccessiva();
    }

    if (event.key === "ArrowLeft") {
        fotoPrecedente();
    }

  });


/* =========================================
   CLICK SULLO SFONDO
========================================= */

  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        chiudiFoto();

    }

  });