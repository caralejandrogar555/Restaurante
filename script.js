const form = document.getElementById('reservaForm');
const tabla = document.getElementById('tablaReservas').getElementsByTagName('tbody')[0];
const recibo = document.getElementById('recibo');
const contenidoRecibo = document.getElementById('contenidoRecibo');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('clienteNombre').value;
    const telefono = document.getElementById('clienteTelefono').value;
    const email = document.getElementById('clienteEmail').value;
    const empresa = document.getElementById('clienteEmpresa').value;
    const fecha = document.getElementById('reservaFecha').value;
    const hora = document.getElementById('reservaHora').value;

    // Agregar fila a la tabla
    const fila = tabla.insertRow();
    fila.insertCell(0).textContent = nombre;
    fila.insertCell(1).textContent = telefono;
    fila.insertCell(2).textContent = email;
    fila.insertCell(3).textContent = empresa;
    fila.insertCell(4).textContent = fecha;
    fila.insertCell(5).textContent = hora;

    // Llenar recibo
    contenidoRecibo.innerHTML = `
        <p><strong>Cliente:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa ? empresa : 'N/A'}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Hora:</strong> ${hora}</p>
    `;

    // Mostrar recibo
    recibo.style.display = 'block';

    // Limpiar formulario
    form.reset();
});

function imprimirRecibo() {
    const printContent = contenidoRecibo.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload(); // Recargar para restaurar tabla y botones
}

function cerrarRecibo() {
    recibo.style.display = 'none';
}

// Mostrar formulario al presionar el botón FORMULARIO
function mostrarFormulario() {
    const seccion = document.getElementById('formularioSeccion');
    seccion.style.display = seccion.style.display === 'none' ? 'block' : 'none';
}

// Manejo del formulario
const form = document.getElementById('reservaForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('clienteNombre').value;
    const telefono = document.getElementById('clienteTelefono').value;
    const email = document.getElementById('clienteEmail').value;
    const empresa = document.getElementById('clienteEmpresa').value;
    const fecha = document.getElementById('reservaFecha').value;
    const hora = document.getElementById('reservaHora').value;

    // Guardar en localStorage
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservas.push({ nombre, telefono, email, empresa, fecha, hora });
    localStorage.setItem('reservas', JSON.stringify(reservas));

    // Llenar recibo
    const contenidoRecibo = document.getElementById('contenidoRecibo');
    contenidoRecibo.innerHTML = `
        <p><strong>Cliente:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa ? empresa : 'N/A'}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Hora:</strong> ${hora}</p>
    `;

    // Mostrar recibo
    const recibo = document.getElementById('recibo');
    recibo.style.display = 'block';

    // Limpiar formulario
    form.reset();
});

// Funciones del recibo
function imprimirRecibo() {
    const printContent = document.getElementById('contenidoRecibo').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload();
}

function cerrarRecibo() {
    document.getElementById('recibo').style.display = 'none';
}

// Botón Imprimir
const btnImprimir = document.createElement('button');
btnImprimir.textContent = 'Imprimir';
btnImprimir.onclick = () => mostrarRecibo(r);
btnImprimir.className = 'btn-accion print';
acciones.appendChild(btnImprimir);

// Botón Borrar
const btnBorrar = document.createElement('button');
btnBorrar.textContent = 'Borrar';
btnBorrar.onclick = () => borrarFila(index);
btnBorrar.className = 'btn-accion red';
acciones.appendChild(btnBorrar);