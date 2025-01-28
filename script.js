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
