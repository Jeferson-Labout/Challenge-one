let keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

document.getElementById("btn_criptografar").addEventListener("click", criptografar);
document.getElementById("btn_descriptografar").addEventListener("click", descriptografar);

function criptografar() {
    let textoEncriptado = document.getElementById("text_criptografar").value;

    if (validarRestriccion(textoEncriptado)) {

        for (let i = 0; i < keys.length; i++) {
            if (textoEncriptado.includes(keys[i][0])) {
                textoEncriptado = textoEncriptado.replaceAll(keys[i][0], keys[i][1]);
            }
        }

        mostrarcriptografia(textoEncriptado);
    } else {
        alert("Caracteres não permitidos, O texto contém caracteres não permitidos (maiúsculas e/ou caracteres especiais)");
    }
}

function descriptografar() {
    let textoDesencriptado = document.getElementById("text_criptografar").value;

    if (validarRestriccion(textoDesencriptado)) {

        for (let i = 0; i < keys.length; i++) {
            if (textoDesencriptado.includes(keys[i][1])) {
                textoDesencriptado = textoDesencriptado.replaceAll(keys[i][1], keys[i][0]);
            }
        }

        mostrarDecryptografia(textoDesencriptado);
    } else {
        alert("Caracteres não permitidos, O texto contém caracteres não permitidos (maiúsculas e/ou caracteres especiais)");
    }
}

function validarRestriccion(text_criptografar) {
    for (let i = 0; i < text_criptografar.length; i++) {
        caracter = text_criptografar[i];
        if (caracter.charCodeAt(0) < 97 || caracter.charCodeAt(0) > 122) {
            if (caracter.charCodeAt(0) != 32) {
                return false;
            }
        }
    }
    return true;
}

function mostrarcriptografia(textoCriptografado) {
    document.getElementsByClassName("_resultado_img")[0].style.display = "none";
    document.getElementsByClassName("_resultado_item")[0].style.display = "flex";
    document.getElementById("_resultado_item_label").innerText = textoCriptografado;
}

function mostrarDecryptografia(textoDescriptografado) {
    document.getElementsByClassName("_resultado_img")[0].style.display = "none";
    document.getElementsByClassName("_resultado_item")[0].style.display = "flex";
    document.getElementById("_resultado_item_label").innerText = textoDescriptografado;
}

document.getElementById("btn-copiar").addEventListener("click", function () {
    let mensagem = document.getElementById("_resultado_item_label").innerText;
    navigator.clipboard.writeText(mensagem);
    document.getElementById("_resultado_item_label").innerText = "";
    document.getElementById("text_criptografar").value = "";
    document.getElementsByClassName("_resultado_img")[0].style.display = "block";
    document.getElementsByClassName("_resultado_item")[0].style.display = "none";
    alert('Mensagem copiada com sucesso.');
});
