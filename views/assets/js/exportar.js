function exportPDF() {
    var doc = new jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600
    };
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, "Nacimientos por Comunidad");
    doc.autoTable({
        html: '#datatable',
        startY: 70,
        theme: 'striped',
        columnStyles: {
            0: {
                cellWidth: 90,
            },
            1: {
                cellWidth: 90,
            },
            2: {
                cellWidth: 90,
            }
        },
        styles: {
            minCellHeight: 40
        }
    })
    doc.save('tabla.pdf');

}

function exportPNG() {
    console.log("dfsafdsahfkjhadskj");
    const screen = document.getElementById('datatable');
    html2canvas(screen).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "Tabla.png");
        anchor.click();
        anchor.remove();
    });
}

function exportEXCEL() {
    // Variable to store the final csv data
    var csv_data = [];
    // Get each row data
    var datos = document.getElementById('datatable');
    var rows = datos.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');
        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
            // Get the text data of each cell of
            // a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }
        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }
    // combine each row data with new line character
    csv_data = csv_data.join('\n');
    downloadCSVFile(csv_data);
    /* We will use this function later to download
    the data in a csv file downloadCSVFile(csv_data);
    */
}

function downloadCSVFile(csv_data) {

    // Create CSV file object and feed
    // our csv_data into it
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });
    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');
    // Download csv file
    temp_link.download = "Tabla.xlsx";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}