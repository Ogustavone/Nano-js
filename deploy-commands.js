const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

// Importar comandos
const commandsList = [];
fs.readdirSync('./comandos').forEach(dir => {
  const commandsPath = path.join(__dirname, 'comandos', dir);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./comandos/${dir}/${file}`);
    if (command.data instanceof SlashCommandBuilder) {
      commandsList.push(command.data.toJSON());
    } else {
      commandsList.push(command.data);
    }
  };
});

// Rest
const rest = new REST({ version: '10' }).setToken(token);

// Deploy comandos
(async () => {
  try {
    console.log(`Iniciando deploy de ${commandsList.length} comandos...`);
    
    for (const guild of guildId) {
      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guild),
        { body: commandsList }
      );
      console.log(`Deploy finalizado! ${data.length} comandos registrados no servidor ${guild}.`)
    };
  } catch (error) {
    console.error(error);
  };
})();