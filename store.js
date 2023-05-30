const  store = {estado : [0,1,2,3]};


export function adiciona (valor)
{
    store.estado.push(valor);

}
export function remover (valor)
{
    store.estado.pop(valor);
}
export function getitems ()
{
    return [...store.estado];
}

