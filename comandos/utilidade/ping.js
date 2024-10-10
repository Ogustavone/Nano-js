const { SlashCommandBuilder, Client } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Retorna a latência do bot.'),
  
  async execute(interaction) {
    const msg = await interaction.reply({ content: ":ping_pong: **Pong!**", fetchReply: true });
    await interaction.editReply(
      `:ping_pong: **Pong!**\n\`Latência: ${msg.createdTimestamp - interaction.createdTimestamp}ms | API: ${interaction.client.ws.ping}ms\``
    );
  }
};