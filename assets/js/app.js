var members = {
    ["Raghav Pillai"]: {
        Role: "Data Visualization & Interface",
        Study: "CS Junior",
        Bio: "Hey! My name is Raghav Pillai, and I'm a Junior here at UTD studying Computer Science. I'm hoping to go into an emerging technology like deep learning or edge computing in the future. I handle the development of all of the human-car interfacing, being able to see and interpret the massive amount of data and telemetry we get from our stack and maintain our website (as you're reading!). <br/><br/>I'm originally from Arkansas, but grew up in the Dallas Metroplex. I've been interested in machines and computers for as long as I can remember, and have worked on both hardware and software side of things. I grew up modding and creating small games, which got me into programming and designing projects. If I'm not working on projects for work or doing schoolwork, I'm probably watching a show or playing some games. <br/><br/>We'll be sure to put on a good show here at Nova, and I'm excited for the possibilities with our team."
    },
    ["Justin Ruths"]: {
        Role: "Team Advisor",
        Study: "Professor",
        Bio: "N/A"
    },
    ["Will Heitman"]: {
        Role: "Team Lead",
        Study: "CE Junior",
        Bio: "I've loved robots ever since I was a little kid. Something about machines that can help with human tasks just sounds magical to me. I'm a junior in Computer Engineering hailing from Baton Rouge, Louisiana. I like to bike, cook, and read. My teammates usually see me in Leader Mode, but I'm actually introverted.<br/><br/>I have some really talented teammates working on this project, and I just want to support them in any way I can. And of course, I want this car to drive itself as my <strike>personal chauffeur</strike> ahem, a valuable research platform for UTD!<br/><br/>I'm always open to questions or comments about our work. You can reach me at Will.Heitman@utdallas.edu."
    },
    ["Joshua Williams"]: {
        Role: "Software Architect",
        Study: "CE Junior",
        Bio: "My name is Joshua Williams, and I'm the software architect for Nova. I'm currently in my Junior year at UTD pursuing a bachelor's degree in computer science. I've enjoyed coding since I was in 4th grade, but I've never had the chance to work on anything near the scale and complexity of Nova before. I'm super excited at the prospects of writing code that will run in the real world and will ultimately get this car on the road!"
    },
    ["Egan Johnson"]: {
        Role: "Behavior Planning & Controls",
        Study: "CS Sophomore",
        Bio: "I’m currently a sophomore majoring in Computer Science. I will be working on the vehicles planning system this semester. I’m originally from Madison, Wisconsin, and much prefer the Texas winter to the Texas summer, especially since I enjoy running. I have some background in robotics from high school and am a returning member of the project. I’m excited to see what we can do this year!"
    },
    ["Jim Moore"]: {
        Role: "Behavior Planning & Controls",
        Study: "N/A",
        Bio: "N/A"
    },
    ["Cristian Cruz"]: {
        Role: "Behavior Planning & Controls",
        Study: "N/A",
        Bio: "N/A"
    },
    ["Kyle Zeng"]: {
        Role: "Perception & Machine Vision",
        Study: "CS Sophomore",
        Bio: "Hey! My name is Kyle, and I'm a sophomore studying computer science and finance at UTD. For a bit about myself, I love exploring uncharted territory. This includes venturing into machine learning, which is what I'll be working on for Nova, visual arts, and business management! I hope to innovate an efficient and responsive autonomous vehicle with the rest of the team."
    },
    ["Ragib Arnav"]: {
        Role: "Perception & Machine Vision",
        Study: "CE N/A",
        Bio: "I’m currently a sophomore majoring in Computer Science. I will be working on the vehicles planning system this semester. I’m originally from Madison, Wisconsin, and much prefer the Texas winter to the Texas summer, especially since I enjoy running. I have some background in robotics from high school and am a returning member of the project. I’m excited to see what we can do this year!"
    },
    ["Vishvak Bandi"]: {
        Role: "Mapping",
        Study: "CS Junior",
        Bio: "N/A"
    },
    ["Avery Bainbridge"]: {
        Role: "Firmware",
        Study: "CS Sophomore",
        Bio: "My name is Avery Bainbridge. I'm a Computer Engineering freshman and, as of late, Nova’s Firmware Specialist. Simply put, I like to make things run quickly and efficiently. For Nova, I'll be responsible for most of the components that actually touch the hardware, like the GPS sensor and steering/throttle actuators, as well as optimizing our stack to make use of the computing power we have available to us. I'm originally from Boise, Idaho, and ended up here at UTD via the National Merit Scholars Program. When I'm not in the lab or furiously typing, I like to read, hike, walk around campus at night, and play quiz bowl with friends."
    },
    ["Quinn Loach"]: {
        Role: "Education & Outreach",
        Study: "N/A",
        Bio: "N/A"
    },
    ["Dylan Hiu"]: {
        Role: "Public Relations",
        Study: "EE Junior",
        Bio: "Hi there! My name is Dylan Hiu, and I am the Director of PR for Nova. I am an electrical engineering student here at UT Dallas, and I am a Southern California native. I always have enjoyed photography, writing, and communication, and I very much enjoy sharing with the UT Dallas’ community the work that we do for Nova. In my spare time, I enjoy sport climbing, marathon running, and reading."
    },
    ["Connor Scally"]: {
        Role: "Virtualization",
        Study: "CS Sophomore",
        Bio: "Hello, my name is Connor Scally, I am a sophomore Computer Engineering major and I am the Virtualization Engineer for Nova. Since it is difficult to test code on a physical vehicle, I am currently working on keeping our simulation server in peak condition! This includes adding simulated hardware and general upkeep of the virtualization server.<br/><br/>In my free time, I am working on one or two little side projects at any given time. I enjoy iOS development using Swift-UI as well as working with microcontrollers/microcomputers like the Arduino or RasPi for hardware oriented builds/projects. I also enjoy reading and playing games whenever I have some downtime.<br/><br/>I look forward to learning and growing as part of the Nova team, and cannot wait to see what Nova has in store for the future!"
    },
    ["Phu Le"]: {
        Role: "Technical Artist",
        Study: "N/A",
        Bio: "How’s it going. Name’s Phu Le. I'll be making the 3D models for the car and all of its fancy do-dats components. I don’t have much to say about myself, I like gaming, game dev, music, oh right I’m Vietnamese: chúc bạn một ngày tốt lành!"
    },
    ["Nikhil Narvekar"]: {
        Role: "FF",
        Study: "CS Junior",
        Bio: "I'm Nikhil Narvekar and I'm currently a junior majoring in CS at UTD. My interests involve AI/ML, backend development, and robotics. I built my first autonomous robot in FIRST robotics, and I've been captivated by the possibilities of autonomous systems ever since. As a part of Nova, I'm working on the Behavior and Path-planning software for the vehicle."
    }
}

var modal = document.getElementById("modalHolder");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


let prefix = "modal"
for(let i=1; i<=15; i++) {
    var img = document.getElementById(prefix + i);

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        
        let role = members[this.alt].Role;
        let study = members[this.alt].Study;
        let bio = members[this.alt].Bio;

        let string = "<b>Name:</b><br/>" + this.alt + "<br/><br/><b>Role:</b><br/>" + role + "<br/><br/><b>Study:</b><br/>" + study + "<br/><br/><b>Bio:</b><br/>" + bio;
        captionText.innerHTML = string;
    }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}