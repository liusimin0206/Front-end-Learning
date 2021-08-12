<template>
  <div class='upload-info'>
    <div v-if="dataType === 1 || (dataType === 2 && status === 1 && markerGenre === 7) ">
      <div class="download" @click="download">样例下载</div>
      <div class="intro">上传说明</div>
      <div class="tit">{{ dataInfo[current].tit }}</div>
      <div class='info-wraper'  v-for='(item, idx) in dataInfo[current].info' :key='idx'>
        <div class="info-list">
          <div class="info-item" v-for='(value, idx) in item.infoList' :key='idx'>{{ value }}</div>
        </div>
        <div class="info-list-tips" v-if="dataType === 1">
          <div class="info-item" v-for='(value, idx) in tips' :key='idx'>{{ value }}</div>
        </div>
        <div class="info-img" >
          <img  :src="item.pic" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="download" @click="download">样例下载</div>
      <div class="intro">上传说明</div>
      <div class="tit" style="margin-bottom:20px;">{{ txtDataInfo[txtCurrent].title }}</div>
      <Collapse simple>
        <Panel v-for="(panel, index) in txtDataInfo[txtCurrent].content" :key="index">
            {{ panel.panelName }}
            <div slot="content">
              <p class="info-item" v-for="(item,idx) in panel.infoList" :key="idx">{{ item }}</p>
              <div v-if="panel.column && panel.column.length" style="margin:15px 0;">
                <Table :columns="panel.column" :data="panel.data" width="400" border></Table>
              </div>
              <div class="csv-example" v-if="panel.csvExample">
                <template v-if="!panel.csvExample.content">
                  <div><span>文本内容1</span><span class="right" v-if="status === 1">类别1</span></div>
                  <div><span>文本内容2</span><span class="right" v-if="status === 1">类别2</span></div>
                  <div><span>文本内容3</span><span class="right" v-if="status === 1">类别3</span></div>
                  <div>.....</div>
                </template>
                <template v-else>
                  <div v-for="(item,idx) in panel.csvExample.content" :key='idx'>
                    <span style="white-space: pre;">{{item}}</span>
                  </div>
                  <div>.....</div>
                </template>
              </div>
              <div v-if="panel.pic">
                <img :src="panel.pic" alt="">
              </div>
              <div v-if="panel.attention">
                {{ panel.attention }}
              </div>
            </div>
        </Panel>
    </Collapse>
    </div>
  </div>
</template>
<script>
const dataInfo = {
  0: {
    tit: '未标注',
    info: [
      {
        infoList: [
          '1.上传数据集文件要求以zip格式的压缩包上传，大小需要在20GB内。',
          '2.压缩包内图片格式可以是jpg、png、bmp、jpeg，其他文件格式解析时会自动过滤。',
          '3.压缩包中的文件名可以包含中文、数字、字母、下划线。'
        ],
        pic: require('@/assets/img/intro-unmark.png')
      }
    ]
  },
  2: {
    tit: '已标注·分类',
    info: [
      {
        infoList: [
          '1.上传数据集文件要求以zip格式的压缩包上传，大小需要在20GB内。',
          '2.压缩包内图片格式可以是jpg、png、bmp、jpeg，其他文件格式解析时会自动过滤；默认最后一层文件夹名为类别。',
          '3.压缩包中的文件名可以包含中文、数字、字母、下划线。'
        ],
        pic: require('@/assets/img/intro-classifii.png')
      }
    ]
  },
  1: {
    tit: '已标注·检测',
    info: [
      {
        infoList: [
          '1.上传数据集文件要求以zip格式的压缩包上传，大小需要在20GB内。',
          '2.压缩包内图片格式可以是jpg、png、bmp、jpeg，标注文件可以是txt/xml，其他文件格式解析时会自动过滤。',
          '3.压缩包内图片名和包含其标注信息的标注文件名一一对应，且需在同一文件层级内。',
          '4.压缩包中的文件名可以包含中文、数字、字母、下划线。',
          '5.无同名的标注文件或标注文件解析失败将自动当成未标注文件。'
        ],
        pic: require('@/assets/img/intro-detection.png')
      }
    ]
  },
  3: {
    tit: '已标注·分割',
    info: [
      {
        infoList: [
          '1.上传数据集文件要求以zip格式的压缩包上传，大小需要在20GB内。',
          '2.压缩包内图片格式可以是jpg、png、bmp、jpeg，标注文件可以是json，其他文件格式解析时会自动过滤。',
          '3.压缩包内图片名和包含其标注信息的标注文件名一一对应，且需在同一文件层级内。',
          '4.压缩包中的文件名可以包含中文、数字、字母、下划线。',
          '5.无同名的标注文件或标注文件解析失败将自动当成未标注文件。'
        ],
        pic: require('@/assets/img/intro-segmen.png')
      }
    ]
  },
  4: {
    tit: '已标注·点',
    info: [
      {
        infoList: [
          '1.上传数据集文件要求以zip格式的压缩包上传，大小需要在20GB内。',
          '2.压缩包内图片格式可以是jpg、png、bmp、jpeg，标注文件可以是txt/json，其他文件格式解析时会自动过滤。',
          '3.压缩包内图片名和包含其标注信息的标注文件名一一对应，且需在同一文件层级内。',
          '4.压缩包中的文件名可以包含中文、数字、字母、下划线。',
          '5.无同名的标注文件或标注文件解析失败将自动当成未标注文件。'
        ],
        pic: require('@/assets/img/intro-cir-line.png')
      }
    ]

  },
  5: {
    tit: '已标注·线',
    info: [
      {
        infoList: [
          '1.上传数据集文件要求以zip格式的压缩包上传，大小需要在20GB内。',
          '2.压缩包内图片格式可以是jpg、png、bmp、jpeg，标注文件可以是txt/json，其他文件格式解析时会自动过滤。',
          '3.压缩包内图片名和包含其标注信息的标注文件名一一对应，且需在同一文件层级内。',
          '4.压缩包中的文件名可以包含中文、数字、字母、下划线。',
          '5.无同名的标注文件或标注文件解析失败将自动当成未标注文件。'
        ],
        pic: require('@/assets/img/intro-cir-line.png')
      }
    ]
  },
  6: {
    tit: '已标注·OCR',
    info: [
      {
        infoList: [
          '1.上传数据集文件要求以zip格式的压缩包上传，大小需要在20GB内。',
          '2.压缩包内图片格式可以是jpg、png、bmp、jpeg，标注文件可以是txt/xml/json，其他文件格式解析时会自动过滤。',
          '3.压缩包内图片名和包含其标注信息的标注文件名一一对应，且需在同一文件层级内。',
          '4.压缩包中的文件名可以包含中文、数字、字母、下划线。',
          '5.无同名的标注文件或标注文件解析失败将自动当成未标注文件。'
        ],
        pic: require('@/assets/img/intro-ocr.png')
      }
    ]
  },
  71: {
    tit: '已标注 - 序列标注',
    info: [
      {
        infoList: [
          '支持上传压缩包',
          '1.上传的压缩包大小需要在5GB以内，仅支持zip格式。',
          '2.压缩包内每一条标注文本有2个同名文件，一个txt格式，一个ann格式。在每一个ann文件里，一个实体就是一行，每行按照[序号 \\t 标签\\t 起始位置索引\\t 结束位置索引\\t 文本] 进行输出，行与行之间用\\n分隔。',
          '3.文本编码方式为UTF-8。',
          '压缩包的目录结构示例如下：'
        ],
        pic: require('@/assets/img/sequencehasflag.png')
      }
    ]
  }

}
const map = {
  0: 'unMarker',
  1: 'detect',
  2: 'classify',
  3: 'split',
  4: 'point',
  5: 'line',
  6: 'ocr',
  41: 'cubePoint'
}
const txtDataInfo = {
  // 文本分类已标注
  81: {
    title: '已标注-文本分类(单标签)',
    content: [
      {
        panelName: '1.若上传Excel文件',
        infoList: [
          '1).使用第一列作为待标注文本，第二列作为标注信息列，每行是一个样本,首行为表头默认将被忽略。 ',
          '数据格式如下(举例说明)：'
        ],
        column: [
          {
            title: '文本',
            key: 'txt',
            align: 'center'
          },
          {
            title: '标签',
            key: 'label',
            align: 'center'
          }
        ],
        data: [
          {
            txt: '文本内容1',
            label: '类别1'
          },
          {
            txt: '文本内容2',
            label: '类别3'
          },
          {
            txt: '文本内容n',
            label: '类别n'
          }
        ]
      },
      {
        panelName: '2.若上传Txt/Csv格式文件',
        csvExample: true,
        infoList: [
          '1).文本分类的标注数据格式要求为“文本内容\\t类别\\n”（即每行一个未标注文本与一个标注标签，中间使用tab键间隔，每组数据使用回车换行），每行表示一个样本。 ',
          '2).文件大小在1G以内，分类名由数字、中英文、中/下划线组成，长度上限256个字符，编码方式为UTF-8。',
          '数据格式如下(举例说明)：'
        ]
      },
      {
        panelName: '3.若上传压缩包格式文件',
        infoList: [
          '若以压缩包的形式上传，压缩包内的一个文件将作为一个样本上传',
          '1).压缩包大小需要在5GB以内，压缩包仅支持zip格式',
          '2).压缩包内文件类型支持文本文件(txt)及同名的json格式标注文件，编码方式为UTF-8。',
          '压缩包目录结构如下：'
        ],
        pic: require('@/assets/img/txtClassifyHasFlag.png')
      }
    ]
  },
  // 文本分类未标注
  80: {
    title: '未标注-文本分类(单标签)',
    content: [
      {
        panelName: '1.若上传Excel文件',
        infoList: [
          '1).使用第一列作为待标注文本，每行是一个样本,首行为表头默认将被忽略。 ',
          '2).文件大小在1G以内，编码方式为UTF-8。',
          '数据格式如下(举例说明)：'
        ],
        column: [
          {
            title: '文本',
            key: 'txt',
            align: 'center'
          }
        ],
        data: [
          {
            txt: '文本内容1'
          },
          {
            txt: '文本内容2'
          },
          {
            txt: '文本内容n'
          }
        ]
      },
      {
        panelName: '2.若上传Txt/Csv格式文件',
        csvExample: true,
        infoList: [
          '1).文本分类的标注数据格式要求为“文本内容\\t类别\\n”（即每行一个未标注文本与一个标注标签，中间使用tab键间隔，每组数据使用回车换行），每行表示一个样本。 ',
          '2).文件大小在1G以内，编码方式为UTF-8。',
          '数据格式如下(举例说明)：'
        ]
      },
      {
        panelName: '3.若上传压缩包格式文件',
        infoList: [
          '若以压缩包的形式上传，压缩包内的一个文件将作为一个样本上传',
          '1).压缩包大小需要在1GB以内，压缩包仅支持zip格式',
          '2).压缩包内文件类型支持txt格式，编码方式为UTF-8。',
          '压缩包目录结构如下：'
        ],
        pic: require('@/assets/img/txtClassifyNoflag.png')
      }
    ]
  },
  // 序列标注未标注
  70: {
    title: '未标注 - 序列标注',
    content: [
      {
        panelName: '1.若上传Txt/Csv格式文件',
        csvExample: true,
        infoList: [
          '1). 一个txt/csv文件里有多条待标注文本，一行代表一条标注文本，以换行符(\\n)为分隔符区分每条文本。 ',
          '2). 行与行之间不允许出现空行，出现空行则上传失败。',
          '3). 默认没有表头，首行被视为一条标注文本。',
          '3). 文件大小在1G以内，文本编码方式为UTF-8。',
          '数据格式如下(举例说明)：'
        ]
      },
      {
        panelName: '2.若上传压缩包格式文件',
        infoList: [
          '1).压缩包内的一个文件就是一条标注文本。',
          '2).压缩包大小需要在5GB以内，压缩包仅支持zip格式',
          '压缩包目录结构如下：'
        ],
        pic: require('@/assets/img/txtClassifyNoflag.png'),
        attention: '注：含有多条标注文本的文件不能与仅有单条标注文本的文件压缩在一起，需要分开上传，否则多条标注文本会被视为一条标注文本。'
      }
    ]
  },
  90: {
    title: '未标注 - 文本匹配',
    content: [
      {
        panelName: '1.若上传Excel文件',
        infoList: [
          '1.首行为表头，将不录入数据集中，第一列和第二列分别作为需要计算相似度的两个文本',
          '2.每行是一组样本，每组样本的字符数不超1024个，超出将被截断',
          '3.文件大小在1G以内，编码方式为UTF-8',
          '数据格式如下:'
        ],
        column: [
          {
            title: '文本1',
            key: 'txt1',
            align: 'center'
          }, {
            title: '文本2',
            key: 'txt2',
            align: 'center'
          }
        ],
        data: [
          {
            txt1: '文本内容a1',
            txt2: '文本内容b1'
          },
          {
            txt1: '文本内容a2',
            txt2: '文本内容b2'
          },
          {
            txt1: '文本内容a3',
            txt2: '文本内容b3'
          }
        ]
      },
      {
        panelName: '2.若上传Txt/Csv格式文件',
        csvExample: {
          content: ['山东技校哪家强?     山东哪家技校不错?',
            '北京教育机构多     北京教育资源丰富',
            '南京美食很好吃     南京的旅游景点很多']
        },
        infoList: [
          '1.数据格式要求为“文本内容1\\t文本内容2”,一行表示一组样本，每组样本的字符数不超过1024个，超出将被截断',
          '2.文件大小在1G以内，编码方式为UTF-8'
        ]
      },
      {
        panelName: '3.若上传压缩包格式文件',
        infoList: [
          '1.压缩包格式为zip格式，压缩包文件限制5G以内，压缩包内文件类型为txt，编码仅支持UTF-8',
          '2.Txt文件每行数据格式为“文本内容1\\t文本内容2”，一行表示一组样本，每个文本可以有多行样本，每组样本的字符数不超过1024个',
          '压缩包目录结构如下:'
        ],
        pic: require('@/assets/img/txtMatchNoFlag.png')
      }
    ]
  },
  91: {
    title: '已标注 - 文本匹配',
    content: [
      {
        panelName: '1.若上传Excel文件',
        infoList: [
          '1.首行为表头，将不录入数据集中，第一列和第二列分别作为需要计算相似度的两个文本，第三列为相似度标签(请使用1代表相似,0代表不相似)',
          '2.每行是一组样本，每组样本的字符数不超1024个，超出将被截断',
          '3.文件大小在1G以内，编码方式为UTF-8',
          '数据格式如下:'
        ],
        column: [
          {
            title: '文本1',
            key: 'txt1',
            align: 'center'
          }, {
            title: '文本2',
            key: 'txt2',
            align: 'center'
          }, {
            title: '相似度标签',
            key: 'similarityLabel',
            align: 'center'
          }
        ],
        data: [
          {
            txt1: '文本内容a1',
            txt2: '文本内容b1',
            similarityLabel: '1'
          },
          {
            txt1: '文本内容a2',
            txt2: '文本内容b2',
            similarityLabel: '1'
          },
          {
            txt1: '文本内容a3',
            txt2: '文本内容b3',
            similarityLabel: '0'
          }
        ]
      },
      {
        panelName: '2.若上传Txt/Csv格式文件',
        csvExample: {
          content: ['山东技校哪家强?     山东哪家技校不错?     1',
            '北京教育机构多     北京教育资源丰富     1',
            '南京美食很好吃     南京的旅游景点很多     0']
        },
        infoList: [
          '1.数据格式要求为“文本内容1\\t文本内容2\\t标注结果”,标注结果请使用1代表相似，0代表不相似，一行表示一组样本，每组样本的字符数不超过1024个，超出将被截断',
          '2.文件大小在1G以内，编码方式为UTF-8'
        ]
      },
      {
        panelName: '3.若上传压缩包格式文件',
        infoList: [
          '1.压缩包格式为zip格式，压缩包文件限制5G以内，压缩包内文件类型为txt，编码仅支持UTF-8',
          '2.Txt文件每行数据格式为“文本内容1\\t文本内容2\\t标注结果”，标注结果仅用1/0表示，1代表相似，0代表不相似。一行表示一组样本，每个文本可以有多行样本，每组样本的字符数不超过1024个',
          '压缩包目录结构如下:'
        ],
        pic: require('@/assets/img/txtMatchHasFlag.png')
      }
    ]
  }
}
export default {
  name: 'upload-info',
  props: {
    currentInfo: {
      type: Number,
      default: 2
    },
    dataType: {
      type: Number,
      default: 1
    },
    markerGenre: {
      type: Number,
      default: 1
    },
    status: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      dataInfo,
      txtDataInfo,
      exampleList: {},
      tips: [
        '压缩包的目录结构示例如下：',
        '注：',
        '① 同一目录下可以有多个文件夹',
        '② 文件夹下面可嵌套文件夹'
      ]
    }
  },
  computed: {
    current () {
      if (this.currentInfo && this.currentInfo === 41) {
        return 4
      }
      return this.currentInfo
    },
    txtCurrent () {
      let init = 81
      if (this.dataType === 2 && this.status === 0 && this.markerGenre === 8) {
        init = 80
      } else if (this.dataType === 2 && this.status === 0 && this.markerGenre === 7) {
        init = 70
      } else if (this.dataType === 2 && this.status === 0 && this.markerGenre === 9) {
        init = 90
      } else if (this.dataType === 2 && this.status === 1 && this.markerGenre === 9) {
        init = 91
      }
      return init
    }
  },
  methods: {
    download () {
      if (map[this.currentInfo] in this.exampleList) {
        window.open(this.exampleList[map[this.currentInfo]])
      } else {
        this.$api.dataManager.exampleDownload().then(res => {
          if (res.code === 200) {
            this.exampleList = res.data
            this.exampleList[map[this.currentInfo]] && window.open(this.exampleList[map[this.currentInfo]])
          } else {
            this.exampleList = {}
            this.$Message.error(res.msg)
          }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.upload-info{
  font-size: 14px;
  color: #666666;
  line-height: 30px;
  letter-spacing: 0px;
  padding-left: 50px;
  border-left: 1px solid rgba(166,165,165, 0.22);
  width: 40%;
  .download{
    color: #23a3ff;
    text-align: right;
    cursor: pointer;
  }
  .intro{
    color: #999999;
    margin-bottom: 10px;
  }
  .iconwenhao_huabanfuben{
    color: #999999;
    margin-left: 10px;
  }
  .tit{
    color: #e03434;
  }
  .info-list{
    margin-bottom: 20px;
  }

  .info-img{
    margin-top: 30px;
    text-align: center;
  }
  /deep/.ivu-collapse-header{
    position: relative;
    .ivu-icon{
      font-size: 18px;
      position: absolute;
      top: 30%;
      right: 0;
    }
  }
  /deep/.ivu-collapse-content-box{
    margin-left: 20px;
  }
  .csv-example{
    width: 350px;
    background-color: #fff;
    border: 1px solid #F2F2F2;
    padding: 10px 20px;
    color: #999999;
    font-size: 12px;
    .right{
      margin-left: 200px;
    }
  }
}
</style>
