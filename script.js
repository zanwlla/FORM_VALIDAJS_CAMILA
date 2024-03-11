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
    console.log(nameInput,cpfInput,emailInput)
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
   if(emailInput,value===""||!isEmailValid(emailInput.value)){
    alert("Por favor preencha seu email");
    return;
   }
   if(passwordInput,value===""||validatePassword(passwordInput.value)){
    alert("Por favor preencha sua senha corretamente");
    return;
   }
   if(jobSelect,value===""){
    alert("Por favor, selecione sua escolha");
    return;
   }
   if(messageTextarea.value===""){
    alert("Por favor escreva uma mensagem");
    return;
   }
form.submit();
})
function isEmailValid(email){
    const emailRegex=new RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2-0}/

    )
    if(emailRegex.test(email)){
        return(true);
    }
        return(false);
}
function validatePassword(password,minDigits){
    if(password,lenght >=minDigits){
        return true
    }
    return false;
}
function isCpfValid(cpf){
    const cpfRegex= new RegExp(
       //xxx.xxx.xxx-xx
       /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}\-([0-9]){2}$/
    );
    if(cpfRegex.test(cpf)){
        return true;
    }
    return false;
}