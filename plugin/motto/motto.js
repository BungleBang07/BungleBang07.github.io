/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();

mingyan.push("{'index':1,'content':'该条无效}");
mingyan.push("{'index':2,'content':'每次吃胖烧，我问：你吃啥<br>他：两个辣童哥<br>我一抬头，胖子烧饼的标价牌上写着：辣胖子四块<br>我：......'}");
mingyan.push("{'index':3,'content':'在夏星点单。<br>袁同学：吃烤童哥拌面吗<br>我：嗯？？？<br>袁同学：烤猪排拌面<br>我：......'}");
mingyan.push("{'index':4,'content':'他亲了我的脸一口<br>我：今晚不洗脸，明天就能尝到小龙虾的味道<br>他：你亲我一口吧<br>我：噢<br>他：那我今晚也不洗脸，明天也有小龙虾的味道啦'}");
mingyan.push("{'index':5,'content':'走到分叉路口<br>袁同学：我要把你拐回丹四了！<br>我：那你的室友......<br>他：......先把我室友赶出去......'}");
mingyan.push("{'index':6,'content':'袁同学：你是一只猩猩<br>我：？？？你再说一遍？<br>袁同学：是天上的那个星星<br>我：噢<br>袁同学：一颗胖星星——学名，胖大星<br>我：......'}");
mingyan.push("{'index':7,'content':'袁同学说，我亲两口<br>于是他低下头，左边嘴角一口，右边嘴角一口'}");
mingyan.push("{'index':8,'content':'亲完以后<br>袁同学：我回味一下<br>我：......<br>袁同学：（过了几秒）好甜啊'}");
mingyan.push("{'index':9,'content':'袁同学：有一个人抱着真的太好了<br>（我也觉得）'}");
mingyan.push("{'index':10,'content':'和袁同学面对面吃饭<br>两个人说：我开动了！<br>然后下一秒筷子同时伸向对方碗里'}");

/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

function getMingYanContent(){
  var item = getItem();
  return item['content'];
}