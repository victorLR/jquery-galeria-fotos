    $(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botão-cancelar').click(function() {
    $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
        const novoItem = $(`<li style="display: none"></li>`)
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
        $(`
        
            <div class="overlay-images-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">
                    ver imagem em tamanho real
                    </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo("ul"); 
        $(novoItem).fadeIn(1000); /* adciona um efeito de transição ao elemento de imagem */
        $("#endereco-imagem-nova").val("")
    })
})



