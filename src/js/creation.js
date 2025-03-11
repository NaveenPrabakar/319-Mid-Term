fetch('../assets/creation.json')
    .then(response => response.json())
    .then(descriptions => loadInformation(descriptions));


function loadInformation(descriptions) {
    
    let num, name, step, description, url, mainContainer, addStep;

    for (let i = 0; i < 6; i++){
        switch (i){
            case 0:
                num = "one";
                break;
            case 1:
                num = "two";
                break;
            case 2:
                num = "three";
                break;
            case 3:
                num = "four";
                break;
            case 4:
                num = "five";
                break;
            case 5:
                num = "six";
        }
        mainContainer = document.getElementById(num);
        addStep = document.createElement("div");
    
        name = descriptions[i].name;
        step = descriptions[i].step;
        description = descriptions[i].description;
        url = descriptions[i].url;
    
        addStep.innerHTML = `
            <p style="padding: 30px; font-size: 25px"> Step ${step}: ${name}</p>  
            <img src=${url} class="card-img-top" style="width: 400px" alt="..."">  
            <p style="padding: 20px"> ${description}</p>  
            `;
        mainContainer.appendChild(addStep); 
    }
}
