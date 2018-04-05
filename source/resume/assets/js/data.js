var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
var today = yyyy + "-" + mm + "-" + dd;

var resumeData = {
  timelineData: [
    {
      name:
        "<div class='lead-up'>Accepted to</div><div>Wilfrid Laurier University</div>",
      date: "2010-04-01",
      elem: "wlu"
    },
    {
      name:
        "<div class='lead-up'>Began Studying at </div><div>Wilfrid Laurier University</div>",
      date: "2010-09-01"
    },
    {
      name:
        "<div class='lead-up'>Began Summer Term at </div><div>Electrolab Training Systems</div>",
      date: "2011-05-01",
      elem: "#electrolab"
    },
    {
      name:
        "<div class='lead-up'>Began Co-op Term at </div><div>Desire2learn</div>",
      date: "2012-05-01",
      elem: "#d2l"
    },
    {
      name:
        "<div class='lead-up'>Began Second Co-op Term at </div><div>Desire2Learn</div>",
      date: "2013-01-01",
      elem: "#d2l"
    },
    {
      name: "<div class='lead-up'>Began Co-op Term at </div><div>Axonify</div>",
      date: "2013-09-01",
      elem: "#axonify"
    },
    {
      name:
        "<div class='lead-up'>Began Second Co-op Term at </div><div>Axonify</div>",
      date: "2014-09-01",
      elem: "#axonify"
    },
    {
      name: "<div class='lead-up'>Co-Founded </div><div>Beagle Inc.</div>",
      date: "2014-05-01",
      elem: "#beagle"
    },
    {
      name:
        "<div class='lead-up'>Graduating </div><div>Wilfrid Laurier University</div>",
      date: "2016-04-01",
      elem: "#wlu"
    },
    {
      name: "<div class='lead-up'>Began Working at </div><div>Saasli</div>",
      date: "2016-04-16",
      elem: "#saasli"
    },
    {
      name: "<div class='lead-up'>Launched </div><div>Shakespeare.ai</div>",
      date: "2017-04-30",
      elem: "#shakespeare"
    },
    {
      name: "<div class='lead-up'>Began working at </div><div>Guestlogix</div>",
      date: "2017-06-30",
      elem: "#saasli"
    },
    {
      name:
        "<div class='lead-up'>Presently Working at </div><div>Guestlogix</div>",
      date: today,
      elem: "#guestlogix"
    }
  ],
  guestlogixData: {
    cols: [
      { id: "", label: "Duty", pattern: "", type: "string" },
      { id: "", label: "Percentage", pattern: "", type: "number" }
    ],
    rows: [
      { c: [{ v: "Team Management", f: null }, { v: 30, f: null }] },
      { c: [{ v: "Back-End Development", f: null }, { v: 10, f: null }] },
      { c: [{ v: "Front-End Development", f: null }, { v: 55, f: null }] },
      { c: [{ v: "Hiring", f: null }, { v: 5, f: null }] }
    ]
  },
  shakespeareData: {
    cols: [
      { id: "", label: "Duty", pattern: "", type: "string" },
      { id: "", label: "Percentage", pattern: "", type: "number" }
    ],
    rows: [
      { c: [{ v: "Devops", f: null }, { v: 30, f: null }] },
      { c: [{ v: "Back-End Development", f: null }, { v: 30, f: null }] },
      { c: [{ v: "Front-End Development", f: null }, { v: 30, f: null }] },
      { c: [{ v: "Management", f: null }, { v: 10, f: null }] }
    ]
  },
  saasliData: {
    cols: [
      { id: "", label: "Duty", pattern: "", type: "string" },
      { id: "", label: "Percentage", pattern: "", type: "number" }
    ],
    rows: [
      { c: [{ v: "Systems Integrations", f: null }, { v: 45, f: null }] },
      { c: [{ v: "Back-End API Development", f: null }, { v: 5, f: null }] },
      { c: [{ v: "Support", f: null }, { v: 15, f: null }] },
      { c: [{ v: "Customer Success", f: null }, { v: 35, f: null }] }
    ]
  },
  beagleData: {
    cols: [
      { id: "", label: "Duty", pattern: "", type: "string" },
      { id: "", label: "Percentage", pattern: "", type: "number" }
    ],
    rows: [
      { c: [{ v: "Front-End Development", f: null }, { v: 40, f: null }] },
      { c: [{ v: "Back-End Development", f: null }, { v: 10, f: null }] },
      { c: [{ v: "Support", f: null }, { v: 15, f: null }] },
      { c: [{ v: "Product Design", f: null }, { v: 15, f: null }] },
      { c: [{ v: "Customer Success", f: null }, { v: 20, f: null }] }
    ]
  },
  axonifyData: {
    cols: [
      { id: "", label: "Duty", pattern: "", type: "string" },
      { id: "", label: "Percentage", pattern: "", type: "number" }
    ],
    rows: [
      { c: [{ v: "Sales Meeting Prep", f: null }, { v: 35, f: null }] },
      { c: [{ v: "In-Bound Marketing", f: null }, { v: 35, f: null }] },
      { c: [{ v: "Administrative Assistance", f: null }, { v: 5, f: null }] },
      { c: [{ v: "Market Research", f: null }, { v: 5, f: null }] },
      { c: [{ v: "Customer Success", f: null }, { v: 15, f: null }] }
    ]
  },
  d2lData: {
    cols: [
      { id: "", label: "Duty", pattern: "", type: "string" },
      { id: "", label: "Percentage", pattern: "", type: "number" }
    ],
    rows: [
      { c: [{ v: "SQL Database Maintenance", f: null }, { v: 10, f: null }] },
      { c: [{ v: "Customer Support Calls", f: null }, { v: 45, f: null }] },
      { c: [{ v: "Bug Reporting", f: null }, { v: 30, f: null }] },
      { c: [{ v: "Technical Account Managment", f: null }, { v: 15, f: null }] }
    ]
  },
  skills: {
    "Adobe Illustrator": "Yesssiiir",
    "Microsoft Powerpoint":
      "https://www.useloom.com/embed/bbd2474a6fda4970b67afb1688fbd272",
    Jquery: "https://www.useloom.com/embed/443ab2527ed8494197b36623bd5441ba",
    Javascript:
      "https://www.useloom.com/embed/1cc79114e5e34903a8e0ec27a59a752c",
    HTML: "https://www.useloom.com/embed/e4674a7e63724b9a898f5bc45276c19f",
    CSS: "https://www.useloom.com/embed/f2add66065644c88834527ef79e43626",
    Webpack: "https://www.useloom.com/embed/8c6d3e487e9d4a61bcd9f86ee57bd160",
    React: "https://www.useloom.com/embed/1f897746ea2c4dba8f86388a3be4ac69",
    Redux: "https://www.useloom.com/embed/7f975f66eb8741568272b5f568082e07",
    Heroku: "https://www.useloom.com/embed/ce666eb057384aa9aa6cd3117a40e857",
    AWS: "https://www.useloom.com/embed/0124f0fff0704152b73775a6d01d2b14",
    CircleCI: "https://www.useloom.com/embed/c5f54ff855904444ba15059348c4f4ca",
    Git: "https://www.useloom.com/embed/f3639ea5e35a481187977125dd2736ae",
    Django: "https://www.useloom.com/embed/4143c66c0f9844f59361dd81cb2ce7bd",
    "Node Js": "https://www.useloom.com/embed/44275a809844430d929febe37b7ffdb8",
    PostgreSQL:
      "https://www.useloom.com/embed/c16903d24bce456e9cf7dac5a28550aa",
    MySQL: "https://www.useloom.com/embed/f0b2bb1d06df4dd599bd416f6b507ee2",
    "Microsoft SQL Server":
      "https://www.useloom.com/embed/c63d4a8ddde745c3a5c2ff71fad23be8",
    Python: "https://www.useloom.com/embed/14955d642d744c03b98b4b0f88cf27a8",
    "Salesforce (APEX)":
      "https://www.useloom.com/embed/2e59efc13422495f87259a2329d7997b",
    "Unix (CentOS)":
      "https://www.useloom.com/embed/674909cfeca3449b863fe66d54b0b620"
  }
};

var resumeText = {
  scripting: [
    "<p>Exploring such a wide array of front-end technologies, invariably exposes you to some HTML. In doing so, I've also worked with a handful of HTML5 elements like <code>&#60canvas&#62</code> and  <code>&#60audio&#62</code>.</p>",
    "<p>I've become very comfortable working with CSS, and finding myself relying in W3Schools less and less for reminders. I prefer to user SCSS when dealing with larger scale front ends. Webpack has a nice compiler that takes care of the CSS generation as well as slots in browser compatibility attributes.</p>",
    "<p>&#34What&#39s the difference between Java and Javascript? One is a convoluted over contributed, &#39toy&#39  language, and the other is a web scripting language.&#34 HAHA! <span style='font-size: 8px'>(sorry)</span> I used to hate the idea of the &#39callback&#39 soup you&#39d invariably encounter with Javascript, but there has been so much movement, and improvements like ECMAscript that has made me very comfortable with it.</p>",
    "<p>React is my Javascript framework of choice. It makes organizing larger scale Javascript projects extremely modular <span style='font-size: 8px'>(yay for code reuse!)</span> as well as scalable, all while being extremely fast. I&#39ve got a good understanding of the Flux architecture, and an even stronger grasp on component state and the virtual DOM. Check out my <a href='http://wiki.henrygoddard.com'>Wiki-Game</a> side project for an example.</p>",
    "<p>D3 first caught my eye on some Data Viz stuff I was perusing at <a href='https://www.fivethirtyeight.com'>FiveThirtyEight</a>. I quickly grew to admire Mike Bostock, he replied to my <a href='https://twitter.com/mbostock/status/666686236979953664'>tweet</a> once so I guess you could say we&#39re buddies. The timeline on this resume uses D3, and <a href='http://localhost:4000/2015/10/06/baseball/'>this blog post</a> of mine showcases some of it&#39s map charting capabilities.</p>"
  ],
  "scripting-default":
    "<p>While one of my degrees is in Computer Electronics, it was through my work at Beagle and various side projects where I learned the bulk of my web development skills.</p>",
  server: [
    "<p>Python is my go to language for any problems I can tackle programatically. Whether a simple function to tidy some text files, or a fully functional web application, I know I can lean on Python to accomplish what I'm after. It was the first language I learned, and was told it was more of a &#39toy&#39 chosen for it&#39s simplicity. Turns out it&#39s refuses to become irrelevant.</p>",
    "<p>Being that I was so comfortable with Javascript, I thought I&#39d investigate what all this NodeJS hype was about. I found it to be an effective way to get a solid web server off the ground. While I wouldn&#39t consider myself a <em>Nodey</em>, I do love the community, and the diversity of pluggable modules that exist for it. My <a href='http://wiki.henrygoddard.com'>Wiki-Game</a> uses NodeJS to fetch Wikipedia articles.</p>",
    "<p>The backend of Beagle is built in Django, and is where I picked up this well laid out framework. I became comfortable integrating it with other server-side utilities, and writing API endpoints.</p>",
    "<p>My first co-op term at Desire2Learn required that I spent a great deal of time in MSSQL to investigate support tickets. I became comfortable merging tables, writing triggers and few other advanced SQL techniques.</p>",
    "<p>Postgres is my database of choice. It seems to be gaining a lot of support, and more apps are being built on top of it. AWS has managed Postgres support, and it works well with my web framework of choice, Django.</p>"
  ],
  "server-default":
    "<p>As much fun as it is to create visually appealing front-ends, there wouldn&#39t be much depth without some server interfacing. Being with such a small team at Beagle had me doing my fair share &#39under the hood&#39 on the server-side of things.</p>",
  webapp: [
    "<p>A passion of mine is in-bound marketing. Consumers have all the power these days, and capturing their attention no longer means blinking banner ads or annoying pop-ups. Relevant targeted content is king, and Hubspot is the best tool I&#39ve see for indicating what is, and what isn&#39t working. It&#39s also a strong CRM to boot.</p>",
    "<p>I really can&#39t imagine collaborating with other developers without using git. Github is my first stop on any given day of development. I feel very comfortable submitting issues and pull requests, migrating branches and contributing to the strong internal wiki that's offered. I&#39ve even got a good grasp on the more administrative features like the <em>Pulse</em> and team management.</p>",
    "<p>Intercom is a great example of what you get when design is a core value. Becoming proficient in it took no time. I was responsible for integrating it into Beagle, and then in charge of responding to our user&#39 support concerns. I also integrated a number of custom metrics which greatly simplified the support process.</p>",
    "<p>Google Analytics is an absolute no-brainer when trying to better understand your audience. I've worked with it extensively and am extremely comfortable setting it up and digging through the data it collects. In fact, by merely visiting this page, I&#39m collecting data about you using it right now! <span style='font-size: 8px'>(sorry if that&#39s creepy)</span></p>",
    "<p>Harnessing the open source community couldn&#39t be easier thanks to NPM. I integrate and utilize NPM modules all the time, and feel extremely comfortable doing so.</p>",
    "<p>It&#39s an exciting time out there for webapps. Having helped build one, I&#39ve a special kind of appreciation for this new age of software we are entering. Above you will find some of the tools that I have grown comfortable using.</p>"
  ],
  "webapp-default":
    "<p>As much fun as it is to create visually appealing front-ends, there wouldn&#39t be much depth without some server interfacing. Being with such a small team at Beagle had me doing my fair share &#39under the hood&#39 on the server-side of things.</p><p>Click any of the bars to take a closer look.</p>"
};
