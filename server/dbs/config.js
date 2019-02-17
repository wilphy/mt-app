export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis:{
    get host(){
      return '127.0.0.1'
    },
    get post(){
      return 6379
    }
  },
  smtp: {
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '149201216@qq.com'
    },
    get pass(){
      return 'asd'
    }
  },
  get code(){
    
  }
}