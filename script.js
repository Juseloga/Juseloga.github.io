document.addEventListener('DOMContentLoaded', function () {
    // Obtiene el botón y la lista de opciones
    const showOptionsBtn = document.getElementById('showOptionsBtn');
    const optionsList = document.getElementById('optionsList');
  
    // Agrega un event listener al botón
    showOptionsBtn.addEventListener('click', function () {
      // Alternar la clase 'hidden' para mostrar u ocultar la lista de opciones
      optionsList.classList.toggle('hidden');
    });
  });
  