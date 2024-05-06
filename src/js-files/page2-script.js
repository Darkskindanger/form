let planForm = document.getElementById("planForm");

if (localStorage) {
  planForm.addEventListener("submit", (e) => {
    let options = document.getElementsByName("plan");
    let planPrice = document.getElementById("planPrice");
    let results = [];
    if (options.value == "undefined") {
      alert("Please finish form before submission");
    } else {
      for (i = 0; i < options.length; i++) {
        if (options[i].checked) {
          results.push(options[i].value);
          results.push(planPrice.innerText);
          const selectedOption = JSON.stringify(results);

          localStorage.setItem("selectedPlan", results);

          console.log(selectedOption);
        }
      }
    }
  });
}
