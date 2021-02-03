import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';
// eslint-disable-next-line import/no-unresolved
import getLogsFile from '../../utils';

export = class Logs extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      description: 'Get bot pm2 logs',
      group: 'pm2',
      memberName: 'logs',
      name: 'logs',
      args: [
        {
          key: 'bot',
          prompt: 'The bot tag to get logs for',
          type: 'string',
        },
      ],

    });
  }

  public async run(msg: CommandoMessage, { bot }: {bot: string}): Promise<null> {
    const botId = bot.replace(/[<>@!]/g, '');
    const logs = getLogsFile(botId);

    await msg.reply(`Getting data for bot ${bot} (${botId})`);

    if (logs === undefined) {
      await msg.channel.send('Unable to locate that bot');
      return null;
    }

    await msg.channel.send({ files: [`${process.env.HOME}/.pm2/logs/${logs}-out.log`] });
    return null;
  }
}
