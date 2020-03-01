const resultsContainer = document.querySelector("#rockets");
getAllRockets();

async function getAllRockets() {
  try {
    resultsContainer.innerHTML = `<div class="loader"></div>`;
    const response = await fetch("https://api.spacexdata.com/v3/rockets");
    const json = await response.json();

    resultsContainer.innerHTML = "";
    displayRockets(json);

    document.querySelectorAll(`.description-trigger`).forEach(function (trigger) {
      trigger.addEventListener(`click`, function () {
        const description = trigger.parentElement.querySelector(`.description-content`)
        if (description.classList.contains('hidden')) {
          description.classList.remove('hidden');
        } else {
          description.classList.add('hidden');
        }
      });
    })


  } catch (error) {
    resultsContainer.innerHTML = "Page could not load";
  }
};


function displayRockets(rockets) {
  rockets.forEach(function (rocket) {
    resultsContainer.innerHTML += createRocketDiv(rocket);
  });
};

function createRocketDiv(rocket) {
  return `
  <div class="rocket-cards">
  <div class="card">
    <div class="content-card">
        <img src="${rocket.flickr_images[0]}" alt="rocket-img" class="card-img">
        <div class="info-short">
        <div class="name">    
            <h2>${rocket.rocket_name}</h2>
            </div>
            <div class="items-center">
                <h3>Stages: </h3>
                ${rocket.stages}
            </div>
            <div class="items-center">
                <h3>First flight: </h3>
                ${rocket.first_flight}
            </div>
            <div class="items-center">
                <h3>Cost per launch: </h3>
                ${rocket.cost_per_launch}$
            </div>
            <div class="items-center">
                <h3>Success rate: </h3>
                ${rocket.success_rate_pct}%
            </div>

        </div>
        <div class="rocket-description">
        <button class="description-trigger">
          <span>About ${rocket.rocket_name}</span> <span>&#8681;</span>
        </button>
        <div class="description-content hidden">
            ${rocket.description}
        </div>

    </div>

</div>

</div>
</div>
    `

}










