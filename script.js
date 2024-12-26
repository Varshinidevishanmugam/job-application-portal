// Register Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("#registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const password = document.querySelector("#password").value.trim();

            if (!name || !email || !password) {
                alert("All fields are required!");
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address!");
            } else {
                alert("Registration successful!");
                registerForm.reset();
            }
        });
    }

    // Validate email function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Post Job Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const postJobForm = document.querySelector("#postJobForm");
    if (postJobForm) {
        postJobForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.querySelector("#title").value.trim();
            const company = document.querySelector("#company").value.trim();
            const description = document.querySelector("#description").value.trim();
            const location = document.querySelector("#location").value.trim();

            if (!title || !company || !description || !location) {
                alert("All fields are required!");
            } else {
                alert("Job posted successfully!");
                postJobForm.reset();
            }
        });
    }
});

// Preloaded Job Listings
document.addEventListener("DOMContentLoaded", () => {
    const jobListingsContainer = document.querySelector("#jobListings");
    if (jobListingsContainer) {
        const jobs = [
            {
                title: "Frontend Developer",
                company: "TechCorp",
                location: "Remote",
                description: "Develop and maintain user-facing features using React.js."
            },
            {
                title: "Backend Developer",
                company: "CodeBase",
                location: "New York, NY",
                description: "Build and optimize server-side logic using Node.js."
            },
            {
                title: "UI/UX Designer",
                company: "Creative Studio",
                location: "San Francisco, CA",
                description: "Design intuitive user interfaces for mobile and web platforms."
            },
            {
                title: "Data Analyst",
                company: "DataInsights",
                location: "Chicago, IL",
                description: "Analyze large datasets to provide actionable insights."
            },
            {
                title: "Project Manager",
                company: "Innovate Inc.",
                location: "Austin, TX",
                description: "Manage software development projects from initiation to completion."
            }
        ];

        jobs.forEach((job) => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("card", "mb-3");
            jobCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${job.title}</h5>
                    <p class="card-text"><strong>Company:</strong> ${job.company}</p>
                    <p class="card-text"><strong>Location:</strong> ${job.location}</p>
                    <p class="card-text">${job.description}</p>
                    <button class="btn btn-primary">Apply</button>
                </div>
            `;
            jobListingsContainer.appendChild(jobCard);
        });
    }
});
