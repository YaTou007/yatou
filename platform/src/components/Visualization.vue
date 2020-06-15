<template>
<el-container class="visual_con">
  <el-header class="visual_header">
    <div class="visual_title">冀南新区环保在线监测平台</div>
  </el-header>
  <el-row :gutter="5" >
    <el-col :span="5">
      <el-aside class="visual_left">
        <div class="visual_carouselform" >
          <el-carousel class="visual_carousel" height="150px"
          >
            <el-carousel-item v-for="item in items" :key="item">
              <img width="300px" height="150px" :src="item" >
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="visual_videoform" >
          <video class="visual_video_player" controls="controls" src="//img.tukuppt.com/video_show/4015506/00/03/05/5ba50047df772.mp4"></video>
          <video class="visual_video_player" controls="controls" src="//img.tukuppt.com/video_show/4015506/00/03/05/5ba50047df772.mp4"></video>
          <video class="visual_video_player" controls="controls" src="//img.tukuppt.com/video_show/4015506/00/03/05/5ba50047df772.mp4"></video>
          <video class="visual_video_player" controls="controls" src="//img.tukuppt.com/video_show/4015506/00/03/05/5ba50047df772.mp4"></video>
        </div>
        <div class="visual_chartleftform" >
          <el-carousel class="visual_carousel" height="160px" style="padding-left: 5px">
            <el-carousel-item v-for="option in options" :key="option">
              <div :id="option"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-aside>
    </el-col>
    <el-col :span="14">
      <el-main class="visual_main">
        <div class="visual_maptitle" >实时地图</div>
        <div id="visual_map" >12</div>
        <div id="visual_factory" >333</div>
      </el-main>
    </el-col>
    <el-col :span="5" >
      <el-aside class="visual_right">
        <div id="visual_list" >12</div>
        <div id="visual_census" >333</div>
      </el-aside>
    </el-col>
  </el-row>
</el-container>
</template>
<script>
export default{
  name: 'Visualization',
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'margin:0px')
  }, 
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  }, 
  data() {
    return{
      items: [
        "http://pic1.win4000.com/wallpaper/2019-01-27/5c4d79417b518.jpg",
        "http://pic1.win4000.com/wallpaper/2019-01-27/5c4d79424652c.jpg",
        "http://attach.bbs.miui.com/forum/201407/03/151024uqnd242nw4ni04sm.jpg",
      ],
      heightpx2: 200,
      widthpx2: 250,
      options: [
        "visual_chartleft1",
        "visual_chartleft2",
        "visual_chartleft3"
      ]
    }
  },
  mounted() {
    this.drawchartleft1();
    this.drawchartleft2();
    this.drawchartleft3();
  },
  methods: {
    drawchartleft1() {
      var visual_chartleft = this.$echarts.init(document.getElementById('visual_chartleft1'));
      document.getElementById('visual_chartleft1').style.height = this.heightpx2+'px';
      document.getElementById('visual_chartleft1').style.width = this.widthpx2+'px';
      visual_chartleft.resize();
      visual_chartleft.setOption({
        "color": [
            "#59c4e6",
        ],
        title: {
          text: '近一周PM2.5趋势',
          textStyle: {
            fontSize:12,
            color: "white",
            lineHeight: 50
          },
          x:'center',
        y:'top',
          textAlign: "left"
        },
        tooltip: {},
        line: {
            itemStyle: {
              normal: {
                borderWidth: "2"
              }
            },
            lineStyle: {
                normal: {
                  width: "2"
                },
            },
            symbolSize: "6",
            symbol: "emptyCircle",
            smooth: true,
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel:{
            textStyle:{
              fontSize: 8,
              color: "white",
            }
          },
          axisLine: {
            lineStyle: {
              color: "59c4e6"
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            textStyle:{
              fontSize: 10,
              color: "white",
            }
          },
          axisLine: {
            lineStyle: {
              color: "59c4e6"
            }
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      });
    },
    drawchartleft2() {
      var visual_chartleft = this.$echarts.init(document.getElementById('visual_chartleft2'));
      document.getElementById('visual_chartleft2').style.height = this.heightpx2+'px';
      document.getElementById('visual_chartleft2').style.width = this.widthpx2+'px';
      visual_chartleft.resize();
      visual_chartleft.setOption({
        "color": [
            "#59c4e6",
        ],
        title: {
          text: '近一周PM10趋势',
          textStyle: {
            fontSize:12,
            color: "white",
            lineHeight: 50
          },
          x:'center',
        y:'top',
          textAlign: "left"
        },
        tooltip: {},
        line: {
            itemStyle: {
              normal: {
                borderWidth: "2"
              }
            },
            lineStyle: {
                normal: {
                  width: "2"
                },
            },
            symbolSize: "6",
            symbol: "emptyCircle",
            smooth: true,
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel:{
            textStyle:{
              fontSize: 8,
              color: "white",
            }
          },
          axisLine: {
            lineStyle: {
              color: "59c4e6"
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            textStyle:{
              fontSize: 10,
              color: "white",
            }
          },
          axisLine: {
            lineStyle: {
              color: "59c4e6"
            }
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      });
    },
    drawchartleft3() {
      var visual_chartleft = this.$echarts.init(document.getElementById('visual_chartleft3'));
      document.getElementById('visual_chartleft3').style.height = this.heightpx2+'px';
      document.getElementById('visual_chartleft3').style.width = this.widthpx2+'px';
      visual_chartleft.resize();
      visual_chartleft.setOption({
        "color": [
            "#59c4e6",
        ],
        title: {
          text: '近一周TMP趋势',
          textStyle: {
            fontSize:12,
            color: "white",
            lineHeight: 50
          },
          x:'center',
        y:'top',
          textAlign: "left"
        },
        tooltip: {},
        line: {
            itemStyle: {
              normal: {
                borderWidth: "2"
              }
            },
            lineStyle: {
                normal: {
                  width: "2"
                },
            },
            symbolSize: "6",
            symbol: "emptyCircle",
            smooth: true,
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel:{
            textStyle:{
              fontSize: 8,
              color: "white",
            }
          },
          axisLine: {
            lineStyle: {
              color: "59c4e6"
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            textStyle:{
              fontSize: 10,
              color: "white",
            }
          },
          axisLine: {
            lineStyle: {
              color: "59c4e6"
            }
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      });
    }
  }
}
</script>

<style scoped>
.visual_con{
  width: 1280px;
  height: 577px;
  background-image: url("../assets/images/科技.jpg");
  background-repeat: no-repeat;
  padding: 5px 10px;
}
.visual_title{
  text-align: center;
  margin-top: 16px;
  font-size: 28px;
  color: rgb(230, 230, 230);
  letter-spacing: 8px;
}
.visual_left{
  overflow: visible;
  width: 100% !important;
}
.visual_carousel{
  width:100%;
  border-radius: 11px;
  border: 2px solid #016ae0;
}
.visual_videoform{
  width: 99%;
  border-radius: 11px;
  border: 2px solid #016ae0;
}
.visual_video_player{
  display: inline;
  margin: 3px;
  width: 46%;
  height: 80px;
}
.visual_main{
  padding: 5px;
  border-radius: 11px;
  border: 2px solid #016ae0;
}
.visual_maptitle{
  color: white;
  text-align: center;
}
#visual_map{

}
#visual_factory{
}
.visual_right{
  width: 100% !important;
}
#visual_list{
  border-radius: 11px;
  border: 2px solid #016ae0;
}
#visual_census{
  border-radius: 11px;
  border: 2px solid #016ae0;
}
</style>