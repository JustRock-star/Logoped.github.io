// scriptStartPage.js — simplified navigation script
// Removed ES module imports so this file can be loaded as a regular script tag.

document.addEventListener("DOMContentLoaded", function () {
  const first = document.getElementById('first');
  const second = document.getElementById('second');

  if (first) {
    first.addEventListener('click', function (e) {
      // default anchor behavior is fine; JS kept for future enhancements
    });
  }

  if (second) {
    second.addEventListener('click', function (e) {
      // default anchor behavior is fine; JS kept for future enhancements
    });
  }
});
