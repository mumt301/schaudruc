let assignment4_table = [{
    'filename': 'Filename',
    'compression algorithm': 'Compression Algorithm',
    'compression bit-rate': 'Bit-rate',
    'original file size': 'Original Size',
    'compressed file size': 'Compressed Size',
    'compression ratio': 'Compression Ratio',
    'original version': 'Link to Original Audio',
    'compressed version': 'Link to Compressed Audio',
    'residual noice': 'Link to Residual Audio'
}, {
    'filename': '"The Prayer"',
    'compression algorithm': 'MP3',
    'compression bit-rate': '96 kbps',
    'original file size': '38700 KB',
    'compressed file size': '737 KB',
    'compression ratio': '0.02',
    'original version': 'row 2',
    'compressed version': 'row 2',
    'residual noice': 'row 2'
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