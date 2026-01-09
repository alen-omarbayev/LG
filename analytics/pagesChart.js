document.addEventListener("DOMContentLoaded", () => {
  const countryTypes = ["Mongolia", "Turkmenistan", "Tajikistan"];
  const countryCounts = [41, 23, 28];

  new Chart(document.getElementById("pagesChart"), {
    type: "bar",
    data: {
      labels: countryTypes,
      datasets: [
        {
          label: "Pages by Country",
          data: countryCounts,
          backgroundColor: ["#6366f1", "#0ea5e9", "#22c55e"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  function commonOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb",
            font: { size: 14 },
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#cbd5f5" },
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#cbd5f5", stepSize: 5 },
          grid: { color: "#334155" },
        },
      },
    };
  }
});
