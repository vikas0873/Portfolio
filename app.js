    // Dark Mode and White Mode
  const toggle = document.getElementById("toggle_image");
  const moon = "moon.png";
  const sun = "Sun.png";
  let headerC = document.getElementsByTagName("header");
    
  function changeMode() {
    var element = document.body;
    element.classList.toggle("bright-mode");
    if (document.body.className == "bright-mode") {
      toggle.src = sun;
      document.body.style.color = "#454545";
    } else {
      toggle.src = moon;
      document.body.style.color = "white";
    }
    toggle.style.transition = "all .6s ease-in";
  }