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