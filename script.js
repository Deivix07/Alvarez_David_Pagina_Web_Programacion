document.addEventListener("DOMContentLoaded", () => {
    const btnEmpezar = document.getElementById("btn-empezar");
    const bienvenida = document.getElementById("bienvenida");
    const contenidoPrincipal = document.getElementById("contenido-principal");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Mostrar el contenido principal al hacer clic en "Empezar"
    btnEmpezar.addEventListener("click", () => {
        bienvenida.style.display = "none";
        contenidoPrincipal.style.display = "block";
        setTimeout(() => {
            contenidoPrincipal.style.opacity = "1";
        }, 50);
    });

    // Función para mostrar la sección seleccionada
    function mostrarSeccion(seccionID) {
        document.querySelectorAll("main section").forEach(seccion => {
            seccion.style.display = "none"; // Ocultar todas las secciones
        });
        const seccionActiva = document.getElementById(seccionID);
        seccionActiva.style.display = "block"; // Mostrar la seleccionada
        seccionActiva.scrollIntoView({ behavior: "smooth" }); // Hacer scroll suave
    }

    // Manejar clics en el menú de navegación
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const seccionID = event.target.getAttribute("data-seccion");
            mostrarSeccion(seccionID);
        });
    });

    // Manejar clics en los botones "Ver más"
    document.querySelectorAll(".ver-mas").forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            const seccionID = event.target.getAttribute("data-seccion");
            mostrarSeccion(seccionID);
        });
    });

    // Mostrar/ocultar menú al hacer clic en ☰
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Ocultar el menú cuando se hace clic en un enlace
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });

    const title = "¡Bienvenido al Mundo de la Programación!";
    let a = 0;
    
    function typeTitle(callback) {
      if (a < title.length) {
        document.getElementById("title").innerHTML += title.charAt(a);
        a++;
        setTimeout(() => typeTitle(callback), 80);
      } else {
        callback(); // Llama a la función para escribir el párrafo después
      }
    }
  
    const text = "Aquí aprenderás lo básico de la programación.";
    let i = 0;
  
    function typeText(callback) {
      if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeText(callback), 80);
      } else {
        callback(); // Muestra el botón al final
      }
    }
  
    function showButton() {
        const button = document.getElementById("btn-empezar");
        button.style.transition = "opacity 1s ease-in-out"; // Establecer la transición
        button.style.opacity = 1; // Cambiar la opacidad para mostrar el botón
        button.style.pointerEvents = "auto"; // Habilitar los eventos del botón
      }
  
    // Iniciar escritura en orden
    typeTitle(() => typeText(showButton));
    //
});
