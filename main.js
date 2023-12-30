document.addEventListener("DOMContentLoaded", function () {
  const deleteBtn = document.querySelector(".delete-user");
  deleteBtn.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    checkboxes.forEach(function (checkbox) {
      checkbox.closest("tr").remove();
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const addUserBtn = document.querySelector(".add-btn");
  const addUserModal = document.getElementById("addUserModal");
  const saveUserBtn = document.getElementById("saveUser");
  const cancelAddUserBtn = document.getElementById("cancelAddUser");
  const userTableBody = document.querySelector("#userTable tbody");

  addUserBtn.addEventListener("click", function () {
    addUserModal.style.display = "block";
  });

  cancelAddUserBtn.addEventListener("click", function () {
    addUserModal.style.display = "none";
  });

  saveUserBtn.addEventListener("click", function () {
    const userId = document.getElementById("userId").value;
    const userName = document.getElementById("username").value;
    const fullName = document.getElementById("fullname").value;
    const address = document.getElementById("address").value;
    const machineNumber = document.getElementById("machineNumber").value;
    const newRow = userTableBody.insertRow();
    newRow.innerHTML = `
        <td>${userId}</td>
        <td>${userName}</td>
        <td>${fullName}</td>
        <td><i class="fa-solid fa-lock"></i></td>
        <td>${address}</td>
        <td>${machineNumber}</td>
        <td><input type="checkbox"></td>
    `;

    addUserModal.style.display = "none";
  });
});
