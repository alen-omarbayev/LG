document.addEventListener("DOMContentLoaded", () => {
  // TV
  const tvTypes = ["OLED", "QNED", "NanoCell", "UHD", "FHD-UHD", "Audio"];
  const tvCounts = [10, 16, 5, 36, 1, 7];

  new Chart(document.getElementById("tvChart"), {
    type: "bar",
    data: {
      labels: tvTypes,
      datasets: [
        {
          label: "Number of TVs",
          data: tvCounts,
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

  // Refrigerators
  const fridgeTypes = [
    "Instaview",
    "Side by Side",
    "Multidoor",
    "Bottom Freezer",
    "Objet Collection",
  ];
  const fridgeCounts = [4, 14, 6, 24, 4];

  new Chart(document.getElementById("fridgeChart"), {
    type: "bar",
    data: {
      labels: fridgeTypes,
      datasets: [
        {
          label: "Number of Refrigerators",
          data: fridgeCounts,
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
  const microwaveTypes = ["Microwaves", "", ""];
  const microwaveCounts = [11, 0, 0];

  new Chart(document.getElementById("microwaveChart"), {
    type: "bar",
    data: {
      labels: microwaveTypes,
      datasets: [
        {
          label: "Number of Microwaves",
          data: microwaveCounts,
          backgroundColor: ["#5838f8", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Built-in
  const builtInTypes = ["Built-in", "", ""];
  const builtInCounts = [17, 0, 0];

  new Chart(document.getElementById("builtInChart"), {
    type: "bar",
    data: {
      labels: builtInTypes,
      datasets: [
        {
          label: "Number of Built-in",
          data: builtInCounts,
          backgroundColor: ["#f83838", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Washing Machines
  const wmTypes = [
    "wm-washtower",
    "wm-washing-machines",
    "wm-washing-machines-with-dryer",
    "wm-dryers",
    "styler",
  ];
  const wmCounts = [3, 36, 3, 3, 2];

  new Chart(document.getElementById("wmChart"), {
    type: "bar",
    data: {
      labels: wmTypes,
      datasets: [
        {
          label: "Number of Washing Machines",
          data: wmCounts,
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
  const vccTypes = ["Vacuum Cleaner", "", ""];
  const vccCounts = [15, 0, 0];

  new Chart(document.getElementById("vccChart"), {
    type: "bar",
    data: {
      labels: vccTypes,
      datasets: [
        {
          label: "Number of Vacuum Cleaners",
          data: vccCounts,
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
