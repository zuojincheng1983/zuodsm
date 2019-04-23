

#音乐播放器案例

---



## 案例演示

直接运行./player/index.html即可

由于chrome默认禁用了autoplay，双击播放列表开始播放音乐。

支持歌曲、封面动态切换，支持删除歌曲。





## 项目应用技术

一、html5+less编写页面结构

![html5](/Users/zuojincheng/Downloads/html5.png)

![less](/Users/zuojincheng/Downloads/less.png)

二、jQuery及相关插件

![jQuery](/Users/zuojincheng/Downloads/jQuery.png)

---

## 案例目录结构

>
>
>player
>
>​	|—css	//样式库
>
>​	|————audioplayer.css	//audioplayer插件css库
>
>​	|————colorizer.css	//colorizer插件css库
>
>​	|————player.css	//自定义player播放列表css
>
>​	|————player.less	//自定义css源文件
>
>​	|—img		//测试数据，专辑封面
>
>​	|—js
>
>​	|————playlist.js	//手写jQuery功能
>
>​	|—lib
>
>​	|————audioplayer.js	//播放器JS插件
>
>​	|————colorizer.js	//黑胶唱片效果JS插件
>
>​	|————jquery-1.12.4.min.js	//jQuery库
>
>​	|—mp3	//测试数据，MP3，已剪辑，只保留20s的Demo。
>
>​	|— index.html	//项目入口文件
>
>



## 项目中遇到的问题

播放列表的html

```html
<li>
	<a href="javascript:">
		<img src="./img/0.jpg" alt="">
		4 Non Blondes - What's Up？
		<span class="del">×</span>
	</a>
</li>
```

给.del类注册点击事件，删除所在li。



###发现问题

点击span的时候由于事件冒泡，所在的父元素li点击事件也被触发，导致音乐播放逻辑混乱。



###解决方案

```javascript
// 新版chrome禁止了自动播放
$('.playlist li').click(function () {
    var cover = './img/' + $(this).index() + '.jpg';
    var music = './mp3/' + $(this).index() + '.mp3';
    $('.audio .cover').attr('src', cover);
    $('#mypalyer').attr('src', music);
});


// 注册播放列表中删除按钮的事件
$('.del').click(function () {
    $(this).parent().parent().css('display', 'none');
    var cover = './img/no.jpg';
    var music = '';
    $('.audio .cover').attr('src', cover);
    $('#mypalyer').attr('src', music);

    // 阻止冒泡
    if (window.event) {
        event.cancelBubble = true;	
    } else {
        event.stopPropagation();
    }
});
```

点击span的时候由于事件冒泡，所在的父元素li点击事件也被触发，导致音乐播放逻辑混乱。

在这里使用了阻止冒泡stopPropagation/cancelBubble来阻止冒泡。



### GitHub仓库

https://github.com/zuojincheng1983/zuodsm.git



