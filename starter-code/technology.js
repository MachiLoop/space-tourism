const techSection = document.getElementById("technology");
console.log(techSection);

let file;

fetch("/starter-code/data.json")
  .then((response) => response.json())
  .then((data) => application(data));

const application = function (data) {
  console.log(data);
  techSpecHandler(data, 0);
  slideHandler(data);
};

const techSpecHandler = function (data, index) {
  let techSpecTemplate = `
<div class="technology-specs">
    <div class="technology-image specs-primary">
        <img
        class="image-landscape"
        src="${data.technology[index].images.landscape}"
        alt=""
        />
        <img
        class="image-potrait"
        src="${data.technology[index].images.portrait}"
        alt=""
        />
    </div>
    <div class="specs-secondary">
        <div class="technology-slider-button"></div>
        <div class="technology-description">
            <h2>The terminology ...</h2>
            <h3>${data.technology[index].name}</h3>
            <p>
            ${data.technology[index].description}
            </p>
        </div>
    </div>
</div>
`;

  techSection.insertAdjacentHTML("beforeend", techSpecTemplate);
  console.log(document.querySelector(".technology-slider-button"));

  for (let i = 0; i < data.technology.length; i++) {
    document
      .querySelector(".technology-slider-button")
      .insertAdjacentHTML(
        "beforeend",
        `<span class="slide-btn" data-index = ${i}>${i + 1}</span>`
      );
  }

  document.querySelectorAll(".slide-btn")[index].classList.add("active-slide");
};

const resetTechSpecHandler = function () {
  document.querySelector(".technology-specs").remove();
};

const slideHandler = function (data) {
  techSection.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("slide-btn")) {
      goToIndex = e.target.dataset.index;
      resetTechSpecHandler();
      techSpecHandler(data, goToIndex);
    }
  });
};
