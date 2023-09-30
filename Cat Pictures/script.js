document.addEventListener("DOMContentLoaded", function () {
  fetchCatImages().catch((error) => {
    console.error("Error fetching cat images:", error);
  });
});

/**
 * Fetches cat images and displays them.
 */
function fetchCatImages() {
  return fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(displayCatImages)
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    });
}

/**
 * Appends cat images to the gallery.
 * @param {Array} catData - Array of cat image objects.
 */
function displayCatImages(catData) {
  const gallery = document.getElementById("cat-gallery");
  catData.forEach((cat) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    const img = document.createElement("img");
    img.src = cat.url;
    img.alt = "A cute cat";
    img.className = "img-fluid"; // Bootstrap class for responsive images
    col.appendChild(img);
    gallery.appendChild(col);
  });
}
