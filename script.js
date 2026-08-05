// Pool & Spa Guide - Interactive Functions

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for menu links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const section = document.querySelector(this.getAttribute("href"));

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // Heater type information buttons
    const buttons = document.querySelectorAll(".info-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const info = this.nextElementSibling;

            if (info.style.display === "block") {
                info.style.display = "none";
                this.textContent = "Learn More";
            } else {
                info.style.display = "block";
                this.textContent = "Hide Information";
            }

        });
    });


    // Temperature calculator
    const calculateButton = document.getElementById("calculate");

    if (calculateButton) {

        calculateButton.addEventListener("click", function () {

            const currentTemp = Number(
                document.getElementById("currentTemp").value
            );

            const desiredTemp = Number(
                document.getElementById("desiredTemp").value
            );


            if (!currentTemp || !desiredTemp) {
                alert("Please enter both temperatures.");
                return;
            }


            const difference = desiredTemp - currentTemp;


            let message = "";

            if (difference <= 0) {
                message =
                    "Your pool is already at or above your desired temperature.";
            } 
            else if (difference <= 5) {
                message =
                    "Only a small amount of heating is needed.";
            }
            else if (difference <= 15) {
                message =
                    "Moderate heating will be required.";
            }
            else {
                message =
                    "A larger heating increase is needed. Consider running your heater longer.";
            }


            document.getElementById("result").innerHTML =
                `
                Temperature increase needed:
                <strong>${difference}°F</strong>
                <br>
                ${message}
                `;

        });

    }


    // Current year in footer
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


});
