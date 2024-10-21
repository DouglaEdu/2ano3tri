<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>Flashcard</title>
</head>
<body>
    <mafunction criaCartao(categoria, pergunta, resposta) {
        let container = document.getElementById('container')
        let cartao = document.createElement('article')
        cartao.className = 'cartao'
    
        cartao.innerHTML = `
        <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
        </div>
        `
    
        let respostaEstaVisivel = false
    
        function viraCartao() {
            respostaEstaVisivel = !respostaEstaVisivel
            cartao.classList.toggle('active', respostaEstaVisivel)
        }
        cartao.addEventListener('click', viraCartao)
    
    
        container.appendChild(cartao)
    
    }in>
        <section id="container">
            <!-- <article class="cartao">
                <div class="cartao__conteudo">
                    <h3>Programação</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>O que é JavaScript?</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O JavaScript é uma linguagem de programação</p>
                    </div>
                </div>
            </article> -->
        </section>
    </main>
    <footer>
        <p>Projeto desenvolvido pela Alura, sem fins lucrativos</p>
    </footer>
    <script src="app.js"></script>
    <script src="perguntas.js"></script>
</body>
</html>