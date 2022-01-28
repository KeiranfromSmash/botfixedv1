const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("credits")
        .setDescription("Credits"),
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
            .setColor("#2F3136")
            .setTitle("Owners and Devs!")
            .setDescription(`By Dillix#2007 - Revamp by Keiran#0069`)
        await interaction.reply({ embeds: [Embed] });
    },
};