document.getElementById("author").addEventListener("click", function () {
  fetch("../assets/about.json")
    .then((response) => response.json())
    .then((myPhones) => loadauthor(myPhones));
});

function loadauthor(myPhones) {
  var mainContainer = document.getElementById("author");

  mainContainer.innerHTML = '';

  var authors = myPhones.authors;

  var temptml = `
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm" style="max-width: 300px; margin: auto;">
        <img src="${authors[0].url}" class="card-img-top" alt="${authors[0].name} poster">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">${authors[0].name}</h4>
          <p class="my-0 text-muted">${authors[0].email}</p>
        </div>
        <div class="card-body">
          <p class="card-text">${authors[0].description}</p>
        </div>
      </div>
    </div>
  `;

  temptml += `
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm" style="max-width: 300px; margin: auto;">
        <img src="${authors[1].url}" class="card-img-top" alt="${authors[1].name} poster">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">${authors[1].name}</h4>
          <p class="my-0 text-muted">${authors[1].email}</p>
        </div>
        <div class="card-body">
          <p class="card-text">${authors[1].description}</p>
        </div>
      </div>
    </div>
  `;


  mainContainer.innerHTML = temptml;

}
