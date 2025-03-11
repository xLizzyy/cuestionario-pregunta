let preguntas = [
    {
      "pregunta": "¿Qué es la fotosíntesis?",
      "opciones": [
        "1. Un proceso de respiración celular",
        "2. Un proceso de conversión de luz en energía",
        "3. Un tipo de digestión en las plantas",
        "4. Un proceso de descomposición de materia orgánica"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Cuál es la fórmula química de la fotosíntesis?",
      "opciones": [
        "1. CO2 + H2O + luz → C6H12O6 + O2",
        "2. C6H12O6 + O2 → CO2 + H2O",
        "3. CO2 + H2O → C6H12O6 + O2",
        "4. C6H12O6 + O2 → CO2 + H2O + luz"
      ],
      "respuesta_correcta": 1
    },
    {
      "pregunta": "¿Qué organismos realizan la fotosíntesis?",
      "opciones": [
        "1. Solo las plantas",
        "2. Solo las bacterias",
        "3. Las plantas, algas y algunas bacterias",
        "4. Solo los animales"
      ],
      "respuesta_correcta": 3
    },
    {
      "pregunta": "¿Dónde ocurre la fotosíntesis dentro de la célula vegetal?",
      "opciones": [
        "1. En el núcleo",
        "2. En el citoplasma",
        "3. En las mitocondrias",
        "4. En los cloroplastos"
      ],
      "respuesta_correcta": 4
    },
    {
      "pregunta": "¿Qué sustancias son necesarias para la fotosíntesis?",
      "opciones": [
        "1. Oxígeno, clorofila, agua",
        "2. Agua, dióxido de carbono y luz",
        "3. Glucosa, oxígeno, nitrógeno",
        "4. Clorofila, nitrógeno, luz"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Qué productos genera la fotosíntesis?",
      "opciones": [
        "1. Dióxido de carbono y agua",
        "2. Glucosa y oxígeno",
        "3. Oxígeno y nitrógeno",
        "4. Glucosa y dióxido de carbono"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Cuál es el rol de la clorofila en la fotosíntesis?",
      "opciones": [
        "1. Absorber luz solar",
        "2. Realizar la descomposición de agua",
        "3. Producir glucosa",
        "4. Liberar oxígeno"
      ],
      "respuesta_correcta": 1
    },
    {
      "pregunta": "¿Cómo se llama el proceso en el que las plantas convierten la luz solar en energía?",
      "opciones": [
        "1. Quimiosíntesis",
        "2. Fotosíntesis",
        "3. Respiración celular",
        "4. Transpiración"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Qué es el ciclo de Calvin en la fotosíntesis?",
      "opciones": [
        "1. El proceso de captación de luz solar",
        "2. La fase de producción de glucosa",
        "3. La fase en la que se produce oxígeno",
        "4. La conversión de energía en ATP"
      ],
      "respuesta_correcta": 2
    },
    {
      "pregunta": "¿Por qué la fotosíntesis es importante para los seres vivos?",
      "opciones": [
        "1. Porque produce la energía que consumen los animales",
        "2. Porque genera dióxido de carbono",
        "3. Porque transforma el oxígeno en glucosa",
        "4. Porque produce alimentos para los seres vivos"
      ],
      "respuesta_correcta": 4
    }
  ]
  
  let posicion = 0
  let respuestas = []
  function cargarpregunta(posicion){
    document.getElementById("titulo").innerText = `${posicion + 1}/${preguntas.length} = ${preguntas[posicion].pregunta}`
    document.getElementById("opc1").innerText = preguntas[posicion].opciones[0]
    document.getElementById("opc2").innerText = preguntas[posicion].opciones[1]
    document.getElementById("opc3").innerText = preguntas[posicion].opciones[2]
    document.getElementById("opc4").innerText = preguntas[posicion].opciones[3]

  }

   function SeleccionadaOpcion() {
    const opciones = document.getElementsByName('opciones');
    
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            respuestas[posicion] = i; // Guardamos la opción seleccionada en la posición correcta
            break; // Terminamos una vez que encontramos la respuesta marcada
        }
    }

    console.log("Respuestas guardadas:", respuestas);
}

function DesmarcarMarcarOpciones() {
    const opciones = document.getElementsByName('opciones');

    // Desmarcar todas las opciones antes de marcar la seleccionada
    for (let opcion of opciones) {
        opcion.checked = false;
    }

    // Si hay una respuesta guardada en esta posición, marcarla
    if (respuestas[posicion] !== undefined) {
        opciones[respuestas[posicion]].checked = true;
    }

    console.log(`Pregunta ${posicion + 1}, Respuesta marcada:`, respuestas[posicion]);
}



// botones
let btnFinalizar = document.createElement("button");
btnFinalizar.id = "bfinalizar";
btnFinalizar.type = "button";
btnFinalizar.className = "btn btn-success";
btnFinalizar.innerText = "Finalizar";
btnFinalizar.style.display = "none";
btnFinalizar.onclick = finalizarCuestionario;
document.querySelector(".card-footer").appendChild(btnFinalizar);

function avanzar() {
    SeleccionadaOpcion();

    if (posicion < preguntas.length - 1) {
        posicion += 1;
        document.getElementById('batras').style.display = 'block';
        generarBarraPreguntas()
        cargarpregunta(posicion);
        DesmarcarMarcarOpciones();
    }

    if (posicion === preguntas.length - 1) {
        document.getElementById('bavanzar').style.display = 'none';
        document.getElementById('bfinalizar').style.display = 'block';
    }
}

function atras() {
    SeleccionadaOpcion();

    if (posicion > 0) {
        posicion -= 1;
        document.getElementById('bavanzar').style.display = 'block';
        document.getElementById('bfinalizar').style.display = 'none';
        generarBarraPreguntas()
        cargarpregunta(posicion);
        DesmarcarMarcarOpciones();
        
    }

    if (posicion === 0) {
        document.getElementById('batras').style.display = 'none';
    }
}
 //resumen de las respuestas y finalizar cuestionario


function finalizarCuestionario() {
  SeleccionadaOpcion();

  let faltantes = [];
  let listaResultados = document.getElementById("detalleResultados");
  listaResultados.innerHTML = ""; // Limpiar lista antes de agregar resultados
  for (let i = 0; i < preguntas.length; i++) {
      if (respuestas[i] === undefined) {
          faltantes.push(i + 1);
      }
  }

  if (faltantes.length > 0) {
      document.getElementById("resultadoTexto").innerHTML = `
          <strong>Faltan por responder las preguntas:</strong> ${faltantes.join(", ")}
      `;
  } else {
      let correctas = 0;

      for (let i = 0; i < preguntas.length; i++) {
          let esCorrecta = respuestas[i] === preguntas[i].respuesta_correcta - 1;
          if (esCorrecta) correctas++;


          // Crear la lista con color de éxito o error.
          let item = document.createElement("li");
          item.classList.add("list-group-item");
          item.classList.add(esCorrecta ? "list-group-item-success" : "list-group-item-danger");
          item.innerHTML = `<strong>Pregunta ${i + 1}:</strong> ${preguntas[i].pregunta} <br>
                            <strong>Tu respuesta:</stro.ng> ${preguntas[i].opciones[respuestas[i]] || "No respondida"} <br>
                            <strong>Respuesta correcta:</strong> ${preguntas[i].opciones[preguntas[i].respuesta_correcta - 1]}`;
          listaResultados.appendChild(item);
      }

      let nota = (correctas / preguntas.length) * 5;

      document.getElementById("resultadoTexto").innerHTML = `
          <strong>Respuestas correctas:</strong> ${correctas} <br>
          <strong>Respuestas incorrectas:</strong> ${preguntas.length - correctas} <br>
          <strong>Nota final:</strong> ${nota.toFixed(2)} / 5
      `;

      
  }

  // Mostrar el modal
  let modal = new bootstrap.Modal(document.getElementById("resultadoModal"));
  modal.show();
}



function generarBarraPreguntas() {
  let barra = document.getElementById("barraPreguntas");
  barra.innerHTML = ""; // Limpiar antes de generar

  for (let i = 0; i < preguntas.length; i++) {
      let boton = document.createElement("button");
      boton.classList.add("btn", "m-1"); // Espaciado y estilo

      if (respuestas[i] !== undefined) {
          boton.classList.add("btn-success"); // Verde si está respondida
      } else {
          boton.classList.add("btn-danger"); // Rojo si no está respondida
      }

      boton.innerText = i + 1;
      boton.onclick = function () {
          irAPregunta(i);
      };

      barra.appendChild(boton);
  }
}
// barra de preguntas 

function irAPregunta(numero) {
  posicion = numero;

  cargarpregunta(posicion);
  DesmarcarMarcarOpciones();

  // Mostrar/Ocultar botones según la posición
  document.getElementById('batras').style.display = (posicion == 0) ? 'none' : 'block';
  document.getElementById('bavanzar').style.display = (posicion == preguntas.length - 1) ? 'none' : 'block';
  document.getElementById('bfinalizar').style.display = (posicion == preguntas.length - 1) ? 'block' : 'none';
}


   
document.getElementById('batras').style.display = 'none';
cargarpregunta(posicion);
generarBarraPreguntas(); // Llamar al inicio para generar la barra


  
  