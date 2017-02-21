// Load up some google charts
google.charts.load('current', {packages: ['corechart', 'bar']});

// When the google charts library loads, call the drawCharts function to get this party started.
google.charts.setOnLoadCallback(drawCharts);



var onDateMouseover = function(e){
  console.log("E: ", $(e.elem));
  $(e.elem).fadeTo(400, 0.2, function() { $(e.elem).fadeTo(400, 1); });
};

var onDateMouseout = function(e){
  $(e.elem).css({'color': '#000'});
};

var skillClick = function(e, chartid) {
  console.log(e.targetID);
  var regex = /bar#0#(\d+)/;
  var text;
  if (e.targetID.match(regex)) {
    text = resumeText[chartid][e.targetID.match(regex)[1]];
  } else {
    text = resumeText[chartid + '-default'];
  }
  $('#' + chartid + '-text').html(text); //apply the text
};

function drawCharts() {
  //Draw Timeline

  $('#timeline1').empty(); //first empty the div (so not to repeat it)
  TimeKnots.draw("#timeline1", 
    resumeData['timelineData'], 
      { dateFormat: "%B %Y", 
        color: "#222", 
        showLabels: true, 
        labelFormat: "%Y", 
        width: $('#timeline1').width(), 
        onDateMouseover: onDateMouseover, 
        onDateMouseout: onDateMouseout 
      }
    );


  //Draw Google Charts

  var formatter = new google.visualization.NumberFormat({pattern:'#,###%'}); //percentage formatter

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

  //Common Options for Education Section

  var educationOptions = {
    chart: {
      title: "Grades",
    },
    animation: {
      startup: true
    },
    chartArea: {
      top: 7,
      left: 7,
      width: '75%',
      height: '80%'
    },
    legend: { position: 'none' },
    bar: { groupWidth: "60%" },
    vAxis: {
      minValue: 1,
      maxValue: 0,
      format: 'percent',
      textPosition: 'out'
    },
    hAxis: {
      title: "Courses",
      slantedText: false,
      textPosition: 'out',
      showTextEvery: 1,
      maxTextLines: 3,
      maxAlternation: 4,
      viewWindowMode: 'pretty',
      textStyle: {
        fontSize: 9
      }
    }
  };

  // Skills Options

    var skillsOptions = {
    chartArea: {
      width: '60%',
      height: '80%'
    },
    legend: { position: 'none' },
    bar: { groupWidth: "60%" },
    hAxis: {
      minValue: 0,
      maxValue: 1,
      format: 'percent',
      textPosition: 'none'
    },
    vAxis: {
      title: "Skills",
    },
  };

//
// SKILLS
//

  //Scripting Skills
  var scriptData = new google.visualization.DataTable(resumeData['scriptData']);
  var scriptchart = new google.visualization.BarChart(document.getElementById('script-chart'));
  formatter.format(scriptData, 1);
  scriptchart.draw(scriptData, skillsOptions);
  google.visualization.events.addListener(scriptchart, 'click', function (e) {
    var selection = scriptchart.getSelection();
    skillClick(e, 'scripting');
  }); //add onclick

  //Server Side Skills
  var serverData = new google.visualization.DataTable(resumeData['serverData']);
  var serverchart = new google.visualization.BarChart(document.getElementById('server-chart'));
  formatter.format(serverData, 1);
  serverchart.draw(serverData, skillsOptions);
  google.visualization.events.addListener(serverchart, 'click', function (e) {
    var selection = serverchart.getSelection();
    skillClick(e, 'server');
  }); //add onclick

  //Web App Skills
  var webappData = new google.visualization.DataTable(resumeData['webappData']);
  var webappchart = new google.visualization.BarChart(document.getElementById('webapp-chart'));
  formatter.format(webappData, 1);
  webappchart.draw(webappData, skillsOptions);
  google.visualization.events.addListener(webappchart, 'click', function (e) {
    var selection = webappchart.getSelection();
    skillClick(e, 'webapp');
  }); //add onclick

//
// EDUCATION
//

  //Computing and Computer Electronics
  var CCEData = new google.visualization.DataTable(resumeData['CCEData']);
  var CCEchart = new google.visualization.ColumnChart(document.getElementById('CCE-grades'));
  formatter.format(CCEData, 1);
  CCEchart.draw(CCEData, educationOptions);

  //Business Administration
  var BBAData = new google.visualization.DataTable(resumeData['BBAData']);
  var BBAchart = new google.visualization.ColumnChart(document.getElementById('BBA-grades'));
  formatter.format(BBAData, 1);
  BBAchart.draw(BBAData, educationOptions);

//
// EXPERIENCE
//

  //Saasli Duties
  var saasliData = new google.visualization.DataTable(resumeData['saasliData']);
  var saasliChart = new google.visualization.PieChart(document.getElementById('saasli-duties'));
  saasliChart.draw(saasliData, experienceOptions);

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