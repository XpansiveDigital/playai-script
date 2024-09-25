document.addEventListener("DOMContentLoaded", function() {
  if (typeof PlayAI !== 'undefined') {
    PlayAI.open('jByeRb0kdL6O2YwCyxNzQ', {
      container: '#playai-container'
    });
  } else {
    console.error("PlayAI script failed to load.");
  }
});
