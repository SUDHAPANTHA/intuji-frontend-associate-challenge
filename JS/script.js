
      const ctx = document.getElementById("analyticsChart").getContext("2d");
      const analyticsChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Income",
              data: [5000, 7000, 4000, 8000, 9000, 10000, 11000],
              borderColor: "#4b7bec",
              fill: false,
              tension: 0.4,
            },
          ],
        },
      });
    