document.addEventListener('DOMContentLoaded', function () {

    const titleCard = document.createElement('div');
    titleCard.setAttribute("class", "title-card");

    const titleh1 = document.createElement('h1');
    titleh1.setAttribute("id", "title");
    titleh1.innerHTML = 'Eat and drink';
    titleCard.appendChild(titleh1);

    const titleh2 = document.createElement('p');
    titleh2.setAttribute("id", "description");
    titleh2.innerHTML = "'Food is a good drug'";
    titleCard.appendChild(titleh2);

    document.body.insertBefore(titleCard, document.body.firstChild);

    const form = document.createElement('form');
    form.id = 'form';

    const divCover1 = document.createElement('div');
    divCover1.className = 'form-group';

    // Modified code for first name
   // Original code for creating the name input field
const labelFirstName = createInputLabel('First Name:', 'firstName');
const firstName = document.createElement('input');
firstName.id = 'first-name';
firstName.setAttribute('type', 'text');
firstName.setAttribute('placeholder', 'Enter your first name');
firstName.required = true;
divCover1.appendChild(labelFirstName);
divCover1.appendChild(firstName);

// Original code for creating the last name input field
const labelLastName = createInputLabel('Last Name:', 'last-Name');
const lastName = document.createElement('input');
lastName.setAttribute('type', 'text');
lastName.setAttribute('id', 'last-name');
// Add the placeholder attribute with a descriptive text
lastName.setAttribute('placeholder', 'Enter your last name');
lastName.required = true;
divCover1.appendChild(labelLastName);
divCover1.appendChild(lastName);



const labelAddress = createInputLabel('Address:', 'address');
const textareaAddress = createTextarea('address', true);
textareaAddress.setAttribute('placeholder', 'Enter your address'); // Corrected line
divCover1.appendChild(labelAddress);
divCover1.appendChild(textareaAddress);



    const labelPincode = createInputLabel('Pincode:', 'pincode');
    const inputPincode = createInput('text', 'pincode', true);
    inputPincode.setAttribute('placeholder', 'Enter your Zip code');
    divCover1.appendChild(labelPincode);
    divCover1.appendChild(inputPincode);

    const labelGender = createInputLabel('Gender:', 'gender');
    labelGender.setAttribute("id", "labelGenderl");
    // Create male radio button
    const inputMale = document.createElement('input');
    inputMale.type = 'radio';
    inputMale.name = 'gender';
    inputMale.value = 'male';
    inputMale.required = true; // Adding required attribute to fulfill HTML5 validation
    const labelMale = document.createElement('label');
    labelMale.appendChild(inputMale);
    labelMale.appendChild(document.createTextNode(' Male'));

    // Create female radio button
    const inputFemale = document.createElement('input');
    inputFemale.type = 'radio';
    inputFemale.name = 'gender';
    inputFemale.value = 'female';
    inputFemale.required = true; // Adding required attribute to fulfill HTML5 validation
    const labelFemale = document.createElement('label');
    labelFemale.appendChild(inputFemale);
    labelFemale.appendChild(document.createTextNode(' Female'));

    // Appending radio buttons to the form
    divCover1.appendChild(labelGender);
    divCover1.appendChild(labelMale);
    divCover1.appendChild(labelFemale);
    const labelState = createInputLabel('State:', 'state');
    const inputState = createInput('text', 'state', true);
    inputState.setAttribute('placeholder', 'Enter your State');
    divCover1.appendChild(labelState);
    divCover1.appendChild(inputState);

    const labelCountry = createInputLabel('Country:', 'country');
    const inputCountry = createInput('text', 'country', true);
    inputCountry.setAttribute('placeholder', 'Enter your Country');
    divCover1.appendChild(labelCountry);
    divCover1.appendChild(inputCountry);

    form.appendChild(divCover1);

    const labelList = createInputLabel('Choice of Food (select at least 2):', 'food');
    const foodCheckboxes = createFoodCheckboxes();
    form.appendChild(labelList);
    form.appendChild(foodCheckboxes);

    const submitButton = createButton('button', 'Submit', submitForm);
    submitButton.id = 'submit';
    submitButton.classList.add('btn', 'btn-primary'); // Add the required classes
    form.appendChild(submitButton);

    const table = createTable();
    table.className = 'table';
    const div = document.createElement('div');
    div.className = 'cover';
    div.appendChild(form);
    div.appendChild(table);
    document.body.appendChild(div);

    function submitForm() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        const foodCheckboxes = document.querySelectorAll('#food-checkboxes input[type="checkbox"]:checked');
        const selectedFood = Array.from(foodCheckboxes).map(checkbox => checkbox.value);

        const table = document.getElementById('dataTable');
        const tbody = table.getElementsByTagName('tbody')[0];
        const newRow = tbody.insertRow();

        newRow.insertCell().innerText = firstName;
        newRow.insertCell().innerText = lastName;
        newRow.insertCell().innerText = address;
        newRow.insertCell().innerText = pincode;
        newRow.insertCell().innerText = gender;
        newRow.insertCell().innerText = selectedFood.join(', ');
        newRow.insertCell().innerText = state;
        newRow.insertCell().innerText = country;

        form.reset();

        console.log('Form submitted');
    }

    function createInputLabel(text, forAttribute) {
        const label = document.createElement('label');
        label.setAttribute('for', forAttribute);
        label.innerText = text;
        return label;
    }

    function createInput(type, id, required) {
        const input = document.createElement('input');
        input.type = type;
        input.id = id;
        if (required) {
            input.required = true;
        }
        return input;
    }

    function createTextarea(id, required) {
        const textarea = document.createElement('textarea');
        textarea.id = id;
        if (required) {
            textarea.required = true;
        }
        return textarea;
    }

    function createOption(text, value) {
        const option = document.createElement('option');
        option.value = value;
        option.innerText = text;
        return option;
    }

    function createFoodCheckboxes() {
        const foodCheckboxes = document.createElement('div');
        foodCheckboxes.id = 'food-checkboxes';

        const foodLabels = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
        for (let i = 0; i < foodLabels.length; i++) {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.value = foodLabels[i].toLowerCase();
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${foodLabels[i]}`));
            foodCheckboxes.appendChild(label);
        }

        return foodCheckboxes;
    }

    function createButton(type, text, clickHandler) {
        const button = document.createElement('button');
        button.type = type;
        button.innerText = text;
        if (clickHandler) {
            button.onclick = clickHandler;
        }
        return button;
    }

    function createTable() {
        const table = document.createElement('table');
        table.id = 'dataTable';

        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const headers = ['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Food', 'State', 'Country'];

        for (let i = 0; i < headers.length; i++) {
            const th = document.createElement('th');
            th.innerText = headers[i];
            tr.appendChild(th);
        }

        const tbody = document.createElement('tbody');

        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);

        return table;
    }
});
