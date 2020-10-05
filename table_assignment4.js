let assignment4_table = [{
    'filename': '',
    'compression algorithm': '',
    'compression bit-rate': '',
    'original file size': '',
    'compressed file size': '',
    'compression ratio': '',
    'original version': '',
    'compressed version': '',
    'residual noice': ''
}, {
    'filename': '',
    'compression algorithm': '',
    'compression bit-rate': '',
    'original file size': '',
    'compressed file size': '',
    'compression ratio': '',
    'original version': '',
    'compressed version': '',
    'residual noice': ''
}, {
    'filename': '',
    'compression algorithm': '',
    'compression bit-rate': '',
    'original file size': '',
    'compressed file size': '',
    'compression ratio': '',
    'original version': '',
    'compressed version': '',
    'residual noice': ''
}, {
    'filename': '',
    'compression algorithm': '',
    'compression bit-rate': '',
    'original file size': '',
    'compressed file size': '',
    'compression ratio': '',
    'original version': '',
    'compressed version': '',
    'residual noice': ''
}]

function assignment_table() {
    let table = document.createElement('table');
    table.id = "residual_table"
    for (row = 0; row < assignment4_table.length; row++) {
        tr = document.createElement('tr');
        let table_data = Object.keys(assignment4_table[row]);
        for (col = 0; col < Object.keys(assignment4_table[row]).length; col++) {
            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = assignment4_table[row][table_data[col]];
        }
        table.appendChild(tr);
    }
    document.getElementById("final_table").appendChild(table);
}