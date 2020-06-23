window.addEventListener('load', function () {
    // 1.获取元素

    var focus = document.querySelector('.foucs');
    var ul = focus.children[0];

    //获得focus宽度
    var w = focus.offsetWidth;

    var ol = focus.children[1];
    var index = 0;

    var timer = setInterval(function () {



        index++;
        var translatex = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);


    //等过度完成 之后  再判断  监听过度完成  transitionend 事件
    ul.addEventListener('transitionend', function () {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';

        } else if (index < 0) {
            index = 2;
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }


        //小圆点跟随变化
        // 把ol中带有current类名去掉
        ol.querySelector('.current').classList.remove('current');
        //让当前索引号 的 li  加上current   
        ol.children[index].classList.add('current');

    });





    //手指滑动
    //触摸元素  touchstart


    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function (e) {

        startX = e.targetTouches[0].pageX;
        clearInterval(timer);

    });

    ul.addEventListener('touchmove', function (e) {
        //计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        //移动盒子   盒子原来的位置 + 手指移动的距离
        var translatex = -index * w + moveX;
        //手指拖动不需要动画效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;        //用户手指移动过  再判断
        e.preventDefault();//阻止滚动屏幕的行为
    });



    //手指离开  根据距离   判断播放那一张

    ul.addEventListener('touchend', function () {
        //如果移动距离大于50px   我们就播放上一张或者下一张

        if(flag){
            if (Math.abs(moveX) > 50) {
                //如果右滑   播放上一张   moveX 为 正
                //如果左滑   播放下一张   moveX 为 负
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all 0.3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else{
                //如果小于50px   回弹
                var translatex = -index * w;
                ul.style.transition = 'all 0.1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }

        //离开前  停止计时器
        clearInterval(timer);

        timer = setInterval(function () {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
    



    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');

    window.addEventListener('scroll',function () { 
        if(window.pageYOffset >= nav.offsetTop){
            goBack.style.display = 'block';
        }else{
            goBack.style.display = 'none';
        }
     })
     goBack.addEventListener('click',function () { 
        window.scroll(0,0)


      })






})