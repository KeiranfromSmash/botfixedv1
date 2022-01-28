const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("list of all commands"),
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
            .setColor("#2F3136")
            .setTitle("Coming soon!")
            .setDescription(`This command is coming soon`)
        await interaction.reply({ embeds: [Embed] });
    },
};