var members = {
    
    ["Justin Ruths"]: {
        Role: "Team Advisor",
        Study: "Professor",
        Bio: "Justin Ruths is an assistant professor in the departments of Mechanical Engineering and Systems Engineering at UT Dallas.  The Nova project is the undergraduate research arm of Justin Ruths’ research lab and an offshoot of work in the area of security of automation and cyberphysical systems as well as a growing interest in the challenges specifically in autonomous driving.  Nova is also the way that he continues to vicariously dabble in cool technologies and fun applied problems.  "
    },
    ["Daniel Vayman"]: {
        Role: "Project Lead",
        Study: "CS Junior",
        Bio: "Living in the suburbs of Richardson requires a lot of driving, and frankly I'm tired of it. Honestly was just looking for a quick and easy driving service but I somehow ended up on a research team chock-full of the most diverse, talented, and determined people I've had the opportunity of working with. All jokes aside, I'm from St. Louis, MO, and I'm a freshman here at UT Dallas studying computer science. I've been coding since my freshman year of high school and I've gained most of my programming/leadership experience through FIRST Robotics. My hobbies include sleeping, exercising, volleyball, tournament poker, and watching movies/TV. I'm also on the UTD Men's Ultimate Frisbee team! In addition to being a great resource for my fellow core developers, I will strive to be an excellent leader. I'm a full believer in Nova and I'll be putting forth my best effort into seeing the project come to fruition. I can't wait to see what we accomplish. Any questions about our project or the work that we do? Feel free to shoot me an email. daniel.vayman@utdallas.edu"
    },
    ["Jai Peris"]: {
        Role: "Firmware and Electrical Technician ",
        Study: "Electrical Engineering Sophomore",
        Bio: "I’m from Dallas, Texas and I’m currently studying electrical engineering. I’m most interested in embedded systems, nanotechnology, and physics, and I hope to one day work with renewable energy or quantum technology. With Nova, I serve as a firmware and electrical engineer. My team is responsible for mapping the circuitry of the car, testing the sensors, and much more! Besides work, I like to cook, read, and play videogames. I am super excited to see this car drive itself!"
    },
    ["Chitsein Htun"]: {
        Role: "Behavior Planning & Controls",
        Study: "CS Sophomore",
        Bio: "I'm currently a  First Year Computer Science major at UT Dallas. Some of my hobbies include playing piano, reading, and tackling difficult math problems. I first began coding when I was in 6th grade and began enjoying it through building small indie games with friends. In the past few years, I have become increasingly interested in studying complex systems involving individual agents, which has drawn me to topics like game theory and AI. Working on Nova’s autonomous vehicle system lets me continue to pursue these interests by presenting a chance to both design a complex system under the hood and to create an AI that can learn and adapt to the even more complex system of people, creatures, and robots navigating the streets of our busy world. I look forward to learning more about everything that the world of autonomous vehicles encompasses, developing our open source autonomous vehicle platform, and working with the other members of our amazing team!"
    },
    ["Kyle Zeng"]: {
        Role: "Developer, Public Relations Specialist",
        Study: "CS Senior",
        Bio: "Hey! I'm Kyle, and I'm a junior majoring in computer science. I have a deep interest in machine learning and visual arts, so I'm enamored by computer vision and therefore excited to work on perception algorithms this year. Some of my other hobbies include volleyball, ice skating, gaming, graphic design, and photography; you'll probably see me on the camera once in a while!"
    },
    ["Stepan Antonyuk"]: {
        Role: "Perception & Machine Vision",
        Study: "CS Sophomore",
        Bio: "Ever since I can remember, I have wanted to build and create. Just think about any sci-fi books that you have read: The Stainless Steel Rat, Dune, Ender's Game, and The Moon Is a Harsh Mistress. I have been building and creating for whole my life. I want to bring the future closer to us through advancements in technology."
    },
    ["Harsha Kota"]: {
        Role: "Behavior Planning & Controls",
        Study: "CS Sophomore",
        Bio: "Hey, I’m currently a freshman in the Comp Sci department at UTD. I plan to help out by working as a behavior planning and controls member to smooth transition between perception and hardware. When I am not eating, sleeping or working, I am probably watching some anime or movie that was recommended. I am excited to see how this project grows alongside our growth as a team."
    },
    ["Sasha Luich"]: {
        Role: "Vehicle Technician",
        Study: "ME Junior",
        Bio: "Hi my name is Sasha Luich and I am the Vehicle Technician for Nova.  I work on the Polaris vehicle to maintain and improve its performance.  I’m from a small town in Ohio where living in the rust belt meant constantly working on cars to keep them operational.  At 16 I finally got a car of my own, a 1979 Corvette that is truly my pride and joy, allowing me to gain even more automotive experience and motivating me to pursue mechanical engineering.  Now, I would like to continue my engineering endeavor and branch out to electric cars with Nova!"
    },
    ["Meyli Colmenero"]: {
        Role: "Hardware, Firmware, and Electrical",
        Study: "CE Junior",
        Bio: "I’m Meyli a Computer Engineering sophomore and a firm believer that I can make everything I want myself with the power of my brain. I’m excited to be maintaining the computer systems and peripherals that are on the project and integrating the hardware and firmware together to complete functional subsystems. I am from Dallas,TX and I’m so over it…. The learning never stops at Nova, and I’m so happy to be a part of a team where everyone is equally as confused as me but still has a piece of knowledge, skill, or curiosity to find solutions to problems encountered along the process."
    }

}

var modal = document.getElementById("modalHolder");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


let prefix = "modal"
for(let i=1; i<=16; i++) {
    var img = document.getElementById(prefix + i);
    let no_bios = [
                    "Anika Nesarikar", "Cristian Cruz", 
                    "Vishvak Bandi", "Quinn Loach"
                ];

    img.onmouseenter = function() {
        if (!no_bios.includes(this.alt)) {
            this.style.cursor = "pointer";
        }
    }

    img.onclick = function(){
        // If the image has an associated bio, open the modal.
        // Do nothing on click otherwise.
        if (!no_bios.includes(this.alt)) {
            modal.style.display = "block";
            modalImg.src = this.src;
            
            let role = members[this.alt].Role;
            let study = members[this.alt].Study;
            let bio = members[this.alt].Bio;

            let string = "<h2>"+this.alt+"</h2>"+study+", "+role+"<br/><em>"+bio+"</em>";
            captionText.innerHTML = string;
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() { 
                console.log("Click!")
            modal.style.display = "none";
            }
        }
    }
}


