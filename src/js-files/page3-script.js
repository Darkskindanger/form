let extraForm = document.getElementById("extrasForm");

if (localStorage) {
  extraForm.addEventListener("submit", (e) => {
    let extras = document.getElementById("extra");
    let results = "";
    if (extras.value == "undefined") {
      alert("Please choose an extra before submission");
    } else {
      for (i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
          results += extras[i].value + "," + extras.dataset.price;
          const selectedObj = { selected: results };
          const selectedExtras = JSON.stringify(selectedObj);
          localStorage.setItem("selectedExtras", selectedExtras);

          console.log(selectedExtras);
        }
      }
    }
  });
}
let extras = document.getElementsByName("extra1");
console.log(extras.dataset.price);
