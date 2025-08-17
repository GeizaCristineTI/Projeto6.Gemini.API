function copyToClipboard() {
  const campoPergunta = document.getElementById('pergunta');
  const textoPergunta = campoPergunta.value.trim();

  //Condição se o campo estiver vazio retornar alerta
  if (!textoPergunta) { 
    alert('Não há nada para copiar.');
    return;
  }

 //copiando para a area de transferência
  navigator.clipboard.writeText(textoPergunta).then(() => {
    alert('Pergunta copiada para a área de transferência!');
  });
}