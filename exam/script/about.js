const resultsContainer = document.querySelector("#about");
getInfo();

async function getInfo() {
    try {
        resultsContainer.innerHTML = `<div class="loader"></div>`;
        const response = await fetch("https://api.spacexdata.com/v3/info");
        const json = await response.json();
        resultsContainer.innerHTML = "";
        createInfoCards(json);



    } catch (error) {
        resultsContainer.innerHTML = "Page could not load";
    }

};

function createInfoCards(about) {
    resultsContainer.innerHTML = `
    <section class="description">
    <h2>About SpaceX</h2>
    <p>${about.summary}</p>
    <blockquote cite="https://www.spacex.com/careers">SpaceX is like Special Forces… we do the missions that others think are impossible.
        We have goals that are absurdly ambitious by any reasonable standard, but we’re going to make them happen.
        We have the potential here at SpaceX to have an incredible effect on the future of humanity and life itself. – Elon Musk</blockquote>
</section>

<aside class="facts">
    <h2>Facts</h2>
    <div class="items-center">
        <h3>Company Name: </h3>
        ${about.name}
    </div>
    <div class="items-center">
        <h3>Founder: </h3>
        ${about.founder}
    </div>
    <div class="items-center">
        <h3>Founded: </h3>
        ${about.founded}
    </div>
    <div class="items-center">
        <h3>Employees: </h3>
        ${about.employees}
    </div>
    <div class="items-center">
        <h3>Launch Sites: </h3>
        ${about.launch_sites}
    </div>
    <div class="items-center">
        <h3>Test Sites: </h3>
        ${about.test_sites}
    </div>
</aside>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13132964.94295407!2d-115.38394340782817!3d36.522990932992954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5dee46db32d%3A0x5589bf4232c10232!2sSpacex!5e0!3m2!1sno!2sno!4v1582907910843!5m2!1sno!2sno" width="1200" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
`
};