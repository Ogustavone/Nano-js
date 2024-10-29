const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Retorna a latência do bot.'),
  
  async execute(interaction) {
    const msg = await interaction.reply({ content: ":ping_pong: **Pong!**", fetchReply: true });
    const latency = msg.createdTimestamp - interaction.createdTimestamp;
    const api_latency = interaction.client.ws.ping;
    await interaction.editReply(
      `:ping_pong: **Pong!**\n\`Latência: ${latency}ms | API: ${api_latency}ms\``
    );
  }
};