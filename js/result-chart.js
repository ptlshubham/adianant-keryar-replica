/*==== result-chart =====*/
var ctx = document.getElementById('result-chart');
Chart.defaults.global.defaultFontFamily = 'Barlow';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#233d63';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan', 'Feb', 'Oct-19', 'Nov-19', 'Dec-19', 'Jan-20' ],
        datasets: [{
            label: "One",
            data: [ 5, 9, 7, 15, 13, 12],
            backgroundColor: 'rgba(255,255,255, 0.0)',
            borderColor: '#4021ba',
            pointBackgroundColor: '#ffffff',
            pointHoverBackgroundColor: '#4021ba',
            pointBorderColor: '#4021ba',
            borderWidth: 2,
            pointRadius: 4
        }, {
            label: "Two",
            data: [5, 7, 9, 9.5, 11, 12.5],
            backgroundColor: 'rgba(255,255,255, 0.0)',
            borderColor: '#3ebfc4',
            pointBackgroundColor: '#ffffff',
            pointHoverBackgroundColor: '#3ebfc4',
            pointBorderColor: '#3ebfc4',
            borderWidth: 2,
            pointRadius: 4
        }]
    },

    // Configuration options go here
    options: {
        tooltips: {
            custom: function(tooltip) {
                if (!tooltip) return;
                // disable displaying the color box;
                tooltip.displayColors = false;
            },
            titleFontColor: '#fff',
            bodyFontColor: '#fff',
            backgroundColor: '#233d63',
            xPadding: 15,
            yPadding: 15,
            borderWidth: 3,
            borderColor:  "rgba(255, 255, 255, .1)"
        },
        legend: {
            display: false,
            tooltips: {
                displayColors:false,
            },
            labels: {
                fontSize: 14,
                fontStyle: 'bold',
                fontColor: '#000',
                boxWidth: 50,
                padding: 25,
                defaultFontStyle: 'bold',
                fontFamily: 'Barlow',
                usePointStyle: true,
            }
        },

        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: '#eee',
                },
                ticks: {
                    fontSize: 14,
                }
            }]

        },
        elements: {
            line: {
                //tension: 0.00001,
                tension: 0.4,
                borderWidth: 1,
            }
        }
    }
});