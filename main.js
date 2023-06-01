const form = document.getElementById('form-validation');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const validarA = document.getElementById('numeroA');
    const validarB = document.getElementById('numeroB');

    let valorA = parseFloat(validarA.value);
    let valorB = parseFloat(validarB.value);

    const validarForm = numeroValidar(valorA, valorB);
    const mensagemSucesso = 'Validação completa: <b>O Valor B é maior que o Valor A!</b>';

    if (validarForm){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        validarA.value = '';
        validarB.value = '';

        document.querySelector('.message-error').style.display = 'none';
    } else {
        document.querySelector('.message-error').style.display = 'block';
    }
});

function numeroValidar(valorA, valorB) {
    return valorB > valorA;
}
