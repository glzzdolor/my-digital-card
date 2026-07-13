const btnEmail = document.getElementById('btn-email');
const emailAlert = document.getElementById('email-alert');
const meuEmail = "theglzzbest@gmail.com";

btnEmail.addEventListener('click', () => {
    navigator.clipboard.writeText(meuEmail).then(() => {
        emailAlert.classList.add('alert-visible');
        setTimeout(() => {
            emailAlert.classList.remove('alert-visible');
        }, 2000);
    }).catch(err => {
        console.error('Falha ao copiar: ', err);
        alert('Não foi possível copiar automáticamente. Seu e-mail é: ' + meuEmail);
    });
});