
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Label 1",
          data: [10, 12, 8, 14, 10, 18],
          borderColor: "#6366f1",
          tension: 0.4,
        },
        {
          label: "Label 2",
          data: [5, 6, 7, 5, 6, 7],
          borderColor: "#facc15",
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
});
