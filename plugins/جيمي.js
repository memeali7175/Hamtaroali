import Gemini from "gemini-ai"

let handler = async (m, { conn, args }) => {
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '*معك Gemini الذكاء الاصطناعي من شركة غوغل* يمكنك استخدامي عبر كتابة مثلا هكذا :\n\n*.جيمي* من هو ابن القيم', m);
const gemini = new Gemini("AIzaSyBlmjS5n8VOT10r2vzM8N7JFiZw_Y6eHJw") //GET APIKEY IN HERE https://makersuite.google.com/app/apikey
         const chat = gemini.createChat();
         let a = await chat.ask(text)
    console.log(a);
    conn.reply(m.chat, a, m)
} 
handler.help = ['gemini', 'geminiai'].map((v) => v + ' <pencarian>');
handler.tags = ['tools'];
handler.command = /^جيمي?$/i;
export default handler;
