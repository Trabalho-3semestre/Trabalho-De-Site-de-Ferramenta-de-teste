function pesquisa() {
    const pesquisaValor = document.querySelector('.inp-pesquisa').value;
    const padronizar = pesquisaValor.toLowerCase().trim();
    
    console.log("Valor padronizado:", padronizar);
    
    if (!padronizar) {
        console.log("O campo de pesquisa está vazio.");
        return ""; 
    }
    
    const ferramentasDeTeste = ["mais_usados", "newsletter"];
    
    // Verifica se a pesquisa é uma correspondência exata
    const filtrar = ferramentasDeTeste.filter(a => a.toLowerCase() === padronizar);
    
    // Se não for uma correspondência exata, verifica correspondências parciais
    const correspondenciaParcial = ferramentasDeTeste.find(a => a.toLowerCase().includes(padronizar));
    
    // Se houver uma correspondência exata, retorna o link diretamente
    if (filtrar.length > 0) {
        window.location.href = `https://trabalho-3semestre.github.io/Trabalho-De-Site-de-Ferramenta-de-teste/src/paginasHtml/${filtrar[0]}.html`;
    } 
    // Se houver uma correspondência parcial, redireciona para o link correspondente
    else if (correspondenciaParcial) {
        window.location.href = `https://trabalho-3semestre.github.io/Trabalho-De-Site-de-Ferramenta-de-teste/src/paginasHtml/${correspondenciaParcial}.html`;
    } else {
        console.log("Nenhuma correspondência encontrada.");
    }
    
    
    
}


function paginaSelenium(ev) {
    ev.preventDefault();
    const url = pesquisa(); // Chamando a função pesquisa para obter a URL
    if (url) {
        window.location.href = url; // Redirecionando apenas se uma URL válida for retornada
    } else {
        console.log("URL de pesquisa inválida.");
    }
}

export { pesquisa, paginaSelenium };