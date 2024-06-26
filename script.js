window.onload = function () {
    let canvas = document.getElementById('meuCanvas');
    let ctx = canvas.getContext('2d');
 
    // Função para desenhar as linhas horizontais
    function desenharLinhasHorizontais() {
        let altura = canvas.height;
        let largura = canvas.width;
        let numeroLinhas = 17;
        let espessura = 23;
 
        for (let i = 0; i <= numeroLinhas; i++) {
            let cor = `rgba(255,218,185`;
            ctx.fillStyle = cor;
            ctx.fillRect(0, (i * altura / numeroLinhas), largura, espessura);
        }
    }
 
    // Função para desenhar as linhas verticais
    function desenharLinhasVerticais() {
        let altura = canvas.height;
        let largura = canvas.width;
        let numeroLinhas = 20;
        let espessura = 15;
 
        for (let i = 0; i <= numeroLinhas; i++) {
            let cor = `rgba(255,182,193`;
            ctx.fillStyle = cor;
            ctx.fillRect((i * largura / numeroLinhas), 0, espessura, altura);
        }
    }
 
    desenharLinhasHorizontais();
    desenharLinhasVerticais();


 
};

