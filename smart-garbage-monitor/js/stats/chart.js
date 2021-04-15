var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset

    data: {
        labels: [],
        datasets: [{

            label: " ",
            backgroundColor: 'rgba(0,0,255)',
            borderColor: 'rgb(255,0,0)',
            data: [],

        }]
    },
    // Configuration options go here
    options: {
        responsiveAnimationDuration: 5,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

});

//cand se apasa sticla,hartia sau menajer,vom aduce datele prin ajax si le vom pune in chart
var items = document.getElementsByClassName('button');

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        var gunoi = this.innerText;
        statisticaGunoaie(gunoi, chart);
    }
}
//cand se apasa pe un anumit cartier,vom aduce datele prin ajax si le vom pune in chart
var items2 = document.getElementsByName('cartier')
for (var i = 0; i < items2.length; i++) {
    items2[i].onclick = function() {

        var cartier = this.innerText;
        cartierStat(cartier, chart);

    }
}
//cand se apasa pe o anumita luna,vom aduce datele prin ajax si le vom pune in chart
var items3 = document.getElementsByName('luna');
for (var i = 0; i < items3.length; i++) {
    items3[i].onclick = function() {
        var luna = this.innerText;

        lunaStat(luna, chart);

    }
}