console.log('TEST SCRIPT');
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.energiaxxi.com/content/endesa-com/es/contratar/que-es-el-mercado-regulado-luz-gas.getPriceToday.sendmail.json?' + 
    'btnSinIVATitle=Sin%20IVA&ivaRate=21&atNightPriceTitle=Por%20la%20noche%20&btnConIVATitle=Con%20IVA' +
    '&inTheMorningPriceTitle=Por%20la%20ma%C3%B1ana&lang=es&inTheAfternoonPriceTitle=Por%20la%20tarde' +
    '&disclaimer=%28%2A%29%20Pen%C3%ADnsula%2C%20Baleares%20y%20Canarias.%20Datos%20extra%C3%ADdos%20de%20la%20web%20Red%20El%C3%A9ctrica%20de%20Espa%C3%B1a.%20Precio%20medio%20del%20d%C3%ADa%3A%20Media%20aritm%C3%A9tica%20de%20los%20precios%20horarios%20del%20d%C3%ADa%20en%20funci%C3%B3n%20del%20tipo%20de%20tarifa.%20Precios%20en%20kilovatios%20hora%20%28kWh%29.&notice=F%C3%ADjate%20bien%20en%20las%20horas%20resaltadas%20en%20verde%3A%20son%20las%20m%C3%A1s%20baratas.%20Concentra%20ah%C3%AD%20tu%20uso%20del%20horno%2C%20lavadoras%2C%20aspiradora%2C%20plancha...',
    
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer tu_token_aqui'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const tableBody = document.getElementById('data-table').getElementsByTagName('tbody')[0];
            data.entries.forEach(entry => {
                const row = tableBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                cell1.textContent = entry.API;
                cell2.textContent = entry.Description;
                cell3.textContent = entry.Link;
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});