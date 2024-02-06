// navbar.js and common js code like darkmode
let darkmodeElements = ["navbar","sectionb"];
let firstload=true;
document.addEventListener("DOMContentLoaded", function() {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    function togglemode(){
      darkmodeElements.forEach(element => {
        document.getElementById(element)?.classList.toggle("darkmode");
      });
      document.body.classList.toggle("darkmode");
      localStorage.setItem("darkmode", document.getElementById("darkmode-toggle").checked);
    }  
      document.getElementById("darkmode-toggle").addEventListener("change", function() {
        if(document.getElementById("darkmode-toggle").checked != document.body.classList.contains("darkmode"))
        togglemode();
      });
      
      if(firstload) {
        const storedDarkmode = localStorage.getItem("darkmode");
        document.getElementById("darkmode-toggle").checked = storedDarkmode === "true";
        document.getElementById("darkmode-toggle").dispatchEvent(new Event("change"));
        firstload = false;
      }
    });
});