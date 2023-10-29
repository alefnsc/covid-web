import { getData, getCountries } from "./service/apiData.js";
import { initializeChart, createCanva } from "./chart.js";

// const ibtn = document.getElementById("iBtn");
const iAddbtn = document.getElementById("iAddBtn");
const iClrbtn = document.getElementById("iClrbtn");
const icountry = document.getElementById("iCountry");
const idate = document.getElementById("iDate");
const ichart = document.getElementById("iChart");
const iGraph = document.getElementById("iGraph");

function showAlert() {
  Toastify({
    text: "Certifique-se de preencher todos os campos",
    className: "alert",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #ff3d3d, #cc1212)",
    },
  }).showToast();
}

iClrbtn.addEventListener("click", () => {
  iGraph.innerHTML = "";
});

iAddbtn.addEventListener("click", () => {
  if (idate.value && icountry.value) {
    getData(idate.value, icountry.value).then((data) => {
      const values = data.data.data;
      const newCanva = createCanva(iGraph);
      initializeChart(values, newCanva, icountry.value);
    });
  } else {
    showAlert();
  }
});

getCountries().then((data) =>
  data.data.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    icountry.appendChild(option);
  })
);
