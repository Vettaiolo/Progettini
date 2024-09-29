function calcolaTotale() {
    const manutenzioni = document.querySelectorAll('input[name="manutenzione"]:checked');
    let totale = 0;
    manutenzioni.forEach((manutenzione) => {
        totale += parseFloat(manutenzione.value);
    });
    document.getElementById("totale").textContent = totale.toFixed(2) + " €";
}
