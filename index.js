const previewContainer = document.querySelector(".preview");
const previewImage = document.querySelector(".preview > img");
const closeBtn = document.querySelector(".preview > span");
const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.setAttribute("title", "Click to preview");
  img.addEventListener("click", () => {
    let imgSrc = img.getAttribute("src");
    previewImage.setAttribute("src", imgSrc);
    previewContainer.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  previewContainer.classList.add("hidden");
});

const sections = document.querySelectorAll("section");
const tableOfContent = document.querySelectorAll(".table-of-content a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tableOfContent.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("font-bold");
          } else {
            link.classList.remove("font-bold");
          }
        });
      }
    });
  },
  { rootMargin: "-20% -20% -20% -20%" }
);

sections.forEach((section) => {
  observer.observe(section);
});
