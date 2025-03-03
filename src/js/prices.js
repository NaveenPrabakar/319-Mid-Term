fetch('../assets/prices.json')
    .then(response => response.json())
    .then(myPhones => loadPhones(myPhones));


function loadPhones(myPhones) {
    var mainContainer = document.getElementById("col");

    var checkboxes = [];
    var cards = [];
    let i = 1;

    for (let phone of myPhones) {
    
        let checkbox = "checkbox" + i.toString();
        let card = "card" + i.toString();
        console.log(phone);
        let AddPhone = document.createElement("div");
        AddPhone.classList.add("col");

        let name = phone.name;
        let price = phone.price;
        let description = phone.description;
        let url = phone.url;

        AddPhone.innerHTML = `
        <input type="checkbox" id=${checkbox} class="form-check-input">
            <label for=${checkbox} class="form-check-label">Show Phone #${i}</label>
            <div id=${card} class="card shadow-sm" style="width : 200px">
                <img src=${url} class="card-img-top" alt="...""></img>
                <div class="card-body" style="font-size : 15px">
                    <p class="card-text"> <strong>${name}</strong></p> 
                    <p class="card-text"> ${description}</p> 
                    <p class="card-text"> ${price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                    </div>
                </div>
            </div>
        `;

        mainContainer.appendChild(AddPhone);
        let cbox = document.getElementById(checkbox);
        checkboxes.push(cbox);
        let ccard = document.getElementById(card);
        cards.push(ccard);
        cards[i - 1].style.display = 'none';
        i = i + 1;
    }
    checkboxes.forEach((checkboxParam, index) => 
        {console.log(index);
        checkboxParam.addEventListener('change', () => {
            if (checkboxParam.checked) {
                cards[index].style.display = 'block';
            } else {
                cards[index].style.display = 'none';
            }
        });
    });
}

