const campos = document.querySelectorAll(".formulario input");

function ativarLabel(campo) {
    const label = campo.nextElementSibling;
    label.classList.add('label_ativa');
}

function desativarLabel(campo) {
    const label = campo.nextElementSibling;
    label.classList.remove('label_ativa');
}

function handleFocus({target}) {
    ativarLabel(target);
}

function handleBlur({target}) {
    desativarLabel(target)
}

campos.forEach((campo) => {
    campo.addEventListener("focus", handleFocus);
});

campos.forEach((campo) => {
    campo.addEventListener("blur", handleBlur)
});