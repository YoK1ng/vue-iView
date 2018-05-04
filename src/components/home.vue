<style lang="less" scoped="">
	.ivu-carousel-item{
		text-align: center;

		img{
			width: 100%;
		}
	}
</style>
<template>
	<div>
    <Carousel v-model="value1" loop :arrow='arrow' loop autoplay :height="height" radius-dot>
        <CarouselItem v-for="x in list" :key="x.id">
            <div class="demo-carousel"><img :src="x.pic"></div>
        </CarouselItem>
    </Carousel>

    <br>

    <Card :bordered="false">
        <p slot="title">No border title</p>
        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
    </Card>

    <br>

    <Row>
        <Col span="11">
            <Card>
                <p slot="title">Collapse</p>
                <Collapse v-model="value2" accordion>
			        <Panel name="1">
			            	史蒂夫·乔布斯
			            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
			        </Panel>
			        <Panel name="2">
			           	 斯蒂夫·盖瑞·沃兹尼亚克
			            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
			        </Panel>
			        <Panel name="3">
			            	乔纳森·伊夫
			            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
			        </Panel>
			        <Panel name="4">
			            	斯蒂夫·盖瑞·沃兹尼亚克
			            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
			        </Panel>
			    </Collapse>
            </Card>
        </Col>
        <Col span="12" offset="1">
            <Card dis-hover>
                <p slot="title">echarts</p>
                <div id="myChart" :style="{width: '85%', height: '250px'}"></div>
            </Card>
        </Col>
    </Row>

    <br>

    <Card :bordered="false">
        <p slot="title">mavonEditor</p>
		<mavon-editor />
    </Card>

	<br>

	</div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 2,
                value2: '2',
                arrow: 'always',
                height: 300,
                list:[
                	{pic:'http://preview.new.55.la/banner_more_pic/admin_view_pic/21491.gif'},
                	{pic:'http://preview.new.55.la/banner_more_pic/admin_view_pic/21488.gif'},
                	{pic:'http://preview.new.55.la/banner_more_pic/admin_view_pic/21476.gif'},
                	{pic:'http://preview.new.55.la/banner_more_pic/admin_view_pic/21470.gif'},
                ]
            }
        },
	  	mounted(){
	    	this.drawLine();
	  	},
	  	methods: {
	    	drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let myChart = this.$echarts.init(document.getElementById('myChart'))
		        // 绘制图表
		        myChart.setOption({

				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['蒸发量','降水量']
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'蒸发量',
				            type:'bar',
				            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				            markPoint : {
				                data : [
				                    {type : 'max', name: '最大值'},
				                    {type : 'min', name: '最小值'}
				                ]
				            },
				            markLine : {
				                data : [
				                    {type : 'average', name: '平均值'}
				                ]
				            }
				        },
				        {
				            name:'降水量',
				            type:'bar',
				            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
				            markPoint : {
				                data : [
				                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
				                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
				                ]
				            },
				            markLine : {
				                data : [
				                    {type : 'average', name : '平均值'}
				                ]
				            }
				        }
				    ]

		        });
	    	}
	  	}
    }
</script>
