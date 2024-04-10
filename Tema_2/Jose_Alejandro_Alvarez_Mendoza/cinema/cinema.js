// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

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
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

function suggest(numSeats, seats) {
    let selectedSeats = new Set();

    for (let i = seats.length - 1; i >= 0; i--) {
        let row = seats[i];

        if (numSeats > row.length) {
            continue;
        }

        let freeSeatsCount = 0;
        let tempSelectedSeats = [];

        for (let j = 0; j < row.length; j++) {
            if (!row[j].estado) {
                freeSeatsCount++;
                tempSelectedSeats.push(row[j].id);
            } else {
                freeSeatsCount = 0;
                tempSelectedSeats = [];
            }

            if (freeSeatsCount === numSeats) {
                for (const seat of tempSelectedSeats) {
                    selectedSeats.add(seat);
                }

                return selectedSeats;
            }
        }
    }

    return selectedSeats;
}

// Inicializar la matriz
let butacas = setup();

// Imprimir la matriz
console.log(butacas);

//Imprimir sugerencia de butacas
console.log(suggest(10, butacas));