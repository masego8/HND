// componentLoader.js

document.addEventListener("DOMContentLoaded", () => {
    // Array of components to load
    const components = [
        { path: "components/nav.html", elementId: "nav" },
        { path: "components/header.html", elementId: "header" },
        { path: "components/footer.html", elementId: "footer" },
        { path: "components/breadcrumb.html", elementId: "breadcrumb" },
        { path: "components/back-to-top.html", elementId: "back-to-top" },
        { path: "components/alert.html", elementId: "alert" },
        { path: "components/loading.html", elementId: "loading" }
        // Add more here as you create more reusable components
    ];

    // Loop through and load each component
    components.forEach(component => {
        loadComponent(component.path, component.elementId);
    });
});

/**
 * Dynamically fetches and injects component into its container.
 * 
 * @param {string} path - The path to the HTML component.
 * @param {string} elementId - The ID of the target container.
 */
function loadComponent(path, elementId) {
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${path}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            const container = document.getElementById(elementId);
            if (container) {
                container.innerHTML = htmlContent;
            } else {
                console.warn(`No element found with ID '${elementId}'`);
            }
        })
        .catch(error => {
            console.error(`Error loading component '${elementId}':`, error);
        });
}
