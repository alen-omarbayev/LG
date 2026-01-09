document.addEventListener("DOMContentLoaded", () => {
  // TV
  const tmtvTypes = ["OLED", "QNED", "NanoCell", "UHD", "Audio"];
  const tmtvCounts = [11, 9, 9, 10, 2];

  new Chart(document.getElementById("tmtvChart"), {
    type: "bar",
    data: {
      labels: tmtvTypes,
      datasets: [
        {
          label: "Number of TVs",
          data: tmtvCounts,
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
  const tmfridgeTypes = ["Top Freezer", "", ""];
  const tmfridgeCounts = [6, 0, 0];

  new Chart(document.getElementById("tmfridgeChart"), {
    type: "bar",
    data: {
      labels: tmfridgeTypes,
      datasets: [
        {
          label: "Number of Refrigerators",
          data: tmfridgeCounts,
          backgroundColor: ["#38bdf8", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Microwaves
  const tmmicrowaveTypes = ["Microwaves", "", ""];
  const tmmicrowaveCounts = [10, 0, 0];

  new Chart(document.getElementById("tmmicrowaveChart"), {
    type: "bar",
    data: {
      labels: tmmicrowaveTypes,
      datasets: [
        {
          label: "Number of Microwaves",
          data: tmmicrowaveCounts,
          backgroundColor: ["#5838f8", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Built-in
  const tmbuiltInTypes = ["Built-in", "", ""];
  const tmbuiltInCounts = [0, 0, 0];

  new Chart(document.getElementById("tmbuiltInChart"), {
    type: "bar",
    data: {
      labels: tmbuiltInTypes,
      datasets: [
        {
          label: "Number of Built-in",
          data: tmbuiltInCounts,
          backgroundColor: ["#f83838", "transparent", "transparent"],
          borderRadius: 10,
          maxBarThickness: 60,
        },
      ],
    },
    options: commonOptions(),
  });

  // Washing Machines
  const tmwmTypes = [
    "wm-washing-machines",
    "wm-washing-machines-with-dryer",
    "wm-dryers",
  ];
  const tmwmCounts = [41, 3, 4];

  new Chart(document.getElementById("tmwmChart"), {
    type: "bar",
    data: {
      labels: tmwmTypes,
      datasets: [
        {
          label: "Number of Washing Machines",
          data: tmwmCounts,
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
  const tmvccTypes = ["Vacuum Cleaner", "", ""];
  const tmvccCounts = [11, 0, 0];

  new Chart(document.getElementById("tmvccChart"), {
    type: "bar",
    data: {
      labels: tmvccTypes,
      datasets: [
        {
          label: "Number of Vacuum Cleaners",
          data: tmvccCounts,
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
