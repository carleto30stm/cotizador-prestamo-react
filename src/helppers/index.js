

const formatearDinero = (valor) =>{
    const formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    })

    return formatter.format(valor);
};

function totalPagar(cantidad,meses) {
    let total;
    if (cantidad < 5000) {
        total = cantidad *1.5;
    }if(cantidad > 5000 & cantidad <= 10000){
        total = cantidad * 1.4;
    }if(cantidad > 10000 & cantidad <= 15000){
        total = cantidad * 1.2
    } if(cantidad > 15000) {
        total = cantidad * 1.1
    }
    if (meses === 24) {
        total *= 1.5;
    }if(meses === 12){
        total *= 1.3;
    } else {
        total *= 1.1;
    }
    return total;
}


export{
    formatearDinero,
    totalPagar
}