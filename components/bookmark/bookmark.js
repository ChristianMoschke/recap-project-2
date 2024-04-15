const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  toggleBookmark();
});

function toggleBookmark() {
  bookmark.classList.toggle("bookmark--active");
}
