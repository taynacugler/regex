function formatarTel() {
    var val = $('#telefone').val().replace(/\D/g, '');
    $('#telefone').val(val.replace(/(\d{2})(\d{4,5})(\d{4}).*/, '($1) $2-$3'));
}

function formatarCPF() {
    var val = $('#cpf').val().replace(/\D/g, '');
    $('#cpf').val(val.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4'));
}

$('#telefone').on('input', formatarTel);
$('#cpf').on('input', formatarCPF);

$('#formulario').submit(function(event) {
    event.preventDefault(); 
    alert('Enviado!');
});