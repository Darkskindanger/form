let extraForm = document.getElementById("extrasForm");

if (localStorage) {
  extraForm.addEventListener("submit", (e) => {
    let extras = document.getElementsByName("extra");
    let extrasPrice = document.getElementsByName("extrasPrice");
    let results = [];

    if (extras.value == "undefined") {
      alert("Please choose an extra before submission");
    } else {
      for (i = 0; i < extras.length; i++) {
        if (extras[i].checked) {
          results.push(extras[i].value);
          const selectedExtras = results;
          localStorage.setItem("selectedExtras", selectedExtras);

          console.log(selectedExtras);
        }
      }
    }
  });
}
