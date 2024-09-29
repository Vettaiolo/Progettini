function calcolaTotale() {
    const pizzaSelezionata = document.querySelector('input[name="pizza"]:checked');
    if (!pizzaSelezionata) {
        alert('Per favore, seleziona un tipo di pizza!');
        return;
    }
    const prezzoPizza = parseFloat(pizzaSelezionata.getAttribute('data-price'));
    let descrizioneOrdine = `Pizza: ${pizzaSelezionata.value} (${prezzoPizza} €)`;
    const ingredientiSelezionati = document.querySelectorAll('input[name="extra"]:checked');
    let prezzoExtra = 0;
    let descrizioneExtra = '';
    ingredientiSelezionati.forEach((ingrediente) => {
        prezzoExtra += parseFloat(ingrediente.getAttribute('data-price'));
        descrizioneExtra += `, ${ingrediente.value}`;
    });
    const quantita = parseInt(document.getElementById('quantita').value);
    const totale = (prezzoPizza + prezzoExtra) * quantita;
    const riepilogo = `Hai ordinato ${quantita} ${quantita > 1 ? 'pizze' : 'pizza'} ${pizzaSelezionata.value}${descrizioneExtra}`;
    document.getElementById('riepilogo').textContent = riepilogo;
    document.getElementById('totale').textContent = totale.toFixed(2);
}
