document.addEventListener("DOMContentLoaded", function() {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    console.log("Service Worker successfully registered!");
  })
  .catch(function(e) {
    console.log("Registration failed" + e);
  })

});
