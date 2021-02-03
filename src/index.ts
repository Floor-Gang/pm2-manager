import { CommandoClient } from 'discord.js-commando';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const client = new CommandoClient({
  commandPrefix: '.pm2',
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.registry
  .registerGroups([
    ['pm2'],
  ])
  .registerDefaults()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(process.env.DISCORD_TOKEN);
