google.load("visualization", "1", {packages:["corechart"]});

// When the google charts library loads, call the drawCharts function to get this party started.
google.setOnLoadCallback(drawCharts);

function drawCharts() {
  //Draw Timeline
  var onDateMouseover = function(e){
    console.log("E: ", $(e.elem));
    $(e.elem).fadeTo(400, 0.2, function() { $(e.elem).fadeTo(400, 1); });
  };

  var onDateMouseout = function(e){
    $(e.elem).css({'color': '#000'});
  };

  $('#timeline1').empty(); //first empty the div (so not to repeat it)
  TimeKnots.draw("#timeline1", resumeData['timelineData'], {dateFormat: "%B %Y", color: "#222", showLabels: true, labelFormat: "%Y", width: $('#timeline1').width(), onDateMouseover: onDateMouseover, onDateMouseout: onDateMouseout });


  //Draw Google Charts

  //Common Options for Experience Section
  var experienceOptions = {
    legend: {
      position : 'none'
    },
    chartArea: {
      top: 7,
      left: 7,
      width: '92%',
      height: '92%'
    },
    animation:{
      startup: true,
      duration: 500,
      easing: 'in',
    },
    colors:
      [ '#000',
        '#222',
        '#444',
        '#666',
        '#888',
        '#aaa'
      ]
  };


  //Beagle Duties
  var beagleData = new google.visualization.DataTable(resumeData['beagleData']);
  var beagleChart = new google.visualization.PieChart(document.getElementById('beagle-duties'));
  beagleChart.draw(beagleData, experienceOptions);

  //Axonify Duties
  var axonifyData = new google.visualization.DataTable(resumeData['axonifyData']);
  var axonifyChart = new google.visualization.PieChart(document.getElementById('axonify-duties'));
  axonifyChart.draw(axonifyData, experienceOptions);

  //D2L Duties
  var d2lData = new google.visualization.DataTable(resumeData['d2lData']);
  var d2lChart = new google.visualization.PieChart(document.getElementById('d2l-duties'));
  d2lChart.draw(d2lData, experienceOptions);

  //Electrolab Duties
  var electrolabData = new google.visualization.DataTable(resumeData['electrolabData']);
  var electrolabChart = new google.visualization.PieChart(document.getElementById('electrolab-duties'));
  electrolabChart.draw(electrolabData, experienceOptions);
}


//create trigger to resizeEnd event     
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        drawCharts();
    }, 500);
});