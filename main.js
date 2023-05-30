import  {adiciona,getitems} from "./store.js";

const form=document.forms.entrada;
form.addEventListener('submit',envia);



atualiza();

function envia(evento){
    evento.preventDefault();
    console.log('Formulário enviado!');
    const n = form.valor.value;
    adiciona(n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function atualiza (){

    const ol=document.querySelector('ol');
    ol.innerHTML="";
    const items= getitems();
    for(let i=0; i<items.length;i++)
    {
        const li = document.createElement('li');
        li.textContent = items[i];
        ol.appendChild(li);
    }
  items.push("boom!");
}
