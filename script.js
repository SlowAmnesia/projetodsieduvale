const jsonData = `
{
    "nickname": "Teste", 
    "user": "@slowamnesia", 
    "time_passed": 14, 
    "content_text": "Exemplo de texto escrito em uma publicação normal de rede social exemplo de texto escrito em uma publicação normal de rede social exemplo de texto escrito em uma publicação normal de rede social", 
    "content_image": "./assets/cat.jpeg"
}`;
const objeto = JSON.parse(jsonData);

document.querySelector(".nickname").innerHTML = objeto.user;
document.querySelector(".user").innerHTML = objeto.user;
document.querySelector(".time-passed").innerHTML = objeto.time_passed;
document.querySelector(".content-text").innerHTML = objeto.content_text;
document.querySelector(".content-image").src = objeto.content_image;

