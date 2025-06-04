// loadingIndicator.js

function showLoading() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.classList.remove("hidden");
    }
}

function hideLoading() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.classList.add("hidden");
    }
}
