function preencher(){
    let nome = document.getElementById("nome")
    let sobrenome = document.getElementById("sobrenome")
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let confirmaSenha = document.getElementById("confirmarSenha")

    validar(nome, "#ff0000", "#808080")
    validar(sobrenome, "#ff0000", "#808080")
    validar(email, "#ff0000", "#808080")
    validar(senha, "#ff0000", "#808080")
    validar(confirmaSenha, "#ff0000", "#808080")
}

    

function validar(input, cor_1, cor_2) {

    let preencha = document.getElementById("preencha")

    if (!input.checkValidity()) {
        preencha.style.display = "block"
        return input.style.border = `2px solid ${cor_1}`
        
    } else {
        return input.style.border = `2px solid ${cor_2}`
    }

}