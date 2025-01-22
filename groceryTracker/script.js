function calculateTotalAmount() {
    let amount1 = parseFloat(document.getElementById('grocery1').value);
    let amount2 = parseFloat(document.getElementById('grocery2').value);
    let amount3 = parseFloat(document.getElementById('grocery3').value);

    let totalAmount = amount1 + amount2 + amount3;

    document.getElementById('result').innerText = `The total amount is :$ ${totalAmount}`;
}
