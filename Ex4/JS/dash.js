// Modifier une société //
var companies = JSON.parse(localStorage.getItem("companies")) || []; /// get element from localstorage
function loadCompaniesData() {
    var body = document.getElementById("companies-tables");

    // Afficher les sociétés avec la fonction map //
    companies.map((company, index) => {
        body.innerHTML += `
 
          <tr> 
          <td>${campany.nom} </td>
          <td>${campany.adresse}</td>
          <td>${campany.email}</td>
          <td>${campany.employees}</td>
          
          <td><button class="btn btn-danger" onClick="supprimer(${index})">Supprimer</button> 
              
          <button
          type="button"
          Onclick="getdata(${index})"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Update
        </button>
        </td>
          `;
    });
}
loadCompaniesData();

// Supprimer une société //
function supprimer(index) {
    console.log(index);
    companies.splice(index, 1);
    localStorage.setItem("companies", JSON.stringify(companies));
    location.reload();
}

// Ajouter une société avec le bouton //
var nom = document.getElementById("nom");
var adresse = document.getElementById("adresse");
var email = document.getElementById("email");
var employee = document.getElementById("employee");

// Ajouter une société //
var position = 0;
function getdataz(index) {
    console.log(index);
    nom.value = companies[index].nom;
    adresse.value = companies[index].adresse;
    email.value = companies[index].email;
    position = index;
}

// Modifier une société //
function updatedata() {
    var company = {
        nom: nom.value,
        adresse: adresse.value,
        email: email.value,

    };
    companies.splice(position, 1, company);
    localStorage.setItem("companies", JSON.stringify(companies));
    location.reload();
}


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
          <td>${employee.campany}</td>
          
          <td><button class="btn btn-danger" onClick="supprimerEmployee(${index})">Supprimer</button> 
              
          <button
          type="button"
          Onclick="getEmployeedata(${index})"
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
var nom = document.getElementById("employee-last-name");
var prenom = document.getElementById("employee-first-name");
var email = document.getElementById("email");
var adresse = document.getElementById("adresse");
var company = document.getElementById("company");

// Ajouter un employé //
var position2 = 0;
function getdata(index) {
    console.log(index);
    nom.value = employees[index].nom;
    prenom.value = employees[index].prenom;
    email.value = employees[index].email;
    adresse.value = employees[index].adresse;
    company.value = employees[index].company;
    position2 = index;
}

// Modifier un employé //
function updateEmployeedata() {
    var employee = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        adresse: adresse.value,
        company: company.value,
    };
    employees.splice(position2, 1, employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    location.reload();
}