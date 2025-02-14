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
});
