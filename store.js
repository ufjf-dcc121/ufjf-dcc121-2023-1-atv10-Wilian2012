const  store = {estado : [0,1,2,3]};


export function adiciona (valor)
{
    store.estado.push(valor);

}

export function getitems ()
{
    return [...store.estado];
}

