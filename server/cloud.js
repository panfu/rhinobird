AV = require('leanengine')
AV.Cloud.useMasterKey()

// 防止环境切换笔误
const l = (o) => {
  console.log(o);
};

AV.Cloud.define("test", (request, response) => {
  console.log('just test');
  return response.success("it's ok");
});

