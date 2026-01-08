console.log("🟢 script.js LOADED successfully!");


// Hide loader after page load
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.classList.add("hide-loader");
        }
    }, 1200);
});

// Generic helper to attach click → redirect
function setupRedirect(buttonId, url) {
    const btn = document.getElementById(buttonId);
    if (btn) {
        btn.addEventListener("pointerdown", (e) => {
            e.preventDefault(); // Stop any CSS interference
            window.location.href = url;
        });
    }
}


// Main site URL for generic navigation
const mainStoreUrl = "https://www.muscleblaze.com";

// Top-level navigation buttons
setupRedirect("shopNowBtn", mainStoreUrl);
setupRedirect("exploreMoreBtn", mainStoreUrl);
setupRedirect("orderNowBtn", mainStoreUrl);

// Product specific URLs
setupRedirect(
    "wheyBtn",
    "https://www.muscleblaze.com/sv/muscleblaze-biozyme-performance-whey/SP-88093?navKey=VRNT-179898&itracker=w:search||searchedTerm-whey%20protein|;"
);

setupRedirect(
    "creatineBtn",
    "https://www.muscleblaze.com/sv/muscleblaze-creatine-monohydrate-creamp/SP-33852?navKey=VRNT-139937&itracker=w:search||searchedTerm-creatine|;"
);

setupRedirect(
    "fishOilBtn",
    "https://www.muscleblaze.com/sv/muscleblaze-omega-3-fish-oil-1000-mg-with-180mg-epa-and-120mg-dha/SP-36756?navKey=VRNT-90655&itracker=w:search||searchedTerm-fish%20oil|;"
);

setupRedirect(
    "multivitaminBtn",
    "https://www.muscleblaze.com/sv/muscleblaze-mb-vite-daily-multivitamin/SP-33854?navKey=VRNT-173153&itracker=w:search||searchedTerm-Multivitamins|;"
);
