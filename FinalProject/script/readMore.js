function toggleText() {
    var dots = document.getElementById("dots");
    var hiddenText = document.getElementById("hiddenText");
    var buttonText = document.querySelector('.readMore');
  
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
      hiddenText.style.display = "inline";
      buttonText.innerHTML = "Read less";
      dots.style.display = "none";
    } else {
      hiddenText.style.display = "none";
      buttonText.innerHTML = "Read More";
      dots.style.display = "inline";
    }
  }
  