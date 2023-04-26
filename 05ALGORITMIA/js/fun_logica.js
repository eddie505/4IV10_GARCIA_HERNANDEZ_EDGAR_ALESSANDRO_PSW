// Función para resolver el problema 1
function Problema1() {
    // Obtener el valor del input
    var p1_input = document.querySelector("#p1-input").value;
    
    // Convertir la entrada en un array, invertirlo y asignarlo a una variable
    var p1_array = p1_input.split(' ').reverse();
    
    // Crear una variable vacía para almacenar el resultado
    var p1_res = "";
    
    // Iterar sobre cada palabra en el array y agregarla a la variable de resultado
    p1_array.forEach(function (palabra, i){
    // Agregar un espacio antes de la palabra, excepto si es la primera o la última palabra
    if(i != 0 || i != p1_array.length) p1_res += ' ';
    p1_res += palabra;
    });
    
    // Mostrar el resultado en la página web
    document.querySelector("#p1-output").textContent = p1_res;
    }
    
    // Función para resolver el problema 2
    function Problema2() {
    // Obtener los valores de los inputs
    var x1 = document.querySelector("#problema2-x1").value;
    var x2 = document.querySelector("#problema2-x2").value;
    var x3 = document.querySelector("#problema2-x3").value;
    var x4 = document.querySelector("#problema2-x4").value;
    var x5 = document.querySelector("#problema2-x5").value;
    
    var y1 = document.querySelector("#problema2-y1").value;
    var y2 = document.querySelector("#problema2-y2").value;
    var y3 = document.querySelector("#problema2-y3").value;
    var y4 = document.querySelector("#problema2-y4").value;
    var y5 = document.querySelector("#problema2-y5").value;
    
    // Crear dos vectores a partir de los valores de los inputs
    var v1 = [x1, x2, x3, x4, x5];
    var v2 = [y1, y2, y3, y4, y5];
    
    // Ordenar los vectores de mayor a menor
    v1.sort(function (menor, mayor){
    return mayor - menor
    })
    
    v2.sort(function (menor, mayor){
    return mayor - menor
    })
    
    // Calcular el producto escalar de los vectores
    var escalar = 0;
    
    for(var i = 0; i < v1.length; i++){
    escalar += v1[i] * v2[i];
    }
    
    // Mostrar el resultado en la página web
    document.querySelector("#p2-output").textContent = "El producto es: " + escalar;
    }
    
    // Función para resolver el problema 3
    function Problema3() {
    // Definir el alfabeto
    var alfabeto = [
    "A", "B", "C","D", "E","F",
    "G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T",
    "U","V","W","Y","Z",
    ];
  var p3Input = document.querySelector("#p3-input").value;

  var p3Palabras = p3Input.split(",");


  p3Palabras = p3Palabras.map(function (palabras) {
    return palabras.replace(/\s/g, "").toUpperCase();
  });

  var p3res = "";
  p3Palabras.forEach(function (palabra, i) {
    var letrasUnicas = [];
    var palabraArray = palabra.split("");


    alfabeto.forEach((letra, j) => {
      palabraArray.forEach(function (letrasPalabras, k) {
        if (letrasPalabras == letra) {
          if (letrasUnicas.indexOf(letra) < 0) {
            letrasUnicas.push(letra);
          }
        }
      });
    });
    p3res += "Palabra: " + palabra + "=" + letrasUnicas.length + "\n";
  });
  document.querySelector("#p3-output").textContent = p3res;
}
