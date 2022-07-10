//饼状图
(function () {
   //1.实例化对象(嵌套饼状图)
var myChart = echarts.init(document.querySelector('.box1'))
//2.指定配置项和数据
option = {
    title: {
        text: '2020年我国陶瓷砖产品出口国家及各季度金额占比',
        textStyle:{
            color:'white'},
         subtext: '数据来源：2020陶业长征',
        sublink: 'https://www.chinaceram.cn/news/202101/25/148177.html'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        bottom: 1,
        textStyle:{
            color:'white'},
      data: [
        '越南',
        '菲律宾',
        '韩国',
        '马来西亚',
        '印度尼西亚',
        '柬埔寨',
        '泰国',
        '澳大利亚',
        '缅甸',
        '日本',
        '伊拉克',
        '沙特阿拉伯',
        '新加坡',
        '以色列',
        '秘鲁',
        '阿联酋',
        '加拿大',
        '南非',
        '俄罗斯联邦',
        '美国'
      ]
    },
    series: [
      {
        name: '出口额（百万美元）',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '25%'],
        label: {
          position: 'inner',
          fontSize: 14
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 708.84, name: '第一季度', selected: true },
          { value: 924.27, name: '第二季度' },
          { value: 1221.90, name: '第三季度' },
          { value: 1256.13, name: '第四季度' }
        ]
      },
      {
        name: '出口额（百万美元）',
        type: 'pie',
        radius: ['40%', '50%'],
        labelLine: {
          length: 20
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 11,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 12,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: [
          { value: 483.42, name: '越南' },
          { value: 349.90, name: '菲律宾' },
          { value: 226.01, name: '韩国' },
          { value: 189.56, name: '马来西亚' },
          { value: 181.75, name: '印度尼西亚' },
          { value: 180.07, name: '柬埔寨' },
          { value: 168.28, name: '泰国' },
          { value: 161.12, name: '澳大利亚' },

          { value: 136.48, name: '缅甸' },
          { value: 94.91, name: '日本' },
          { value: 91.77, name: '伊拉克' },
          { value: 88.34, name: '沙特阿拉伯' },
          { value: 80.19, name: '新加坡' },
          { value: 77.19, name: '以色列' },
          { value: 73.84, name: '秘鲁' },
          { value: 70.44, name: '阿联酋' },

          { value: 69.82, name: '加拿大' },
          { value: 67.51, name: '南非' },
          { value: 43.33, name: '俄罗斯联邦' },
          { value: 36.99, name: '美国' },
        ]
      }
    ]
  };
  //3.把配置项给实例对象
myChart.setOption(option);
//4.让图表自适应
window.addEventListener("resize", function(){
    myChart.resize();
});
})();