document.getElementById("registration-form").addEventListener("submit", (e) => {
  e.preventDefault();
  getFormData();
});

const getFormData = () => {
  const formData = new FormData(document.getElementById("registration-form"));
  const data = {};

  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    } else {
      data[key] = value;
    }
  }
  displayTable(data);
};

const displayTable = (data) => {
  const languages = Array.isArray(data["languages[]"])
    ? data["languages[]"].join(", ")
    : data["languages[]"];
  const tableContent = `
        <table>
            <tr><th>Ім'я</th><td>${data.name}</td></tr>
            <tr><th>Прізвище</th><td>${data.surname}</td></tr>
            <tr><th>Дата народження</th><td>${data.birthdate}</td></tr>
            <tr><th>Стать</th><td>${data.gender}</td></tr>
            <tr><th>Місто</th><td>${data.city}</td></tr>
            <tr><th>Адреса</th><td>${data.address}</td></tr>
            <tr><th>Мови, якими володієте</th><td>${languages}</td></tr>
        </table>
    `;

  const tableContainer = document.getElementById("table-container");
  tableContainer.style.display = "block";
  tableContainer.innerHTML = tableContent;
  document.getElementById("registration-form").style.display = "none";
};
