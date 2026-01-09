document.addEventListener("DOMContentLoaded", () => {
  // TV
  const tjtvTypes = ["OLED", "QNED", "NanoCell", "UHD", "FHD and HD", "Audio"];
  const tjtvCounts = [9, 22, 3, 3, 2, 6];

  new Chart(document.getElementById("tjtvChart"), {
    type: "bar",
    data: {
      labels: tjtvTypes,
      datasets: [
        {
          label: "Number of TVs",
          data: tjtvCounts,
          backgroundColor: [
            "#6366f1",
            "#0ea5e9",
            "#22c55e",
            "#f59e0b",
            "#ef4444",
            "#8b5cf6",
          ],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Monitors
  const tjmonitorsTypes = ["Monitors", "", ""];
  const tjmonitorsCounts = [3, 0, 0];

  new Chart(document.getElementById("tjmonitorsChart"), {
    type: "bar",
    data: {
      labels: tjmonitorsTypes,
      datasets: [
        {
          label: "Number of monitors",
          data: tjmonitorsCounts,
          backgroundColor: ["#8b5cf6", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Refrigerators
  const tjfridgeTypes = [
    "Objet Collection",
    "Side by Side",
    "Multidoor",
    "Bottom Freezer",
    "Top Freezer",
  ];
  const tjfridgeCounts = [0, 5, 3, 51, 2];

  new Chart(document.getElementById("tjfridgeChart"), {
    type: "bar",
    data: {
      labels: tjfridgeTypes,
      datasets: [
        {
          label: "Number of Refrigerators",
          data: tjfridgeCounts,
          backgroundColor: [
            "#38bdf8",
            "#34d399",
            "#fbbf24",
            "#fb7185",
            "#a78bfa",
          ],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Microwaves
  const tjmicrowaveTypes = ["Microwaves", "", ""];
  const tjmicrowaveCounts = [16, 0, 0];

  new Chart(document.getElementById("tjmicrowaveChart"), {
    type: "bar",
    data: {
      labels: tjmicrowaveTypes,
      datasets: [
        {
          label: "Number of Microwaves",
          data: tjmicrowaveCounts,
          backgroundColor: ["#5838f8", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Built-in
  const tjbuiltInTypes = ["Built-in", "", ""];
  const tjbuiltInCounts = [4, 0, 0];

  new Chart(document.getElementById("tjbuiltInChart"), {
    type: "bar",
    data: {
      labels: tjbuiltInTypes,
      datasets: [
        {
          label: "Number of Built-in",
          data: tjbuiltInCounts,
          backgroundColor: ["#f83838", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Washing Machines
  const tjwmTypes = [
    "wm-washtower",
    "wm-washing-machines-with-dryer",
    "wm-washing-machine",
  ];
  const tjwmCounts = [3, 9, 72];

  new Chart(document.getElementById("tjwmChart"), {
    type: "bar",
    data: {
      labels: tjwmTypes,
      datasets: [
        {
          label: "Number of Washing Machines",
          data: tjwmCounts,
          backgroundColor: [
            "#d8f838",
            "#3479d3",
            "#fb2424",
            "#f471fb",
            "#8bf1fa",
          ],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Vacuum cleaners
  const tjvccTypes = ["Vacuum Cleaner", "", ""];
  const tjvccCounts = [28, 0, 0];

  new Chart(document.getElementById("tjvccChart"), {
    type: "bar",
    data: {
      labels: tjvccTypes,
      datasets: [
        {
          label: "Number of Vacuum Cleaners",
          data: tjvccCounts,
          backgroundColor: ["#7b38f8", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Conditioneer
  const tjconditioneerTypes = ["Conditioneer", "", ""];
  const tjconditioneerCounts = [7, 0, 0];

  new Chart(document.getElementById("tjconditioneerChart"), {
    type: "bar",
    data: {
      labels: tjconditioneerTypes,
      datasets: [
        {
          label: "Number of Conditioneer",
          data: tjconditioneerCounts,
          backgroundColor: ["#7b38f8", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // COMMON OPTIONS
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
