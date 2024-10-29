const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
  data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('Envia as informações do servidor.'),
  
  async execute(interaction) {
    const guild = interaction.guild;

    const adminsLength = guild.members.cache.filter(member => member.roles.cache.some(role => role.name == 'Staff' || role.name == 'Admin')).size;
    const botsLength = guild.members.cache.filter(member => member.roles.cache.some(role => role.name == 'bot')).size;
    const membersLength = guild.memberCount - botsLength;
    
    const channelsLength = guild.channels.cache.size;
    const emojisLength = guild.emojis.cache.size;
    const onlineMembers = guild.members.cache.filter(member => member.presence?.status == 'online').size;
    
    const fields = [
      { name: ":people_hugging:Membros", value: `${membersLength}`, inline: true },
      { name: ":tools:Admins", value: `${adminsLength}`, inline: true },
      { name: ":satellite:Bots", value: `${botsLength}`, inline: true },
      {
        name: `:speech_balloon:Canais (${channelsLength})`,
        value: `:smile:**emojis (${emojisLength})**\n\n:white_check_mark:**Membros online (${onlineMembers})**\n`,
        inline: false
      }
    ]
    
    const serverName = interaction.guild.name;
    const serverID = interaction.guild.id;
    const serverIcon = interaction.guild.iconURL({ dynamic: true, size: 1024 });
    const serverOwner = `<@${interaction.guild.ownerId}>`;
    const createdAt = interaction.guild.createdAt.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });

    const embed = new EmbedBuilder()
      .setColor(0xFF8C00)
      .setAuthor({ name: serverName })
      .setThumbnail(serverIcon)
      .setDescription(`**ID:** \`${serverID}\` | **Criador:** ${serverOwner}\n**Criado em:** ${createdAt}\n\n`)
      .addFields(fields)
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};