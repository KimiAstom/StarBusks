module.exports = {
  pages: {
    index: {
      entry: 'src/views/index/entry.js',
      template: 'src/views/index/index.html',
      filename: 'index.html',
      title: '星巴克 | 用每一杯咖啡传递星巴克独特的咖啡体验'
    },
    menu: {
      entry: 'src/views/menu/entry.js',
      template: 'src/views/menu/index.html',
      filename: 'menu.html',
      title: '星巴克 | 用每一杯咖啡传递星巴克独特的咖啡体验'
    },
    account: {
      entry: 'src/views/account/entry.js',
      template: 'src/views/account/index.html',
      filename: 'account.html',
      title: '星巴克 | 用每一杯咖啡传递星巴克独特的咖啡体验'
    },
    detail: {
      entry: 'src/views/detail/entry.js',
      template: 'src/views/detail/index.html',
      filename: 'detail.html',
      title: '星巴克 | 用每一杯咖啡传递星巴克独特的咖啡体验'
    }
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }
}