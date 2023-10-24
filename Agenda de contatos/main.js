function addContact() {
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const contactList = document.getElementById("contact-list");

  const name = nameInput.value;
  const phone = phoneInput.value;

  if (name.trim() === "" || phone.trim() === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const newRow = contactList.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  cell1.innerHTML = name;
  cell2.innerHTML = phone;

  nameInput.value = "";
  phoneInput.value = "";
}

document.getElementById("add-contact").addEventListener("click", addContact);
