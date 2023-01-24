function makeGetRequest() {
  let xhr = new XMLHttpRequest();
  let url = "https://jsonplaceholder.typicode.com/users";

  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let users = JSON.parse(this.responseText);
    //   console.log(users);
    //   users.map((user) =>
    //     console.log(
    //       "user#:",
    //       user?.id,
    //       ",user name: ",
    //       user?.name,
    //       ",user email: ",
    //       user?.email,
    //       ",user address:",
    //       user?.address["street"],
    //       user?.address["suite"],
    //       user.address["city"]
    //     )
    //   );
    }
  };

  xhr.send();
}

makeGetRequest();

const tbody = document.getElementById("tbody");
const tr = document.createElement("tr");
const th = document.getElementById("th");
const td = document.getElementById("td");
const delete_btn = document.getElementById("delete-btn");

let tr_clone = tr.cloneNode(true);
let th_clone = th.cloneNode(true);
th_clone.innerText = "4";
tr_clone.innerText = "Umar"
let td_clone = td.cloneNode(true);
tr_clone.append(th_clone);
tbody.appendChild(tr_clone);

console.log(th_clone, tr_clone, tbody);
