function criaCartao (categoria,pergunta,resposta){
    let container =document.getElementsById('container');
    let cartao = document.createElement('article');
    cartao.className='cartao';
    cartao.innerHTML=`
<div class="conteudo-cartao">
    <h3>categoria</h3>
</div>
<div class="pergunta-cartao">
    <p>resposta</p>
</div>
</div>
    `
    container.appendChild(cartao);
}