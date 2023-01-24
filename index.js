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
const th_id = document.getElementById("th");
const td = document.getElementById("td");
const delete_btn = document.getElementById("delete-btn");

let tr_clone = tr.cloneNode(true);

let th_id_clone = th.cloneNode(true);
th_id_clone.innerText = "3";

let td_name_clone = td.cloneNode(true);
td_name_clone.innerText = "Umar"

let td_email_clone = td.cloneNode(true);
td_email_clone.innerText = "umarasaboor@gmail.com"

let td_address_clone = td.cloneNode(true);
td_address_clone.innerText = "Lahore, Pakistan"

let delete_btn_clone = delete_btn.cloneNode(true);

tr_clone.append(th_id_clone);
tr_clone.appendChild(td_name_clone);
tr_clone.appendChild(td_email_clone);
tr_clone.appendChild(td_address_clone);
tr_clone.appendChild(delete_btn_clone);
tbody.appendChild(tr_clone);

console.log(th_id_clone, tr_clone, tbody);
