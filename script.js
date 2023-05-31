document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
  
    // Check if the popup has been shown before
    var popupShown = getCookie("popupShown");
    if (!popupShown) {
      // Show the popup and overlay if it hasn't been shown before
      popup.style.display = "block";
      overlay.style.display = "block";
  
      // Set the cookie to indicate that the popup has been shown
      setCookie("popupShown", true, 365); // Cookie expires in 365 days
    }
  });
  
  function closePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("overlay");
  
    // Hide the popup and overlay when the close button is clicked
    popup.style.display = "none";
    overlay.style.display = "none";
  }
  
  // Helper function to set a cookie
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Helper function to get a cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
  