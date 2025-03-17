function trocarTela(telaId) {
    // Esconde todas as telas
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => tela.classList.remove('ativa'));
  
    // Mostra a tela desejada
    const telaAtiva = document.getElementById(telaId);
    if (telaAtiva) {
      telaAtiva.classList.add('ativa');
    }
  }
  
  function iniciarGeracaoGraficos() {
    let contador = 0;
    const maxGraficos = 10;
  
    function gerarGrafico() {
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.left = "-9999px";
      container.style.width = "400px";
      container.style.height = "300px";
      document.body.appendChild(container);
  
      const chart = new JSC.Chart(container, {
        debug: false,
        type: 'column',
        series: [{
          points: [
            {x: 'A', y: Math.floor(Math.random() * 100)},
            {x: 'B', y: Math.floor(Math.random() * 100)},
            {x: 'C', y: Math.floor(Math.random() * 100)}
          ]
        }],
        title_label_text: 'Gráfico #' + (contador + 1)
      });
  
      setTimeout(() => {
        const svgMarkup = container.querySelector('svg').outerHTML;
        console.log(`Gráfico ${contador + 1}:`);
        console.log(svgMarkup);
  
        // Limpa o container
        document.body.removeChild(container);
  
        contador++;
        if (contador < maxGraficos) {
          gerarGrafico();
        } else {
          alert('Foram gerados 10 gráficos em segundo plano!');
        }
      }, 500);
    }
  
    gerarGrafico();
  }
  