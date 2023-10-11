var companies = JSON.parse(localStorage.getItem("companies")) || []; /// get element from localstorage
// Ajouter un employé //
function registerEmployee(e) {
    // Empecher le refresh de la page en cliquant sur le bouton //
    e.preventDefault();

    // Récupérer les valeurs des inputs //
    var nom = document.getElementById("employee-last-name");
    var prenom = document.getElementById("employee-first-name");
    var email = document.getElementById("employee-email");
    var adresse = document.getElementById("employee-address");
    var societe = document.getElementById("employee-company");

    var formValid = true;

    // Vérifier les valeurs des inputs //
    if (nom.value == "") {
        nom.classList.remove("is-valid");
        nom.classList.add("is-invalid");
        formValid = false;
    } else {
        nom.classList.remove("is-invalid");
        nom.classList.add("is-valid");
        formValid = true;
    }

    if (prenom.value == "") {
        prenom.classList.remove("is-valid");
        prenom.classList.add("is-invalid");
        formValid = false;
    } else {
        prenom.classList.remove("is-invalid");
        prenom.classList.add("is-valid");
        formValid = true;
    }

    if (email.value == "") {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        formValid = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        formValid = true;
    }

    if (adresse.value == "") {
        adresse.classList.remove("is-valid");
        adresse.classList.add("is-invalid");
        formValid = false;
    } else {
        adresse.classList.remove("is-invalid");
        adresse.classList.add("is-valid");
        formValid = true;
    }

    var employee = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        adresse: adresse.value,
        sociéte: societe.value
    };

    // Ajouter un employé au localStorage //
    if (formValid) {
        console.log(societe.value);
        var employees = JSON.parse(localStorage.getItem("employees")) || []; /// get element from localstorage
        employees.push(employee); ///add dans le tableau
        var verifcompnay = companies.find((element, index) => element.nom == societe.value)

        verifcompnay.Employee.push(nom.value)
        var localistion = companies.indexOf(verifcompnay)
        console.log(localistion);
        companies.splice(localistion, 1, verifcompnay);
        localStorage.setItem("companies", JSON.stringify(companies));


        localStorage.setItem("employees", JSON.stringify(employees));
        window.location.reload()
        //add dans localstorage

    }
}

// Ajouter un employé avec le bouton //
var btnregister = document.getElementById("add-employee");
btnregister.addEventListener("click", registerEmployee);


var selected = document.getElementById('employee-company')
companies.map((element) =>
    selected.innerHTML += `
<option>${element.nom}</option>`
)

// Selecteur de société //

// Modifier un employé //
var employees = JSON.parse(localStorage.getItem("employees")) || []; /// get element from localstorage
function loadEmployeesData() {
    var body = document.getElementById("employees-tables");

    // Afficher les employés avec la fonction map //
    employees.map((employee, index) => {
        body.innerHTML += `

          <tr> 
          <td>${employee.nom} </td>
          <td>${employee.prenom} </td>
          <td>${employee.email}</td>
          <td>${employee.adresse}</td>
          <td>${employee.sociéte}</td>
       
          
          <td><button class="btn btn-danger" onClick="supprimerEmployee(${index})">Supprimer</button> 
              
          <button
          type="button"
          Onclick="getdata(${index})"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalEmployee"
        >
          Update
        </button>
        
        </td>
          `;
    });
}
loadEmployeesData();

// Supprimer un employé //
function supprimerEmployee(index) {
    console.log(index);
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    location.reload();
}

// Ajouter un employé avec le bouton //
var nomemp = document.getElementById("last-name");
var prenomemp = document.getElementById("first-name");
var emailemp = document.getElementById("email-employee");
var adresseemp = document.getElementById("adresse-employee");


// Ajouter un employé //
var position2 = 0;
function getdata(index) {
    console.log(employees);
    nomemp.value = employees[index].nom;
    prenomemp.value = employees[index].prenom;
    emailemp.value = employees[index].email;
    adresseemp.value = employees[index].adresse;

    position2 = index;
}

// Modifier un employé //
function updateEmployeedata() {
    var employee = {
        nom: nomemp.value,
        prenom: prenomemp.value,
        email: emailemp.value,
        adresse: adresseemp.value,
        company: company.value,
    };
    employees.splice(position2, 1, employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    location.reload();
}