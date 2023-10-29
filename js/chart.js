function createCanva(iGraph) {
  const canva = document.createElement("canvas");
  canva.width = null;
  canva.height = null;
  canva.removeAttribute("style");
  canva.removeAttribute("width");
  canva.removeAttribute("height");
  canva.className = "chart";
  iGraph.appendChild(canva);
  return canva;
}

function initializeChart(
  { confirmed, active, deaths, recovered, confirmed_diff },
  ichart,
  icountry
) {
  let barChart = null;
  if (barChart) {
    barChart.destroy();
  }
  const chartData = {
    labels: [
      "Confirmados",
      "Ativos",
      "Mortes",
      "Recuperados",
      "Confirmados Descartados",
    ],
    datasets: [
      {
        label: icountry,
        data: [confirmed, active, deaths, recovered, confirmed_diff],
        backgroundColor: ["orange", "yellow", "red", "green", "blue"],
        hoverOffset: 5,
      },
    ],
  };
  barChart = new Chart(ichart, {
    type: "pie",
    data: chartData,
  });
}
export { initializeChart, createCanva };
