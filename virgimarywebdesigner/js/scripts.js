  const servicio = document.getElementById('servicio');
  const extras = document.querySelectorAll('#presupuesto-form input[type=checkbox]');
  const totalDisplay = document.getElementById('total');

    function calcularPresupuesto() {
        let total = parseInt(servicio.value);

        extras.forEach(extra => {
            if (extra.checked) {
                total += parseInt(extra.value);
            }
        });

        totalDisplay.textContent = total;
    }

    servicio.addEventListener('change', calcularPresupuesto);
    extras.forEach(extra => {
        extra.addEventListener('change', calcularPresupuesto);
    });

    function enviarPresupuesto() {
        alert('¡Gracias por solicitar tu presupuesto! Te contactaremos pronto.');
    }

      /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/xkgbrwdz",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });
  var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)

    // Al enviar el formulario, vaciamos los campos después de que Formspree lo procese
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    setTimeout(function () {
      document.getElementById('contactForm').reset();
    }, 1000); // Espera 1 segundo para que Formspree lo procese
  });

  // Botón "Borrar" manual
  function resetForm() {
    document.getElementById('contactForm').reset();
  }

  const toggleButtons = document.querySelectorAll('.btn-toggle');

    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const target = document.querySelector(targetId);

        target.classList.toggle('show');

        if (target.classList.contains('show')) {
          button.textContent = 'Cerrar';
        } else {
          button.textContent = 'Ver más';
        }
      });
    });

    // Marca menú activo
    window.addEventListener("load", function () {
      const loader = document.getElementById("loader");
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      loader.style.transition = "opacity 0.5s ease";
    });

    // Marca menú activo
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
    if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registrado con éxito:', registration.scope);
    })
    .catch(function(error) {
      console.log('Error al registrar el Service Worker:', error);
    });
}

   document.addEventListener("DOMContentLoaded", function() {
        if (!localStorage.getItem("cookiesAccepted")) {
            document.getElementById("cookie-banner").style.display = "block";
        }

        document.getElementById("accept-cookies").addEventListener("click", function() {
            localStorage.setItem("cookiesAccepted", "true");
            document.getElementById("cookie-banner").style.display = "none";
        });
    });