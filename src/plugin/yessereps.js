import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "repo") {
    const start = new Date().getTime();
    await m.React('🇹🇿');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `┏━𒊹︎︎︎
┃➪MAGIC BOT BY MUNGAI
┃⚠︎ MODE...ONLINE 24/7
┗━━𒊹︎︎︎━━━𒊹︎︎︎
┏━𒊹︎︎︎𝕣𝕖𝕡𝕠;
┃https://github.com/254100934193/magic
┗━━━━𒊹︎︎︎━━━━━𒊹︎︎︎
┏━━━━━𒊹︎︎︎
┃𝕠𝕨𝕟𝕖𝕣 𝕚𝕟𝕗𝕠; https://wa.me/254743436105
┗━━━━━━━━━𒊹︎︎︎━━━━━━━𒊹︎︎︎`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
