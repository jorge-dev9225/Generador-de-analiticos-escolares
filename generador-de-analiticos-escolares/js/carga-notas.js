//Valido que el año de aprobación de la materia no sea mayor al año actual
const anioActual = new Date().getFullYear();//Obtener el año actual

//Esta función retorna el HTML del div class materia con las materias de cada año
const retornarMateriaHTML = (materia, index) => {
    return `
        <tr>
            <td>${materia.orden}</td>
            <td>${materia.nombre}</td>

            <td>
                <select name="nota[${index}][${materia.nombre}]">
                    <option value="" disabled selected>Seleccione una nota</option>
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="PENDIENTE">PENDIENTE</option>
                </select>
            </td>

            <td>
                <select name="condicion[${index}][${materia.nombre}]">
                    <option value="REGULAR" selected>REGULAR</option>
                    <option value="EQUIVALENCIA">EQUIVALENCIA</option>
                </select>
            </td>

            <td>
                <select name="mes[${index}][${materia.nombre}]">
                    <option value="FEBRERO">Feb.</option>
                    <option value="MARZO">Mar.</option>
                    <option value="ABRIL">Abr.</option>
                    <option value="MAYO">May.</option>
                    <option value="JUNIO">Jun.</option>
                    <option value="JULIO">Jul.</option>
                    <option value="AGOSTO">Ago.</option>
                    <option value="SEPTIEMBRE">Sep.</option>
                    <option value="OCTUBRE">Oct.</option>
                    <option value="NOVIEMBRE">Nov.</option>
                    <option value="DICIEMBRE" selected>Dic.</option>
                </select>
            </td>

            <td>
                <input type="text" name="anio[${index}][${materia.nombre}]"
                    pattern="^(19|20)\d{2}$"
                    title="Ingrese un año de 4 dígitos (ej: 2023)" required>
            </td>

            <td>
                <input list="listaEstablecimiento${index}${materia.orden}" name="establecimiento[${index}][${materia.nombre}]">
                <datalist id="listaEstablecimiento${index}${materia.orden}">
                    <option value="ESTE ESTABLECIMIENTO">
                    <option value="OTRO ESTABLECIMIENTO">
                </datalist>
            </td>
        </tr>
    `
};

// --- Genera un bloque <tbody> con todas las materias de un año ---
const retornarTBodyHTML = (anioCursado, index) => {
    let html = `
      <tbody>
        <tr>
          <td colspan="7"><strong>${anioCursado.nombre}</strong></td>
        </tr>
    `;
  
    // Agregar materias
    anioCursado.materias.forEach(materia => {
      html += retornarMateriaHTML(materia, index);
    });
  
    // Agregar fila de CURSADA y PROMEDIO
    html += `
        <tr>
          <td colspan="3">
            <label for="estado[${index}][cursada]">CURSADA:</label>
            <input type="text" name="estado[${index}][cursada]" id="estado[${index}][cursada]" readonly>
          </td>
          <td colspan="4">
            <label for="promedio[${index}]">PROMEDIO:</label>
            <input type="text" name="promedio[${index}]" id="promedio[${index}]">
          </td>
        </tr>
      </tbody>
    `;
  
    return html;
  };   

/*
const contenedorAnios = document.querySelector('.anioCursado');
const contenedorMateriasAnio = document.querySelector('.materia');*/
const tabla = document.querySelector("table");


//Esta función carga los años cursados en el contenedorAnios y llama a la función retornarTBodyHTML
const cargarAniosYmaterias = (array) => {
    array.forEach((anio, index) => {
      tabla.innerHTML += retornarTBodyHTML(anio, index);
    });
  };
  

//Llamada a la función para cargar los años
cargarAniosYmaterias(aniosCursados);

//Obtener todos los inputs que comiencen con el name "anio"
const inputs = document.querySelectorAll('input[name^="anio"]');
    inputs.forEach(input => {
    input.setAttribute("max", anioActual);
});



