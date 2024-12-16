function renderizarPropiedades(propiedades, contenedor, limite = propiedades.length) {
  const container = document.querySelector(contenedor);
  if (!container) {
    console.error(`Contenedor no encontrado: ${contenedor}`);
    return;
  }

  let html = "";

  for (let i = 0; i < Math.min(propiedades.length, limite); i++) {
    const prop = propiedades[i];
    const mensajeFumar = prop.smoke
      ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
      : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    const mensajeMascotas = prop.pets
      ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
      : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>';

    html += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top" alt="${prop.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> $${prop.costo}</p>
            ${mensajeFumar}
            ${mensajeMascotas}
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#venta")) {
    // Detectar si estamos en el index o en propiedades_venta.html
    const esIndex = document.querySelector("body").classList.contains("index");
    const limite = esIndex ? 3 : propiedades_venta.length;
    renderizarPropiedades(propiedades_venta, "#venta .row", limite);
  }

  if (document.querySelector("#alquiler")) {
    // Detectar si estamos en el index o en propiedades_alquiler.html
    const esIndex = document.querySelector("body").classList.contains("index");
    const limite = esIndex ? 3 : propiedades_alquiler.length;
    renderizarPropiedades(propiedades_alquiler, "#alquiler .row", limite);
  }
});
