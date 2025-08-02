// Aguarda o carregamento completo do conteúdo da página
document.addEventListener('DOMContentLoaded', function() {
  
  // Seleciona os elementos do HTML que vamos manipular
  const portfolioToggle = document.getElementById('portfolio-toggle');
  const portfolioLinks = document.getElementById('portfolio-links');
  const arrow = document.getElementById('arrow');

  // Verifica se os elementos foram encontrados antes de adicionar o evento
  if (portfolioToggle && portfolioLinks && arrow) {
    
    // Adiciona um "ouvinte de evento" que espera por um clique no botão do portfólio
    portfolioToggle.addEventListener('click', function() {
      
      // Adiciona ou remove a classe 'show' da div dos links do portfólio
      // A classe 'show' faz o conteúdo aparecer (definido no CSS)
      portfolioLinks.classList.toggle('show');
      
      // Adiciona ou remove a classe 'open' da seta para girá-la
      arrow.classList.toggle('open');

    });
  }
});