async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarVideo(titulo, descricao, imagem, url){
    const conexao = await fetch("http://localhost:3000/videos",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({titulo:titulo,
            descricao: `${descricao} mil visualizações`,
            imagem:imagem,
            url:url})
    })
    if(!conexao.ok){
        throw new Error('Não foi possivel enviar o video');
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}
export const conectaApi = {
    listaVideos,
    criarVideo,
    buscaVideo
}