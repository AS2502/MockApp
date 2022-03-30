
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