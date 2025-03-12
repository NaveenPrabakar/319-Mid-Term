fetch('../assets/prices.json')
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
        price = descriptions[i].price;
        description = descriptions[i].description;
        url = descriptions[i].url;
    
        addStep.innerHTML = `
            <p style="padding: 20px; font-size: 25px">${name}</p>  
            <img src=${url} class="card-img-top" style="width: 300px" alt="..."">  
            <p style="padding-top: 20px; font-size: 20px"> ${description}</p>  
            <p style="font-size: 20px"> ${price}</p> 
            `;
        mainContainer.appendChild(addStep); 
    }
}

