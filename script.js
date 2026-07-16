// Career & Admission Guide

console.log("Career & Admission Guide Website Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(btn){
        btn.addEventListener("mouseenter", function(){
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", function(){
            btn.style.transform = "scale(1)";
        });
    });

});
