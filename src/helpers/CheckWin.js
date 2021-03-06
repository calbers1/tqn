function CheckWin (pieces, pieceId) {

    // Find piece, exit otherwise
    const piece = pieces.find(({ id }) => id === parseInt(pieceId));
    if (!piece) return;

    // Get located pieces with same row OR column
    var neighbors = [];
    pieces.forEach((p) => {
        if (!p.location) return false;
        const sameRow = p.location.row === piece.location.row;
        const sameColumn = p.location.column === piece.location.column;
        const diagonalValue = getDiagonalValue(piece, p);
        const isSameLocation = sameRow && sameColumn;
        if(sameRow) {
            neighbors.push({...p, match: 'row'});
        }
        if (sameColumn) {
            neighbors.push({...p, match: 'column'});
        }
        if(diagonalValue === 1 || isSameLocation) {
            neighbors.push({...p, match: 'diagonal_up'});
        }
        if(diagonalValue === -1 || isSameLocation) {
            neighbors.push({...p, match: 'diagonal_down'});
        }
    });

    // Accumulate similarities per direction
    const directions = neighbors.reduce((acc, item) => {

        // For each characteristic
        Object.keys(item.details).forEach((key) => {

            // Sum its boolean value to the matched row or column
            const matches = item.details[key] === piece.details[key];
            acc[item.match][key] = (acc[item.match][key] || 0) + matches;
            
        });

        return acc;
    }, {row: {}, column: {}, diagonal_up: {}, diagonal_down: {}});

    // Check if some value in some direction totally matched
    const hasWon = Object.values(directions).some(direction => {
        return Object.values(direction).some(value => value === 4);   
    });

    return hasWon;
}

// Gets the diagonal type (+, -)
function getDiagonalValue (rootPiece, comparedPiece) {
    const colDiff = comparedPiece.location.column - rootPiece.location.column;
    const rowDif = comparedPiece.location.row - rootPiece.location.row;
    const diff = Math.abs(colDiff) !== Math.abs(rowDif);
    if (rowDif === 0 || diff ) return 0;
    return colDiff/rowDif;
};


export {
    CheckWin
};