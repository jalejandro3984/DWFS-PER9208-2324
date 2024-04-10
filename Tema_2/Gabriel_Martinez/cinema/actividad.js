// Definir el tamaño de la matriz de butacas
const N = 5; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: true // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

// Función para sugerir butacas consecutivas
function suggest(seats, qty){
    let seatSuggestion = [];
    for (let i = 0; i < seats.length; i++){
        let tempSuggestion = []
        for (let j = 0; j < seats[i].length && tempSuggestion.length < qty; j++){
            if (!seats[i][j].estado){
                tempSuggestion.push(seats[i][j])
            }
            else{
                tempSuggestion = []
            }
        }
        if (tempSuggestion.length === qty){
            seatSuggestion = tempSuggestion
        }
    }
    return seatSuggestion;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

butacas[3][0].estado = false;
butacas[3][2].estado = false;
butacas[3][3].estado = false;

butacas[3][0].estado = false;
butacas[3][1].estado = true;
butacas[3][3].estado = false;
butacas[3][4].estado = false;

let seatSuggestion = suggest(butacas, 2);

console.log(seatSuggestion);

