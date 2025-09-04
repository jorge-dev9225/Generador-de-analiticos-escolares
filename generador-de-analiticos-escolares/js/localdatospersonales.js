//selecciona el formulario
const form = document.getElementById('form-alumno');

//captura el evento submit
form.addEventListener('submit', function(e) {
    e.preventDefault();//evita que se recarge la pagina
    
    const alumno = {
        apellido: document.getElementById('apellido').value,
        nombre: document.getElementById('nombre').value,
        fechaNac: document.getElementById('fechaNac').value,
        ciudadNac: document.getElementById('ciudadNac').value,
        provinciaNac: document.getElementById('provinciaNac').value,
        dni: document.getElementById('dni').value,
    };

    //guarda en local storage como string
    localStorage.setItem('alumno', JSON.stringify(alumno));
    
    //alerta al guardar
    alert('✅ Datos del Alumno Guardados Correctamente');
});