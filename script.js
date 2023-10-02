$('#telefone').on('input', function () {
    var val = this.value.replace(/\D/g, '');
    this.value = val.replace(/(\d{2})(\d{4,5})(\d{4}).*/, '($1) $2-$3');
});

$('#cpf').on('input', function () {
    var val = this.value.replace(/\D/g, ''); 
    this.value = val.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
});

$('#formulario').submit(function() {
    alert('Enviado!'); 
});