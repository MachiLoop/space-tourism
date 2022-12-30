const crewSection = document.getElementById("crew");
console.log(crewSection);

let file;

fetch("/starter-code/data.json")
  .then((response) => response.json())
  .then((data) => application(data));

const application = function (data) {
  console.log(data);
  crewProfile(data, 0);
  slideHandler(data);
};

const crewProfile = function (data, index) {
  let crewProfileTemplate = `
    <div class="crew-profile">
        <div class="crew-image profile-primary">
            <img src="${data.crew[index].images.webp}" alt="" />
        </div>
        <div class="profile-secondary">
            <div class="crew-slider-button"></div>
            <div class="crew-description">
              <h2>${data.crew[index].role}</h2>
              <h3>${data.crew[index].name}</h3>
              <p>
              ${data.crew[index].bio}
              </p>
            </div>
        </div>
    </div>
`;

  crewSection.insertAdjacentHTML("beforeend", crewProfileTemplate);
  console.log(document.querySelector(".crew-slider-button"));

  for (let i = 0; i < data.crew.length; i++) {
    document
      .querySelector(".crew-slider-button")
      .insertAdjacentHTML(
        "beforeend",
        `<span class="slide-btn" data-index = ${i}></span>`
      );
  }
};

const resetCrewProfile = function () {
  document.querySelector(".crew-profile").remove();
};

const slideHandler = function (data) {
  crewSection.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("slide-btn")) {
      goToIndex = e.target.dataset.index;
      resetCrewProfile();
      crewProfile(data, goToIndex);
    }
  });
};
