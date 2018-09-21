module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: '/demo/' },
      { text: 'Guide', items: [
        { text: 'Button', link: '/guide/button' },
        { text: 'Chinese', link: '/guide/chinese' },
        { text: 'Japanese', link: '/guide/japanese' }
      ] },
      { text: 'Baidu', link: 'https://baidu.com' },
    ]
  },
  port: 8088,




  // deploy
  base: '/press/'
}