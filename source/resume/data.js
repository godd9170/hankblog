var resumeData = {
    "timelineData" : [
      { 
        name:"Accepted to Wilfrid Laurier University", 
        date: "2010-04-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Day_of_the_Fight_title.jpg/215px-Day_of_the_Fight_title.jpg",
        elem: "wlu"
      },
      { 
        name:"Began Studying at Wilfrid Laurier University", 
        date: "2010-04-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Day_of_the_Fight_title.jpg/215px-Day_of_the_Fight_title.jpg"
      },
      { 
        name:"Began Summer Term at Electrolab Training Systems",    
        date:"2011-05-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Seafarers_title.jpg/225px-Seafarers_title.jpg",
        elem: "#electrolab"
      },
      { 
        name:"Began Co-op Term at Desire2learn",
        date:"2012-05-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/7/72/LolitaPoster.jpg/215px-LolitaPoster.jpg",
        elem: "#d2l"
      },
      { 
        name:"Began Second Co-op Term at Desire2Learn", 
        date:"2013-01-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/f/f7/Fear_and_Desire_Poster.jpg",
        elem: "#d2l"
      },
      { 
        name:"Began Co-op Term at Axonify", 
        date: "2013-09-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/b/bc/PathsOfGloryPoster.jpg/220px-PathsOfGloryPoster.jpg",
        elem: "#axonify"
      },
      { 
        name:"Began Second Co-op Term at Axonify", 
        date:  "2014-09-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/4/48/Clockwork_orangeA.jpg/220px-Clockwork_orangeA.jpg",
        elem: "#axonify"
      },
      { 
        name:"Co-Founded Beagle Inc.", 
        date:  "2014-05-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/4/48/Clockwork_orangeA.jpg/220px-Clockwork_orangeA.jpg",
        elem: "#beagle"
      },
      {
        name:"Graduating Wilfrid Laurier University", 
        date:  "2016-04-01", 
        img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg",
        elem: "#wlu"
      }
    ],
    "beagleData" : {
      "cols": [
            {"id":"","label":"Duty","pattern":"","type":"string"},
            {"id":"","label":"Percentage","pattern":"","type":"number"}
          ],
      "rows": [
            {"c":[{"v":"Front-End Development","f":null},{"v":60,"f":null}]},
            {"c":[{"v":"Presentations","f":null},{"v":5,"f":null}]},
            {"c":[{"v":"Back-End Development","f":null},{"v":10,"f":null}]},
            {"c":[{"v":"Support","f":null},{"v":10,"f":null}]},
            {"c":[{"v":"Product Design","f":null},{"v":15,"f":null}]}
          ]
    },
    "axonifyData" : {
      "cols": [
            {"id":"","label":"Duty","pattern":"","type":"string"},
            {"id":"","label":"Percentage","pattern":"","type":"number"}
          ],
      "rows": [
            {"c":[{"v":"Sales Meeting Prep","f":null},{"v":45,"f":null}]},
            {"c":[{"v":"In-Bound Marketing","f":null},{"v":35,"f":null}]},
            {"c":[{"v":"Administrative Assistance","f":null},{"v":10,"f":null}]},
            {"c":[{"v":"Market Research","f":null},{"v":10,"f":null}]}
          ]
    },
    "d2lData" : {
      "cols": [
            {"id":"","label":"Duty","pattern":"","type":"string"},
            {"id":"","label":"Percentage","pattern":"","type":"number"}
          ],
      "rows": [
            {"c":[{"v":"SQL Database Maintenance","f":null},{"v":10,"f":null}]},
            {"c":[{"v":"Customer Support Calls","f":null},{"v":45,"f":null}]},
            {"c":[{"v":"Bug Reporting","f":null},{"v":45,"f":null}]},
          ]
    },
    "electrolabData" : {
      "cols": [
            {"id":"","label":"Duty","pattern":"","type":"string"},
            {"id":"","label":"Percentage","pattern":"","type":"number"}
          ],
      "rows": [
            {"c":[{"v":"IT","f":null},{"v":40,"f":null}]},
            {"c":[{"v":"Market Research","f":null},{"v":20,"f":null}]},
            {"c":[{"v":"Administrative Assistance","f":null},{"v":40,"f":null}]},
          ]
    }
}


  var kurbickFilms = 
  [
    { 
      name:"Day of the Fight", 
      date: "1951-04-26", 
      img: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Day_of_the_Fight_title.jpg/215px-Day_of_the_Fight_title.jpg"
    },
    { 
      name:"The Seafarers",    
      date:"1953-10-15", 
      img: "http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Seafarers_title.jpg/225px-Seafarers_title.jpg"
    },
    { 
      name:"Lolita (1962 film)",
      date:"1962-06-13", 
      img: "http://upload.wikimedia.org/wikipedia/en/thumb/7/72/LolitaPoster.jpg/215px-LolitaPoster.jpg"
    },
    { 
      name:"Fear and Desire", 
      date:    "1953-03-31", 
      img: "http://upload.wikimedia.org/wikipedia/en/f/f7/Fear_and_Desire_Poster.jpg"
    },
    { 
      name:"Paths of Glory", 
      date: "1957-12-25", 
      img: "http://upload.wikimedia.org/wikipedia/en/thumb/b/bc/PathsOfGloryPoster.jpg/220px-PathsOfGloryPoster.jpg"
    },
    { 
      name:"A Clockwork Orange (film)", 
      date:  "1971-12-19", 
      img: "http://upload.wikimedia.org/wikipedia/en/thumb/4/48/Clockwork_orangeA.jpg/220px-Clockwork_orangeA.jpg"
    },
    {
      name:"Killer's Kiss", 
      date:  "1955-09-28", 
      img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg"
    }
  ];
