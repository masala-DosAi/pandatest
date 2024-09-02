document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.getElementById("loading-screen");

  function showLoadingScreen() {
    loadingScreen.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function hideLoadingScreen() {
    loadingScreen.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function handleLinkClick(event) {
    const link = event.target;
    if (link.href && link.href !== window.location.href) {
      event.preventDefault();
      showLoadingScreen();
      setTimeout(() => {
        window.location.href = link.href;
      }, 3000);
    }
  }

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });

  window.addEventListener('load', function() {
    hideLoadingScreen();
  });

  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      hideLoadingScreen();
    }
  });
});
