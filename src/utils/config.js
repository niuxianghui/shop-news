/**
 * Created by niuxianghui on 17/4/23.
 */
const domin2 = "http://localhost:8000"
const domin = "";
module.exports = {
  api : {
    login: domin + "/api/login",
    adminLogin: domin +  "/api/adminLogin",
    merchantLogin: domin + "/api/merchantLogin",
    updateMenu: domin + "/api/getMerchantsByCategory?category=",
    updateMerchant: domin + "/api/getMerchantById?id=",
    updateGood: domin + "/api/getGoodByMerchant?id=",
  }
}
