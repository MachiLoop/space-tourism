const destinationSection = document.getElementById("destination");

fetch("/starter-code/data.json")
  .then((response) => response.json())
  .then((data) => application(data));

const application = function (data) {
  // console.log(data);
  destinationInfoHandler(data, 0);
  slideHandler(data);
};

const destinationInfoHandler = function (data, index) {
  let destinationInfoTemplate = `
<div class="destination-wrapper">
  <div class="destination-image destination-primary">
    <img src="${data.destinations[index].images.webp}" alt="" />
  </div>
  <div class="destination-secondary">
    <div class="destination-slider-button"></div>
    <div class="destination-description">
      <h2>${data.destinations[index].name}</h2>
      <p>${data.destinations[index].description}</p>
    </div>
    <div class="destination-stat">
      <div class="distance-stat">
        <h3>avg. distance</h3>
        <p>${data.destinations[index].distance}</p>
      </div>
      <div class="time-stat">
        <h4>est. travel time</h4>
        <p>${data.destinations[index].travel}</p>
      </div>
    </div>
  </div>
</div>
`;

  destinationSection.insertAdjacentHTML("beforeend", destinationInfoTemplate);
  // console.log(document.querySelector(".destination-slider-button"));

  for (let i = 0; i < data.destinations.length; i++) {
    document
      .querySelector(".destination-slider-button")
      .insertAdjacentHTML(
        "beforeend",
        `<span class="slide-btn" data-index = ${i}>${data.destinations[i].name}</span>`
      );
  }

  document.querySelectorAll(".slide-btn")[index].classList.add("active-slide");
};

const resetdestinationInfoHandler = function () {
  document.querySelector(".destination-wrapper").remove();
};

const slideHandler = function (data) {
  destinationSection.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(e.target);
    if (e.target.classList.contains("slide-btn")) {
      goToIndex = e.target.dataset.index;
      resetdestinationInfoHandler();
      destinationInfoHandler(data, goToIndex);
    }
  });
};
