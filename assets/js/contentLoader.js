document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("hashchange", loadPage);
    loadPage();
});

function loadPage() {
    const hash = window.location.hash.substring(1) || "home";
    const path = hash.includes("/") ? `pages/${hash}.html` : `pages/${hash}.html`;

    showLoading();

    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load page: ${path}`);
            return response.text();
        })
        .then(htmlContent => {
            document.getElementById("content").innerHTML = htmlContent;

            // Wait for DOM to fully update before running page-specific code
            requestAnimationFrame(() => {
                triggerPageSpecificLogic(hash);
            });

        })
        .catch(error => {
            console.error(error);
            document.getElementById("content").innerHTML = "<h2>Page Not Found</h2>";
        })
        .finally(() => {
            hideLoading();
        });
}

function triggerPageSpecificLogic(hash) {
    if (hash === "projects") {
        loadProjects(); // 👈 Call your projects.js logic
    }
}
