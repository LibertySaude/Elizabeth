function atualizarConteudo() {
    fetch('/caminho/para/seu/endpoint')
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data;
        })
        .catch(error => console.error('Erro:', error));
}

// Atualiza o conteúdo a cada 1 minuto
setInterval(atualizarConteudo, 60000); // 60000 milissegundos = 1 minuto

// Atualiza imediatamente ao carregar a página
window.onload = atualizarConteudo;
