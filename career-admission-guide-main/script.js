// Career & Admission Guide - Website Scripts
console.log("Career & Admission Guide Website Loaded");

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Button Hover Effects (Smooth Scaling)
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(function(btn) {
        btn.addEventListener("mouseenter", function() {
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", function() {
            btn.style.transform = "scale(1)";
        });
    });

    // 2. Optimized Animated Counter
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const target = Number(counter.getAttribute("data-target"));
        let count = 0;
        const duration = 2000; // Poore animation ka time (2 seconds)
        const stepTime = 20;   // Interval tick rate (20ms)
        const totalSteps = duration / stepTime;
        const increment = Math.ceil(target / totalSteps);

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                if (count > target) count = target;
                counter.innerText = count;
                setTimeout(updateCounter, stepTime);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCounter();
    });
});

// 3. Navigation Search Box Logic
function searchSite() {
    const searchBox = document.getElementById("searchBox");
    if (!searchBox) return;

    let search = searchBox.value.toLowerCase().trim();

    if (search === "home") {
        window.location.href = "index.html";
    } 
    else if (search === "universities" || search === "university") {
        window.location.href = "universities.html";
    } 
    else if (search === "rci" || search === "rci courses") {
        window.location.href = "rci-courses.html";
    } 
    else if (search === "admission" || search === "admissions") {
        window.location.href = "admissions.html";
    } 
    else if (search === "board" || search === "boards") {
        window.location.href = "boards.html";
    } 
    else if (search === "contact") {
        window.location.href = "contact.html";
    } 
    else {
        alert("Sorry! Course or university not found. Try searching for 'Universities' or 'Admissions'.");
    }
}

// 4. WhatsApp Quick Form Redirection
function sendAdmissionForm() {
    const name = document.getElementById("studentName")?.value.trim();
    const mobile = document.getElementById("studentMobile")?.value.trim();
    const course = document.getElementById("studentCourse")?.value;
    const university = document.getElementById("studentUniversity")?.value.trim();

    // Basic Validation
    if (!name || !mobile) {
        alert("Please fill your Name and Mobile Number.");
        return;
    }

    // Creating URL Encoded Message
    let message = 
        "🎓 *New Admission Enquiry*" + "%0A%0A" +
        "👤 *Name:* " + encodeURIComponent(name) + "%0A" +
        "📱 *Mobile:* " + encodeURIComponent(mobile) + "%0A" +
        "📚 *Course:* " + encodeURIComponent(course || "Not Selected") + "%0A" +
        "🏫 *University/Board:* " + encodeURIComponent(university || "Not Specified");

    // Redirecting to WhatsApp
    window.open("https://wa.me/919555666400?text=" + message, "_blank");
}
function sendAdmissionForm(){

let name = document.getElementById("studentName").value;
let mobile = document.getElementById("studentMobile").value;
let course = document.getElementById("studentCourse").value;
let university = document.getElementById("studentUniversity").value;


let message =
"Hello Career & Admission Guide%0A%0A"+
"Name: "+name+"%0A"+
"Mobile: "+mobile+"%0A"+
"Course: "+course+"%0A"+
"University: "+university;


window.open(
"https://wa.me/919555666400?text="+message,
"_blank"
);

}
function sendAdmissionForm(){

let name = document.getElementById("studentName").value;
let mobile = document.getElementById("studentMobile").value;
let course = document.getElementById("studentCourse").value;
let university = document.getElementById("studentUniversity").value;


let message =
"Hello Career & Admission Guide%0A%0A"+
"Name: "+name+"%0A"+
"Mobile: "+mobile+"%0A"+
"Course: "+course+"%0A"+
"University: "+university;


window.open(
"https://wa.me/919555666400?text="+message,
"_blank"
);

}
function sendAdmissionForm(){

let name = document.getElementById("studentName").value;

let mobile = document.getElementById("studentMobile").value;

let course = document.getElementById("studentCourse").value;

let university = document.getElementById("studentUniversity").value;


let message = 
"🎓 Career & Admission Guide Enquiry%0A%0A" +
"Name: " + name + "%0A" +
"Mobile: " + mobile + "%0A" +
"Course: " + course + "%0A" +
"University: " + university;


let whatsappNumber = "919555666400";


let url = 
"https://wa.me/" + whatsappNumber + "?text=" + message;


window.open(url,"_blank");

}
function sendAdmissionForm(){

    let name = document.getElementById("studentName").value;

    let mobile = document.getElementById("studentMobile").value;

    let course = document.getElementById("studentCourse").value;

    let university = document.getElementById("studentUniversity").value;


    let message = 
    "🎓 Career & Admission Guide Enquiry\n\n" +
    "Name: " + name + "\n" +
    "Mobile: " + mobile + "\n" +
    "Course: " + course + "\n" +
    "University: " + university;


    let whatsappNumber = "919555666400";


    let whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

}