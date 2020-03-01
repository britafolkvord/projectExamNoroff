const resultsContainer = document.getElementById(`next-launch`);
init();


async function init() {
  try {
    resultsContainer.innerHTML = `<div class="loader"></div>`;
    const responses = await Promise.all([getNextLaunch(), getRockets()])
    const nextLaunch = responses[0];
    const rockets = responses[1];


    const img = rockets.find(function (rocket) {
      return rocket.rocket_id === nextLaunch.rocket.rocket_id
    }).flickr_images[1];

    resultsContainer.innerHTML = "";
    createCountdown(nextLaunch, img);


  } catch (error) {
    resultsContainer.innerHTML = "Page could not load";
  }

};

function getNextLaunch() {
  return fetch("https://api.spacexdata.com/v3/launches/next").then(function (response) {
    return response.json();
  })
};

function getRockets() {
  return fetch("https://api.spacexdata.com/v3/rockets").then(function (response) {
    return response.json();
  })
};

function createCountdown(launch, img) {
  resultsContainer.innerHTML = `
  <ul class="countdown" id="countdownDiv">
    <li class="countdown-items"><span id="days"></span>days</li>
    <li class="countdown-items"><span id="hours"></span>Hours</li>
    <li class="countdown-items"><span id="minutes"></span>Minutes</li>
    <li class="countdown-items"><span id="seconds"></span>Seconds</li>
</ul>

<div class="launch-info">
    <img height="420px" width="600px" src="${img}" alt="rocket">
    <div class="info-content">
    <div class="name">    
            <h2>${launch.rocket.rocket_name}</h2>
            </div>
        <div class="items-center">
            <h3>Type:</h3>
            ${launch.rocket.rocket_type}
        </div>
        <div class="items-center">
            <h3>Flight Number:</h3>
            ${launch.flight_number}
        </div>
        <div class="items-center">
            <h3>Mission Name:</h3>
            ${launch.mission_name}
        </div>
        <div class="items-center">
            <h3>Launch Date:</h3>
            ${launch.launch_date_utc}
        </div>
        <div class="items-center">
            <h3>Launch Site:</h3>
            ${launch.launch_site.site_name}
        </div>
    </div>
</div>
`

  let launchDate = new Date(`${launch.launch_date_utc}`).getTime();

  updateCountdown(launchDate)

  setInterval(function () {
    updateCountdown(launchDate)
  }, 1000);

};

function updateCountdown(launchDate) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let now = new Date().getTime();
  let remainingTime = launchDate - now;

  document.getElementById('days').innerText = Math.floor(remainingTime / (day));
  document.getElementById('hours').innerText = Math.floor((remainingTime % (day)) / (hour));
  document.getElementById('minutes').innerText = Math.floor((remainingTime % (hour)) / (minute));
  document.getElementById('seconds').innerText = Math.floor((remainingTime % (minute)) / second);
};



