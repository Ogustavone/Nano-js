const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Envia as informações do usuário.'),
  async execute(interaction) {
    /*
    Ainda em desenvolvimento...

    Opções:
      - opção: 
        pesquisa por id do usuario

    Requisitos:
      - embed: 
        username, user, pronomes, badges, createdAt, joinedAt
        avatar, id, cargos, total de mensagens (removido)
      - mensagem footer: 
        "Comando usado por usuario - data: dia/mes/ano"
    */

    const username = interaction.member.user.username;
    const user = interaction.member.user;
    const pronouns = interaction.member.pronouns;
    const badges = interaction.member.user.flags;
    const createdAt = interaction.member.createdAt;
    const joinedAt = interaction.member.joinedAt;
    const avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
    const id = user.id;
    const roles = interaction.member.roles.cache
      .filter(role => role.name !== '@everyone').map(role => role.name).join(', ');
  }
};