fetch('../assets/creation.json')
    .then(response => response.json())
    .then(descriptions => loadInformation(descriptions));


function loadInformation(descriptions) {
    var mainContainer = document.getElementById("one");
    let AddStep = document.createElement("div");

    let name = descriptions[0].name;
    let step = descriptions[0].step;
    let description = descriptions[0].description;
    let url = descriptions[0].url;

    AddStep.innerHTML = `
        
            
                <img src=${url} class="card-img-top" alt="...""></img>
                <div class="card-body" style="font-size : 15px">
                    <p> Step: <strong>${step}</strong></p> 
                    <p> ${name}</p> 
                    <p> ${description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            
        `;
    mainContainer.appendChild(AddStep);

    mainContainer = document.getElementById("two");
    AddStep = document.createElement("div");

    name = descriptions[0].name;
    step = descriptions[0].step;
    description = descriptions[0].description;
    url = descriptions[0].url;

    AddStep.innerHTML = `
        
            
                <img src=${url} class="card-img-top" alt="...""></img>
                <div class="card-body" style="font-size : 15px">
                    <p> Step: <strong>${step}</strong></p> 
                    <p> ${name}</p> 
                    <p> ${description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            
        `;
    mainContainer.appendChild(AddStep);

    mainContainer = document.getElementById("two");
    AddStep = document.createElement("div");

    name = descriptions[0].name;
    step = descriptions[0].step;
    description = descriptions[0].description;
    url = descriptions[0].url;

    AddStep.innerHTML = `
        
            
                <img src=${url} class="card-img-top" alt="...""></img>
                <div class="card-body" style="font-size : 15px">
                    <p> Step: <strong>${step}</strong></p> 
                    <p> ${name}</p> 
                    <p> ${description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            
        `;
    mainContainer.appendChild(AddStep);
}
