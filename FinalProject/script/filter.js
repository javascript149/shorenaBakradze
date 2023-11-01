

function filterProducts() {
  let searchInput = document.getElementById("searchInput");
  let filter = searchInput.value.toLowerCase();
  let gallery = document.querySelector(".gallery");
  let items = gallery.querySelectorAll(".image-container");

  items.forEach((item) => {
    let itemValue = item.querySelector("p").textContent.toLowerCase();
    if (itemValue.indexOf(filter) > -1) {
      item.style.display = "block"; // Display the item
    } else {
      item.style.display = "none"; // Hide the item
    }
  });
}


