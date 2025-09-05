console.log("연결됨");

const input = document.querySelector("input#input");
const button = document.querySelector("input[type=button]");
console.log(button);
const tbody = document.querySelector("tbody");

const area = tbody.querySelectorAll("tr");
const area1 = tbody.querySelectorAll("tr")[0];
const area2 = tbody.querySelectorAll("tr")[1];
const area3 = tbody.querySelectorAll("tr")[2];

const starMark = "★";

button.addEventListener("click", () => {
    area.forEach((area) => {
        area.classList.remove("selected");
    });
    if (input.value === "아동") {
        area1.classList.add("selected");
        const division = area1.querySelector("td");
        division.prepend(starMark);
    } else if (input.value === "청소년") {
        area2.classList.add("selected");
        const division = area2.querySelector("td");
        division.prepend(starMark);
    } else if (input.value === "성인") {
        area3.classList.add("selected");
        const division = area2.querySelector("td");
        division.prepend(starMark);
    }
});
