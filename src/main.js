// Esperamos a que el contenido de la página se haya cargado
document.addEventListener("DOMContentLoaded", function () {
    // Creamos el footer
    const footer = document.createElement("footer");
    footer.classList.add("bg-dark", "text-white", "py-4");
  
    // Creamos un contenedor div dentro del footer para el contenido
    const container = document.createElement("div");
    container.classList.add("container");
  
    // Creamos una fila dentro del contenedor
    const row = document.createElement("div");
    row.classList.add("row");
  
    // Creamos una columna de Bootstrap (col-12) dentro de la fila
    const column = document.createElement("div");
    column.classList.add("col-12");
  
    // Agregamos el contenido del footer
    column.innerHTML = `
      <p class="text-center mb-0">&copy; ${new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
    `;
  
    // Añadimos la columna a la fila
    row.appendChild(column);
  
    // Añadimos la fila al contenedor
    container.appendChild(row);
  
    // Añadimos el contenedor al footer
    footer.appendChild(container);
  
    // Añadimos el footer al final del cuerpo del documento
    document.body.appendChild(footer);
  });
  