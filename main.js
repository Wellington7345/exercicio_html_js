const form = document.getElementById('form-exercicio');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    if (numero2.value > numero1.value) {
        alert('Legal! O número 2 é maior que o número 1!');
    }   else {
        alert('Ops... O número 2 é menor ou igual ao número 1');
    }

})

console.log(form);