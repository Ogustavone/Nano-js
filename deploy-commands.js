const { REST, Routes } = require('discord.js');
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
    commandsList.push(command.data.toJSON());
  };
});

// Rest
const rest = new REST({ version: '10' }).setToken(token);

// Deploy comandos
(async () => {
  try {
    console.log(`Iniciando deploy de ${commands.length} comandos...`);
    
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );
    
    console.log(`Comandos registrados! ${data.length} comandos registrados.`);
  } catch (error) {
    console.error(error);
  };
})();