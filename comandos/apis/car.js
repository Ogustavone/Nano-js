const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

function requestMeowFact() {
  const response = fetch(`https://meowfacts.herokuapp.com/?lang=por-br`)
    .then((res) => res.json())
    .then((data) => {
      return data.data[0];
    });
  return response;
}

function randomCatGif() {
  const catLinks = [
    "https://media1.tenor.com/m/i2q6JPweyOIAAAAd/kat-mleb.gif",
    "https://media1.tenor.com/m/hLorZ_DKgrcAAAAd/cute-meo-meo.gif",
    "https://media1.tenor.com/m/yd_ehoTvviwAAAAd/cat-swimming.gif",
    "https://media1.tenor.com/m/aVKkl1TnpLIAAAAd/small-cat-angry-cat.gif",
    "https://media1.tenor.com/m/QakaY6NMVaMAAAAC/judgement-cat-cat.gif",
    "https://media1.tenor.com/m/524zMVbZ5MYAAAAC/no-nope.gif",
    "https://media1.tenor.com/m/-legwEzkXG0AAAAC/angry-cat.gif",
    "https://media1.tenor.com/m/wMaRFQSpYvQAAAAd/mr-fresh.gif",
    "https://media1.tenor.com/m/VdIKn05yIh8AAAAd/cat-sleep.gif",
    "https://media1.tenor.com/m/pFz1Q12_hXEAAAAd/cat-holding-head-cat.gif",
    "https://media1.tenor.com/m/EUD6oQFbpVoAAAAd/chipi-chipi-chapa-chapa.gif",
    "https://media1.tenor.com/m/y1QFa-1vyKYAAAAC/plink-wide-cat.gif",
    "https://media1.tenor.com/m/oLOjZgEfS2AAAAAd/cat.gif",
    "https://media1.tenor.com/m/ZLUdKxdP4m8AAAAd/cat-kitty.gif",
    "https://media1.tenor.com/m/4VY0Ykn4lN4AAAAd/cat-broken-cat.gif",
    "https://media1.tenor.com/m/cr3N0amGEk8AAAAd/cat-death.gif",
    "https://media1.tenor.com/m/ZuXnTDxIbjQAAAAC/shocked-shocked-cat.gif",
    "https://media1.tenor.com/m/e_cOg0wWyQUAAAAd/cat-finger.gif",
    "https://media1.tenor.com/m/LyiynwDA18oAAAAC/hai.gif",
    "https://media1.tenor.com/m/o18v7bMKU0MAAAAd/cat-birthday.gif",
    "https://media1.tenor.com/m/MVRRyDMmje8AAAAd/cat-donce.gif",
    "https://media1.tenor.com/m/Y6Et1qZU818AAAAd/cat-cats.gif",
    "https://media1.tenor.com/m/1WjT4OK9KMoAAAAd/mr-fresh-mr-fresh-cat.gif",
    "https://media1.tenor.com/m/jJtL4af7Lx8AAAAC/cat-cats.gif",
    "https://media1.tenor.com/m/UL5nGhaVGDYAAAAd/silly-cat-cat.gif",
    "https://media1.tenor.com/m/PMTUaU3MJY0AAAAd/judging-cat-cat.gif",
    "https://media1.tenor.com/m/fxb7CPbOeqMAAAAd/cat-explosion.gif",
    "https://media1.tenor.com/m/PMTUaU3MJY0AAAAd/judging-cat-cat.gif",
    "https://media1.tenor.com/m/7UzSLCR_x5oAAAAd/cats.gif",
    "https://media1.tenor.com/m/6BAGGnwCn-oAAAAC/luccabug-angry-cat.gif",
    "https://media1.tenor.com/m/DC_qmHgWPS0AAAAd/mr-sibling-mrs-fight.gif",
    "https://media1.tenor.com/m/tyaej0WHQd0AAAAd/cat-sleep.gif",
    "https://media1.tenor.com/m/-taxDgyC6AMAAAAd/holaroberto3.gif",
    "https://media1.tenor.com/m/l32fg5kxM3IAAAAd/cat-jumping.gif",
    "https://media1.tenor.com/m/ElNeJpOxlbwAAAAd/cat-cute.gif",
    "https://media1.tenor.com/m/UFpi4Wt4JRwAAAAd/awoo-cat-baby-cat.gif",
    "https://media1.tenor.com/m/3eGE_XIvCO4AAAAd/mimimimimi-cat-sleeping.gif",
  ];
  return catLinks[Math.floor(Math.random() * catLinks.length)];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("car")
    .setDescription("Envia um gif de gato aleatório."),

  async execute(interaction) {
    const meowFact = await requestMeowFact();
    const catGif = randomCatGif();

    const embed = new EmbedBuilder()
      .setColor(0xff8c00)
      .setImage(catGif)
      .setFooter({ text: meowFact });
    await interaction.reply({ embeds: [embed] });
  },
};
