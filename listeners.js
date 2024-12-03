/*
const database = require('./sql/db.js');
const Users = require('./sql/users.js');
const Servers = require('./sql/servers.js');


async function findUser(message) {
  await database.sync();
  const user = await Users.findOne({
    where: { user_id: message.author.id },
    logging: false
  });
  return user;
}

async function userAdd(message) {
  const user = await findUser(message);
  if (!user) {
    console.log(`[INFO] Novo usuário ${message.author.id} adicionado na table Users.`);
    await Users.create({ user_id: message.author.id, global_level: 0, exp_level: 0 });
  } else {
    updateUserExp(message, user); // aproveitei o useradd pra atualizar o level
  };
};

async function updateUserExp(message, user) {
  if (user) {
    await Users.update(
      { exp_level: user.exp_level + 15 },
      { where: { user_id: message.author.id }, logging: false }
    );
  };
};
*/

/*
// Message Listener
async function messageListener(client) {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
  });

  client.on('messageDelete', async (message) => {
    if (message.author.bot) return;
    console.log(`mensagem de ${message.author.username} deletada:`, message.content);
  });
};

// Guild Listener
async function guildListener(client) {
  client.on('guildCreate', async (guild) => {
    console.log('entrou no servidor', guild.name);
  });

  client.on('guildDelete', async (guild) => {
    console.log('saiu do servidor', guild.name);
  });

  client.on('guildUpdate', async (oldGuild, newGuild) => {
    console.log(`O servidor ${oldGuild.name} foi atualizado para ${newGuild.name}`);
  });
}

// Member Listener
async function memberListener(client) {
  client.on('guildMemberAdd', async (member) => {
    console.log(member.name, 'entrou no servidor');
  });

  client.on('guildMemberRemove', async (member) => {
    console.log(member.name, 'saiu do servidor');
  });

  client.on('guildMemberUpdate', async (oldMember, newMember) => {
    console.log(`O membro ${oldMember.displayName} foi atualizado para ${newMember.displayName}`);
  });
};

async function runListeners(client) {
  await messageListener(client);
  await guildListener(client);
  await memberListener(client);
};

module.exports = { runListeners };

*/
