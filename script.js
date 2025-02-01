// Función para mostrar/ocultar el formulario de comentarios
function toggleCommentForm() {
    const form = document.getElementById('comment-form');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
  }
  
  // Función para enviar el comentario
  function submitComment() {
    const commentText = document.getElementById('comment-text').value;

    if (commentText.trim() !== '') {
        const encodedMessage = encodeURIComponent(commentText); // Codificar el mensaje
        const phoneNumber = '1168025977'; // Reemplaza con el número de WhatsApp sin el signo '+'
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Abrir WhatsApp en una nueva ventana o pestaña
        window.open(whatsappURL, '_blank');

        // Limpiar el textarea
        document.getElementById('comment-text').value = '';
        toggleCommentForm(); // Ocultar el formulario después de enviar
    } else {
        alert('Por favor, escribe un comentario antes de enviarlo.');
    }
}

//CHAT ITERATIVO

document.addEventListener("DOMContentLoaded", () => {
  const openChatButton = document.getElementById("openChat");
  const chatContainer = document.getElementById("chatContainer");
  const closeChatButton = document.getElementById("closeChat");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  // Abrir el chat
  openChatButton.addEventListener("click", () => {
    chatContainer.style.display = "flex";
    openChatButton.style.display = "none";
  });


});

//Nosotros
// Agregar animación al cargar la sección "Nosotros"
document.addEventListener("DOMContentLoaded", () => {
  const nosotrosSection = document.querySelector(".nosotros");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nosotrosSection.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(nosotrosSection);
});


//Servicios

function toggleDetails(card) {
  const details = card.querySelector('.details');
  const isVisible = details.style.display === 'block';
  document.querySelectorAll('.details').forEach(detail => detail.style.display = 'none');
  details.style.display = isVisible ? 'none' : 'block';
}

function nextImage(event, button) {
  event.stopPropagation();
  const carousel = button.closest('.carousel');
  const images = carousel.querySelectorAll('img');
  const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  images[activeIndex].classList.remove('active');
  images[(activeIndex + 1) % images.length].classList.add('active');
}

function prevImage(event, button) {
  event.stopPropagation();
  const carousel = button.closest('.carousel');
  const images = carousel.querySelectorAll('img');
  const activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  images[activeIndex].classList.remove('active');
  images[(activeIndex - 1 + images.length) % images.length].classList.add('active');
}


// Suponiendo que tienes un archivo JSON con los autos
document.addEventListener("DOMContentLoaded", () => {
  fetch("autos.json")
      .then(response => response.json())
      .then(autos => mostrarAutos(autos))
      .catch(error => console.error("Error cargando los autos:", error));
});

function mostrarAutos(autos) {
  const container = document.getElementById("autos-container");
  container.innerHTML = ""; // Limpiar contenedor antes de mostrar

  autos.forEach(auto => {
      // Crear tarjeta de auto
      const card = document.createElement("div");
      card.classList.add("auto-card");

      // Crear slider de imágenes
      let imagenesHTML = "";
      auto.imagenes.forEach((img, index) => {
          imagenesHTML += `<img src="${img}" class="auto-img ${index === 0 ? 'active' : ''}" data-index="${index}" />`;
      });

      // Crear link de WhatsApp con mensaje personalizado
      const whatsappURL = `https://api.whatsapp.com/send?phone=TU_NUMERO_DE_WHATSAPP&text=Hola,%20quiero%20más%20información%20sobre%20${encodeURIComponent(auto.marca)}%20${encodeURIComponent(auto.modelo)}%20(${auto.año}).`;

      // Estructura del auto en HTML
      card.innerHTML = `
          <div class="auto-slider">
              ${imagenesHTML}
              <button class="prev">◀</button>
              <button class="next">▶</button>
          </div>
          <h2>${auto.marca} ${auto.modelo} (${auto.año})</h2>
          <p>${auto.descripcion}</p>
          <p><strong>Precio:</strong> $${auto.precio}</p>
          <a href="${whatsappURL}" target="_blank" class="whatsapp-btn">📲 Quiero más información</a>
      `;

      container.appendChild(card);

      // Lógica del slider
      const images = card.querySelectorAll(".auto-img");
      let currentIndex = 0;

      card.querySelector(".next").addEventListener("click", () => {
          images[currentIndex].classList.remove("active");
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add("active");
      });

      card.querySelector(".prev").addEventListener("click", () => {
          images[currentIndex].classList.remove("active");
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          images[currentIndex].classList.add("active");
      });
  });
}