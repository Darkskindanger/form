let infoForm = document.getElementById("infoForm");

if (localStorage) {
  infoForm.addEventListener("submit", (e) => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name.value == "" || email.value == "" || phone.value == "") {
      alert("Please finish form before submission");
    } else {
      const formData = {
        name: name,
        email: email,
        phone: phone,
      };

      const stringifiedObj = JSON.stringify(formData);

      localStorage.setItem("userData", stringifiedObj);

      console.log(stringifiedObj);
      name.value = "";
      email.value = "";
      phone.value = "";
    }
  });
}
