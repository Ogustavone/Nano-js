const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');

// Cliente do bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Importar comandos
const fs = require('node:fs');
const path = require('node:path');
client.commands = new Collection();

// Passando pelos diretórios e cada arquivo .js
fs.readdirSync('./comandos').forEach(dir => { 
  const commandsPath = path.join(__dirname, 'comandos', dir);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    // Adicionando os comandos
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const commands = require(filePath);
      if ('data' in commands && 'execute' in commands) {
        client.commands.set(commands.data.name, commands);
      } else {
        console.log(`Arquivo ${file} necessita de uma propriedade 'data' e 'execute'`)};
    };
});

// Inicialização e login do bot
client.once(Events.ClientReady, botClient => {
  console.log(`Login feito como ${botClient.user.tag}`);
});
client.login(token);

// Listener de interações
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) {
    console.error(`Comando ${interaction.commandName} não encontrado.`);
    return;
  }

  try {
    command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Houve um erro ao executar este comando!', ephemeral: true });
  }
});
