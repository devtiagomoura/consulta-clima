async function buscarClima() {
  const cidade = document.getElementById("cidade").value;
  const resultado = document.getElementById("resultado");

  if (cidade.trim() === "") {
    resultado.innerText = "Por favor, digite o nome de uma cidade.";
    return;
  }

  const apiKey = "SUA_CHAVE_AQUI"; // Substitua pela sua chave
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.cod === "404") {
      resultado.innerText = "Cidade não encontrada.";
    } else {
      resultado.innerHTML = `
        Clima em <strong>${dados.name}</strong>:<br />
        ${dados.weather[0].description}<br />
        Temperatura: ${dados.main.temp}°C
      `;
    }
  } catch (erro) {
    resultado.innerText = "Erro ao buscar o clima.";
    console.error(erro);
  }
}