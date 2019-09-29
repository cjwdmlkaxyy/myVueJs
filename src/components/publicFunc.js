exports.install = function(Vue, options) {
  /*
  * 消息方法
  * @param message
  * @param type 消息提示类型 success/warning/info/error
  * */
  Vue.prototype.tips = function(message, type) {
    this.$message[type](message)
  }

  Vue.prototype.showTime = function(d) {
    let year;
    let month;
    let day;
    let hour;
    let minutes;
    let seconds;
    let nowTime;
    if (d) {
      nowTime = new Date(d);
    } else {
      nowTime = new Date();
    }
    year = nowTime.getFullYear();
    month = nowTime.getMonth() + 1;
    day = nowTime.getDate();
    hour = nowTime.getHours();
    minutes = nowTime.getMinutes();
    seconds = nowTime.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
  }
}
