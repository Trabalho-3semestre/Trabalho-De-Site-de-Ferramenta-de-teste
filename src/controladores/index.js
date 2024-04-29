function pesquisa() {
    const pesquisaValor = document.querySelector('.inp-pesquisa').value;
    const padronizar = pesquisaValor.toLowerCase().trim();
    console.log("Valor padronizado:", padronizar);
    if (!padronizar) {
        console.log("O campo de pesquisa está vazio.");
        return ""; 
    }
    const ferramentasDeTeste = ["selenium", "ranorex", "progress", "junit", "cucumber", "test"];
    const filtrar = ferramentasDeTeste.filter(a => a.toLowerCase() === padronizar);
    const encontrar = filtrar.length > 0 ? filtrar[0] : null;
    console.log(encontrar);
    return encontrar ? `http://127.0.0.1:5500/src/paginasHtml/${encontrar}.html` : "";
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