let planForm = document.getElementById("planForm");

if (localStorage) {
  planForm.addEventListener("submit", (e) => {
    let options = document.getElementsByName("plan");

    if (options.value == "undefined") {
      alert("Please finish form before submission");
    } else {
      for (i = 0; i < options.length; i++) {
        if (options[i].checked) {
          const selectedObj = { selected: options[i].value };

          const selectedOption = JSON.stringify(selectedObj);

          localStorage.setItem("selectedPlan", selectedOption);

          console.log(selectedOption);
        }
      }
    }
  });
}
