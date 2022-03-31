
var xValu = [14,16,18,20,22,24,26,28,30,2,4,6];

new Chart("multi_line", {
  type: "line",
  data: {
    labels: xValu,
    datasets: [{ 
      data: [400,380,337,355,350,330, 310, 325,335,345,370,397],
      borderColor: "red",
      fill: "red"
    }, { 
      data: [290,280,276,259,250,260,278,267,287,299,305,310],
      borderColor: "green",
      fill: "green"
    }, { 
      data: [210,240,210,250,240,260,246,240,220,240,230,220],
      borderColor: "blue",
      fill: "blue"
    }]
  },
  options: {
    legend: {display: false}
  }
});
//scatter Graph
var xyValues = [
  {x:2, y:80},
  {x:4, y:82},
  {x:5, y:79},
  {x:7, y:75},
  {x:9, y:77},
  {x:12, y:82},
  {x:14, y:84},
  {x:16, y:75},
  {x:18, y:72},
  {x:20, y:70},
  {x:21, y:73},
  {x:23, y:75},
  {x:24, y:79},
  {x:26, y:84},
  {x:27, y:80},
  {x:29, y:85}
 
];

new Chart("myscatter", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 5,
      pointBackgroundColor: "#0058a9",
      data: xyValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 0, max:30}}],
      yAxes: [{ticks: {min: 0, max:100}}],
    }
  }
});

//Radar Graph
var marksCanvas = document.getElementById("radarchart");

var marksData = {
labels: ["Avg. Of Slides", "Text", "Text", "Accuracy", "Text", "Text"],
datasets: [{
    label: "Technician",
    backgroundColor: "rgba(78, 120, 111, 0.5)",
    
    data: [367, 275, 400, 338, 175, 400]
}, {
    label: "Scientist",
    backgroundColor: "rgba(109, 65, 107, 0.5)",
    data: [358, 358, 308, 330, 200, 358]
},
            {
    label: "Pathelogist",
    backgroundColor: "rgba(186, 97, 107, 0.5)",
    data: [285, 225, 175, 264, 320, 175]
}]
};

var radarChart = new Chart(marksCanvas, {
type: 'radar',
data: marksData
});

//doughnut Graph

var xValues = ["Cell Types", "Pattern", "Cell Fractions", "Others"];
var yValues = [4521, 3124, 2832, 1834];
var barColors = [
"#60bcac",
"#b98823",
"#6e578b",
"#afafaf"
];

new Chart("myChart", {
type: "doughnut",
data: {
    
    datasets: [{
    backgroundColor: barColors,
    data: yValues
    }]
},
options: {
    
}
});


//Graph for entries
var xArray = ["human", "Zebrafish", "Fruit Fly", "Rat", "Rabbit","Mouse", "Pig", "Golden Hamster", "Guinea Pigs", "Dog","Monkey", "Horse"];
                    var yArray = [83233, 78252, 63256, 62789, 55269, 50123,  49565, 44362, 33896, 33256, 21023, 20321];

                    var data = [{
                    x:xArray,
                    y:yArray,
                    type:"bar"
                    }];

                    var layout = {title:""};

                    Plotly.newPlot("myPlot", data, layout);