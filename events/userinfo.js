module.exports = {
  name: 'userinfo',
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error('Erro ao executar o comando:', error);
      await interaction.reply({ content: 'Ocorreu um erro ao executar este comando!', ephemeral: true });
    }
  },
}; // criador: @nerydev