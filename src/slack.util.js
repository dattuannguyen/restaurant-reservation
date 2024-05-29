// const { WebClient } = require('@slack/web-api');
// const slackToken = "xoxp-7198423755889-7182851560453-7185791767010-1cbb1337955e0375608772d2c9734e9f"
// const channelId = "C075FNEDJD8"
// const options = {};
// const web = new WebClient(slackToken, options);
//
// const sendSlackMessage = async (message, channel = null) => {
//     return new Promise(async (resolve, reject) => {
//         const channelId = channel || channelId;
//         try {
//             const resp = await web.chat.postMessage({
//                 blocks: message,
//                 channel: channelId,
//             });
//             return resolve(true);
//         } catch (error) {
//             return resolve(true);
//         }
//     });
// };
//
// export default sendSlackMessage()