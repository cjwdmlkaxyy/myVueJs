exports.install = function(Vue, options) {
  /*
  * 消息方法
  * @param message
  * @param type 消息提示类型 success/warning/info/error
  * */
  Vue.prototype.tips = function(message, type = 'info') {
    this.$message({
      message: message,
      type: type
    })
  }
}
