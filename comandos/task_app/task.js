const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tasks")
    .setDescription("Gerencie suas tarefas com a Nano!."),

  async execute(interaction) {},
};
