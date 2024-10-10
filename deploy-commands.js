const { REST, Routes } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');

// Importar comandos
const fs = require('node:fs');
const path = require('node:path');
const { stringify } = require('node:querystring');
const commandsPath = path.join(__dirname, 'comandos');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const commands = [];
for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  commands.push(command.data.toJSON());
};

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