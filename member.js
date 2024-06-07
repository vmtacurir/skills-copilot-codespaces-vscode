function skillsMember() {
    var ctx = document.getElementById("skillsMember").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["HTML/CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
            datasets: [{
                label: 'Skills',
                data: [90, 85, 80, 75, 70],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: "Skills",
                fontSize: 24
            }
        }
    });
}