function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("phone").value;

    if (nome.trim() !== "" && telefone.trim() !== "") {
        alert("Seus dados foram encaminhados com sucesso!");
        return true;
        }
    else {
        alert("Por favor, preencha todos os campos nome e telefone.");
        return false;
    }
}