const objNomMat = document.querySelector("#nomMat");
const objNumNot = document.querySelector("#numNot");
const objBtnAgregar = document.querySelector("#BtnAgregar");
const objListaNota = document.querySelector("#listaNota");
const objBtnProm = document.querySelector("#inProm");
const objBtnLimp = document.querySelector("#BtnLimp");

objBtnAgregar.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Este codigo solo reemplaza el placeholder por numero invalido y le da estilo rojo para señalar un error
    // de esta manera se sabra cuando paso algo malo, y cuando no hay error se remueve el estilo
    // y se deja el de defecto en el HTML
    
    const nota = parseFloat(objNumNot.value);
    if (nota < 0 || nota > 20) {
        objNumNot.classList.add('border-red-500', 'placeholder-red-500');
        objNumNot.value = '';
        objNumNot.placeholder = 'NUMERO INVALIDO';
        return; 
    } else {
        objNumNot.classList.remove('border-red-500', 'placeholder-red-500');
        objNumNot.placeholder = 'Calificacion de la materia';
    }

    
    const nuevaFila = document.createElement('tr');
    const nuevaMateria = document.createElement('td');
    const nuevaNota = document.createElement('td');
    nuevaMateria.textContent = objNomMat.value;
    nuevaNota.textContent = objNumNot.value;
    
    nuevaFila.classList.add('bg-gray-100', 'hover:bg-gray-200', 'text-cyan-700', 'text-center', 'border', 'border-gray-300', 'p-2'); 

    nuevaFila.appendChild(nuevaMateria);
    nuevaFila.appendChild(nuevaNota);
    objListaNota.appendChild(nuevaFila);


    objNomMat.value = '';
    objNumNot.value = '';

    const lista = objListaNota.querySelectorAll("tr:not(:first-child)");
    let totalNotas = 0, cantidadNotas = 0;
    lista.forEach((nota) => {
        totalNotas += parseFloat(nota.cells[1].textContent);
        cantidadNotas++;
    });
    objBtnProm.value = (totalNotas / cantidadNotas).toFixed(2);
    objNomMat.focus()
});

objBtnLimp.addEventListener('click', (e) => {
    e.preventDefault();
    const lista2 = objListaNota.querySelectorAll('tr:not(:first-child)');
    lista2.forEach((fila) => {
        fila.remove();
    });
    objBtnProm.value = '';
});










