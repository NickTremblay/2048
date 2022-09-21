import existsInMatrix from "./existsInMatrix";

// Generate inital board state as matrix of ints
function generateInitialBoard(width: number, height: number, nRandomCells: number, randomCellValue: number){
    // row, column tuples where randomly generated cells will be placed
    let randomCellLocations: number[][] = []; 
    for(let i = 0; i < nRandomCells; i++){
        let r: number = Math.floor(Math.random() * (height - 1));
        let c: number = Math.floor(Math.random() * (width - 1)); 

        // If random location already chosen, retry 
        if(existsInMatrix([r,c], randomCellLocations)){
            console.error("Collision in chosing random cell locations, retrying");
            i-= 1; 
            continue; 
        }

        randomCellLocations.push([r, c]);
    }

    let board: number[][] = [];

    for(let i = 0; i < height; i++){
        let row: number[] = [];
        for(let j = 0; j < width; j++){
            if(existsInMatrix([i, j], randomCellLocations)){
                row.push(randomCellValue);
            }else row.push(0);
        }
        board.push(row);
    }
    return board;
}

export default generateInitialBoard;