const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
const items = dropdown.getElementsByTagName("li");

searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase().trim();

    if (filter.length === 0) {
        dropdown.classList.add("hidden");
        return;
    }

    let hasVisible = false;

    Array.from(items).forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.startsWith(filter)) {
            item.style.display = "";
            hasVisible = true;
        } else {
            item.style.display = "none";
        }
    });

    dropdown.classList.toggle("hidden", !hasVisible);
});

// Optional: hide dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) {
        dropdown.classList.add("hidden");
    }
});
