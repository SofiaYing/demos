$(function() {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        // alert("安卓机！")
    }
    if (isIOS) {
        // alert("苹果果机！")
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('blur', function(e) {

                window.setTimeout(function() {
                    // e.target.scrollIntoViewIfNeeded();
                    e.target.scrollIntoView(false)
                }, 0);
            })
        }
    }
});


// if (/Android/gi.test(navigator.userAgent)) {
//     window.addEventListener('resize', function() {
//         if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
//             window.setTimeout(function() {
//                 document.activeElement.scrollIntoViewIfNeeded();
//             }, 0);
//         }
//     })
// }

//监听视窗
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
        if (item.isIntersecting) {
            //进入可视区
            var dom = item.target
                // var animationEntry = item.target.getAttribute('data-animation')
            var animationEntry = $(dom).attr('data-animation')
            $(dom).find('.element_content_box').animateCss(animationEntry)
        }
    })
});

//监听每一个有动画的li是否进入视窗
var node = $('.animation')

for (var item of node) {
    intersectionObserver.observe(item)
}