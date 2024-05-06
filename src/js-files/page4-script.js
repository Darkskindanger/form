let plan = document.getElementById("plan");
let planCost = document.getElementById("planCost");
let extrasContainer = document.getElementById("extras-container");

// Get items from localStorage
let planString = localStorage.getItem("selectedPlan");
let extrasString = localStorage.getItem("selectedExtras");

// define array entries based on after specified characters (,)
let planArr = planString.split(",");
let extraArr = extrasString.split(",");
plan.innerText = `${planArr[0]} (Monthly)`;

planCost.innerText = planString.slice(-5);

let extPrice;

extraArr.forEach((extra) => {
  let selectedExtra = document.createElement("div");
  selectedExtra.classList.add("flex");
  selectedExtra.classList.add("justify-between");
  selectedExtra.innerHTML = `<h4>${extra.substring(0, extra.length - 2)}</h4>
  <p>+${extra.slice(-2)}/mo</p>`;
  extrasContainer.appendChild(selectedExtra);

  return (extPrice = extra.slice(-1));
});

// Total display
let planPrice = planString.charAt(10) * 1;
let total = document.getElementById("total");

let extraPrice = extPrice * extraArr.length;

total.innerHTML = `$${planPrice + extraPrice}/mo`;
