function makeGetRequest() {
  let xhr = new XMLHttpRequest();
  let url = "https://jsonplaceholder.typicode.com/users";

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let users = JSON.parse(this.responseText);
      users.map((user) => {
        let makeAddress =
          user?.address["street"] +
          "," +
          user?.address["suite"] +
          "," +
          user?.address["city"] +
          ".";
        return displayUserInfo(user?.id, user?.name, user?.email, makeAddress);
      });
    }
  };

  xhr.send();
}

//Make delete request;

function makeDeleteRequest(id) {
  let user_to_be_deleted = document.getElementById(id);
  user_to_be_deleted.remove();
  let body = document.getElementById("body");
  let tbody = document.getElementById("tbody");
  if (tbody.childNodes.length <= 0) {
    let text = document.createElement("h2");
    text.innerText = "No reports found";
    text.classList.add("text-center")
    text.classList.add("mt-5")

    let header = document.getElementById("header");
    header.remove();
    let image = document.createElement("img");
    image.classList.add("rounded");
    image.classList.add("mx-auto");
    image.classList.add("d-block");
    image.alt = "No-content found";
    image.src = "./assets/no-content.png";
    body.append(image);
    body.append(text);
  }
}

makeGetRequest();

//make function and pass pararemetes of user....;

function displayUserInfo(id, name, email, address) {
  const tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");
  tr.id = id;

  let th = document.createElement("th");
  th.innerText = id;

  let td_name = document.createElement("td");
  td_name.innerText = name;

  let td_email = document.createElement("td");
  td_email.innerText = email;

  let td_address = document.createElement("td");
  td_address.innerText = address;

  let td_button = document.createElement("td");

  let delete_button = document.createElement("button");
  delete_button.classList.add("btn");
  delete_button.classList.add("btn-danger");
  delete_button.innerText = "Delete";
  delete_button.addEventListener("click", () => makeDeleteRequest(id));

  td_button.append(delete_button);

  tr.append(th);
  tr.append(td_name);
  tr.append(td_email);
  tr.append(td_address);
  tr.appendChild(td_button);

  tbody.appendChild(tr);
}
