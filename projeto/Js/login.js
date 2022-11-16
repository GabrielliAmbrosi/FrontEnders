let email = document.getElementById("input-email");
let senha = document.getElementById("input-senha");
let textEmail = document.getElementById("textEmail");


email.addEventListener("keyup", () => {      // "keyup" o evento que fará validações enquando digita o email
  if (validarEmail(email.value) !== true) {
    textEmail.textContent = "O formato do email deve ser por ex: nome@abc.com";
    textEmail.style.color = ' #0BAD81'
  } else {
    textEmail.textContent = "";
  }
});

function validarEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; // validação do email utilizando expressão regular
  return emailPattern.test(email);
}


function logar (){
       
    if ( email.value == "" || senha.value == "" ){       
        alert('Por favor, preencha todos os campos!');
    } else {
        alert('Login efetuado com sucesso!')
        location.href = "index.html";
    }
}
