function loadShibes() {
  // Clear the existing images
  const container = document.getElementById("shibeContainer");
  container.innerHTML = "";

  // Fetching the data using Promises
  fetch("http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((url) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-md-4 mb-4";

        const img = document.createElement("img");
        img.src = url;
        colDiv.appendChild(img);

        container.appendChild(colDiv);
      });
    })
    .catch((error) => {
      console.log("Fetch error: ", error);
      alert("Failed to load images. Please try again later.");
    });
}
