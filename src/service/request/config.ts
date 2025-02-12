// 配置不同的环境
let BASE_URL = ''
const TIME_OUT = 1000
//根据不同环境配置调用的接口
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:2024/api_v1'
} else if (process.env.NODE_ENV === 'production') {
  //打包之后，是静态环境，所以会替代
  BASE_URL = '/api'
} else {
  BASE_URL = '/test'
}

console.log(BASE_URL)
export { BASE_URL, TIME_OUT }
