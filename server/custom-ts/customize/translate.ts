import fetch from '@web-std/fetch'
import { type FastifyBaseLogger } from 'fastify/types/logger'

export async function translate(str: string, logger: FastifyBaseLogger) {
  try {
    const resp = await fetch("https://www2.deepl.com/jsonrpc?method=LMT_handle_jobs", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ja;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "cookie": "dapUid=30d87eb9-d7bc-4a37-85a1-31efc18da077; dl_session=fa.ee3ef862-c610-4c93-a99f-435934073958; userRecommendations=RC-3.2; releaseGroups=340.DF-2477.2.3_399.RC-3.2.8_469.DM-541.2.2_470.DM-542.2.2_471.DM-547.2.2_475.DM-544.2.2_604.DM-595.2.2_605.DM-585.2.3_606.DWFA-165.2.3_612.DM-538.2.2_622.B2B-158.2.1_633.DM-695.2.2_769.B2B-127.2.2_778.DM-705.1.1_863.DM-601.2.2_866.DM-592.2.2_867.DM-684.2.4_972.B2B-138.2.3_975.DM-609.1.2_1084.TG-1207.2.3_1085.TC-432.2.2_1086.TC-104.1.6_1090.DWFA-345.2.2_1092.SEO-44.2.2_1119.B2B-251.2.2_1202.DF-2381.1.2_1205.DAL-176.2.1_1207.DWFA-96.2.2_1219.DAL-136.1.2_1224.DAL-186.2.2_1245.SEO-113.2.2_1330.DF-3073.2.1_220.DF-1925.1.9_1338.AAEXP-724.1.1_1328.DWFA-285.1.1_774.DWFA-212.2.2_1342.AAEXP-728.1.1_1347.AAEXP-733.1.1_1354.AAEXP-740.1.1_1336.AAEXP-722.1.1_1339.AAEXP-725.2.1_1341.AAEXP-727.1.1_1337.AAEXP-723.2.1_1352.AAEXP-738.1.1_1353.AAEXP-739.1.1_1349.AAEXP-735.1.1_1350.AAEXP-736.1.1_1344.AAEXP-730.1.1_1351.AAEXP-737.1.1_1345.AAEXP-731.1.1_1327.DWFA-391.1.1_1343.AAEXP-729.2.1_1348.AAEXP-734.1.1_1340.AAEXP-726.2.1_1346.AAEXP-732.1.1_1335.AAEXP-721.2.1; LMTBID=v2|94536b41-e487-4a2f-9615-29ca9ba751b4|490dd240be839f71bae7772125afb228; userCountry=CN; privacySettings=%7B%22v%22%3A%221%22%2C%22t%22%3A1672790400%2C%22m%22%3A%22LAX%22%2C%22consent%22%3A%5B%22NECESSARY%22%2C%22PERFORMANCE%22%2C%22COMFORT%22%5D%7D; dapVn=2; dapSid=%7B%22sid%22%3A%22939602dd-b714-4278-b4e6-e0153929242c%22%2C%22lastUpdate%22%3A1672799309%7D",
        "Referer": "https://www.deepl.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": `{\"jsonrpc\":\"2.0\",\"method\": \"LMT_handle_jobs\",\"params\":{\"jobs\":[{\"kind\":\"default\",\"sentences\":[{\"text\":\"${str}\",\"id\":0,\"prefix\":\"\"}],\"raw_en_context_before\":[],\"raw_en_context_after\":[],\"preferred_num_beams\":4,\"quality\":\"fast\"}],\"lang\":{\"preference\":{\"weight\":{\"EN\":10},\"default\":\"default\"},\"source_lang_user_selected\":\"ZH\",\"target_lang\":\"EN\"},\"priority\":-1,\"commonJobParams\":{\"regionalVariant\":\"en-US\",\"mode\":\"translate\",\"browserType\":1},\"timestamp\":${+new Date()}},\"id\":${Math.ceil(Math.random() * 99999999)}}`,
      "method": "POST"
    });
    const res = await resp.json()
    if (res.result) {
      return res.result.translations[0].beams[0].sentences[0].text
    }
    return str
  } catch (error) {
    logger.error(error)
    return str
  }
}