const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
import('node-fetch')
const { openweather } = require('../../config.json');

async function requestWeather(city) {
  const formattedCityName = city.replace(' ', '+');
  const API_KEY = openweather;
  const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${formattedCityName}&appid=${API_KEY}&lang=pt_br&units=metric`;

  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    if (data.cod === 200) {
      const currentWeather = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const cityName = data.name;
      let weather = [];
      weather.push(currentWeather, temperature, humidity, windSpeed, cityName);
      return weather;
    } else {
      throw new Error(data.message);
    };
  } catch (error) {
    console.error(error);
  };
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clima')
    .setDescription('Retorna a previsão do tempo de uma localidade.')
    .addStringOption(option =>
      option
        .setName('local')
        .setDescription('Nome da cidade/localidade')
        .setRequired(true)
    ),
  async execute(interaction) {
    const cityName = interaction.options.getString('local');
    const weather = await requestWeather(cityName);
    
    fields = [
      { name: 'Clima', value: `${weather[0]}` },
      { name: 'Temperatura', value: `${weather[1]}°C` },
      { name: 'Umidade', value: `${weather[2]}%` },
      { name: 'Velocidade do vento', value: `${weather[3]}km/h` },
    ];

    const embed = new EmbedBuilder()
      .setColor(0xFF8C00)
      .setTitle(`Previsão de ${weather[4]}`)
      .addFields(fields)
      .setThumbnail('https://img.freepik.com/vetores-premium/icone-de-previsao-do-tempo-sol-e-nuvens_739746-68.jpg')
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
