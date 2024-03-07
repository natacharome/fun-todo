const date = new Date();
const intro = document.querySelector("h3");
const hour = document.querySelector("h4");
const btn = document.querySelector("button");
const list = [];

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const formattedDate = date.toLocaleDateString("fr-FR", options);
const dateSplit = formattedDate.split(" ");
const capitalizedDayOfWeek = capitalizeFirstLetter(dateSplit[0]);
intro.textContent += `${capitalizedDayOfWeek} ${dateSplit
  .slice(1)
  .join(" ")} et il est `;

hour.textContent += `${date.getHours()}:${date
  .getMinutes()
  .toString()
  .padStart(2, "0")}`;

blink();

btn.addEventListener("click", () => {
  list.push("Test");
  console.log(list);
});

if (list.length > 0) {
  displayList();
} else {
  displayMessage();
}
