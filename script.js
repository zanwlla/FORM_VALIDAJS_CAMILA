const form=document.querySelector("#form");
const nameInput=document.querySelector("#name");
const cpfInput=document.querySelector("#cpf");
const emailInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");
const jobSelect=document.querySelector("#job");
const messageTextarea=document.querySelector("#message");

//imprimindo no console os elementos da DOM
//console.log(form, nameInput, emailInput);

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    //verifica se o nome está vazio
   if(nameInput.value==="") {
    alert("Por favor, preencha seu nome");
    return;
   }

   //verifica se o cpf está preenchido e se é válido(formato)
   if(cpfInput.value==="" || !isCpfValid(cpfInput.value)){
    alert ("Por favor, preencha seu cpf");
   }
})