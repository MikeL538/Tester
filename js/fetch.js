const fetchUsersBtn = document.querySelector(".click");
const userList = document.querySelector(".ul");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUserList(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUserList(users) {
  const markup = users
    .map((user) => {
      return `
    <li>
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Company: ${user.company.name}</p>
    </li>`;
    })
    .join("");
  userList.innerHTML = markup;
}
