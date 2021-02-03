import bots from './bots.json';

export default function getLogsFile(bot: string): string | undefined {
  // @ts-ignore
  return bots[bot];
}
