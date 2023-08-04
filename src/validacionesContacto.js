const form = document.getElementById("form");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const telInput = document.getElementById("tel");
  const mensajeInput = document.getElementById("mensaje");
  const nombreValue = nombreInput.value.trim();
  const emailValue = emailInput.value.trim();
  const mensajeValue = mensajeInput.value.trim();
  

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Hace la validación
    let isValid = true;


     //Estas son las validaciones para el nombre, que al menos haya 2 letraa
  if (nombreValue.length < 2 || !/^[a-zA-Z]+$/.test(nombreValue)) {
    displayAlert("Por favor, ingresa un nombre valido", "nombre-alert", "alert-danger");
    isValid = false;
  }

  //Estas son las alertas con las validaciones para el numero de telefono
    if (telInput.value.trim() === "") {
      displayAlert("Por favor, ingresa un número de teléfono.", "tel-alert", "alert-danger");
      isValid = false;
    } else if (!isValidPhoneNumber(telInput.value.trim())) {
      displayAlert("Por favor, ingresa un número de teléfono válido (solo números).", "tel-alert", "alert-danger");
      isValid = false;
    } else if (telInput.value.trim().length !== 10) {
      displayAlert("El número de teléfono debe contener 10 dígitos.", "tel-alert", "alert-danger");
      isValid = false;
    }

    //Estas son las alertas con las validaciones para el correo electronico
    if (emailValue === "") {
      displayAlert("Por favor, ingresa un correo electrónico.", "email-alert", "alert-danger");
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      displayAlert("Por favor, ingresa un correo electrónico válido.", "email-alert", "alert-danger");
      isValid = false;
    }
     
    
    if (mensajeValue.length <= 10) {
      displayAlert("El mensaje es demaciado corto", "mensaje-alert", "alert-danger");
      isValid = false;
    }

    if (isValid) {
      // Si es valido, se envia
      form.submit();
    }
  });



  // Función para mostrar alertas personalizadas
  function displayAlert(message, alertContainerId, type) {
    // Crea un elemento de alerta
    const alertElement = document.createElement("div");
    alertElement.classList.add("alert", type);
    alertElement.textContent = message;

    // Encuentra el contenedor de alerta correspondiente por su id
    const alertContainer = document.getElementById(alertContainerId);

    // Limpia el contenedor antes de agregar una nueva alerta
    alertContainer.innerHTML = "";

    // Inserta el elemento de alerta en el contenedor
    alertContainer.appendChild(alertElement);
  }

  //Esta es la validacón para el numero de telefono, que solo sean 10 numeros
  function isValidPhoneNumber(phoneNumber) {
    const phonePattern = /^\d+$/;
    return phonePattern.test(phoneNumber);
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
 