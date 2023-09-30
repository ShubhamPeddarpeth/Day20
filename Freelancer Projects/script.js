// Fetch data from Freelancer API
let token = "6f42c8d7527b4c2ec2cda17b67fcf739";
function fetchProjects() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://www.freelancer.com/api/projects/0.1/jobs/search/?job_names%5B%5D=PHP&job_names%5B%5D=website%20design",
      {
        headers: {
          "freelancer-oauth-v1": token,
        },
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Failed to fetch data");
      })
      .then((data) => {
        console.log(data); // Log to check the data structure
        resolve(data);
      })
      .catch((error) => reject(error));
  });
}

// Render projects to the DOM
function displayProjects(projects) {
  if (!projects || !Array.isArray(projects)) {
    console.error("Provided data is not an array.");
    return;
  }

  const projectContainer = document.getElementById("projects");

  projects.forEach((project) => {
    const title = project.name || "No title provided";
    const description = project.category.name || "No description provided";

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("col-md-4", "project-card");

    projectDiv.innerHTML = `
            <h5>${title}</h5>
            <p>${description}</p>
        `;

    projectContainer.appendChild(projectDiv);
  });
}

// Fetch and display
fetchProjects()
  .then((data) => {
    // Assuming the correct structure for this example is data.data.jobs
    displayProjects(data.result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
