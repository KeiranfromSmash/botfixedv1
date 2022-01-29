const {
    SlashCommandBuilder
} = require('@discordjs/builders');
const {
    MessageEmbed,
    InteractionCollector,
    MessageActionRow,
    MessageButton
} = require('discord.js');
const fetch = require('node-fetch')
const { joinVoiceChannel, createAudioPlayer, createAudioResource, createReadStream } = require('@discordjs/voice')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('paradise')
        .setDescription('Plays Paradise in your current voice channel!'),
    async execute(interaction) {
        if (!interaction.member.voice.channelId) {
            return interaction.reply({ content: `You are not connected to a voice channel.`, ephemeral: true })
        }
        connection = joinVoiceChannel({
            channelId: interaction.member.voice.channelId,
            guildId: interaction.guildId,
            adapterCreator: interaction.member.voice.channel.guild.voiceAdapterCreator,
        });


        let resource = createAudioResource(('https://stream.itsparadise.net/'), { inlineVolume: true });
        resource.volume.setVolume(1.2);

        const player = createAudioPlayer();

        connection.subscribe(player);
        player.play(resource)


        const getData = await fetch('https://upbeatradio.net/api/v1');
        const data = await getData.json();
        const getData2 = await fetch('https://upbeatradio.net/api/v1');
        const data2 = await getData2.json();

        console.log(data)

        const Embed = new MessageEmbed()
            .setColor('BLACK')
            .setDescription(`Paradise 24/7`)
            .setFooter('itsParadise.net')
            .setTimestamp(Date.now())
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel('🌐 Website')
                .setURL('https://itsParadise.net')
                .setStyle('LINK'),
            );


        const axios = require('axios');
        axios.get('https://server01.itsrefresh.net/api/nowplaying/2')
            .then(response => {
                console.log(response.data);
            });


        await interaction.reply({ content: '**Paradise** is now playing in your voice channel!', embeds: [Embed], components: [row] })
    },
};
