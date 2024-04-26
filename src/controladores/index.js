export function pesquisa() {
    const pesquisaValor = document.getElementById("barraDePesquisa").value;
    const padronizar = pesquisaValor.toLowerCase();
    const ferramentasDeTeste = ["selenium", "ranorex", "progress", "junit", "cucumber", "test"];
    const encontrar = ferramentasDeTeste.find(a => a === padronizar);
    console.log(encontrar);
    return encontrar ? `http://127.0.0.1:5500/src/paginasHtml/${encontrar}.html` : '';
}

export function paginaSelenium(ev) {
    ev.preventDefault();
    window.location.href = pesquisa();
}