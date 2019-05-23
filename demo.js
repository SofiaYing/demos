//判断视窗
// function isInViewPortOfTwo(el) {
//     const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
//     const top = el.getBoundingClientRect() && el.getBoundingClientRect().top
//     return top <= viewPortHeight + 100
// }

var bfscrolltop = document.getElementsByTagName('ul')[0].scrollTop;
$("input").focus(function() {
    document.body.scrollTop = document.body.scrollHeight;
    //console.log(document.body.scrollTop);
}).blur(function() {
    document.body.scrollTop = bfscrolltop;
    //console.log(document.body.scrollTop);
});
// if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || navigator.userAgent.indexOf('micromessenger') > -1){
//     self.textInput.addEventListener('blur',function(){
//         window.scrollTo(0,0);
//         console.log('lose point')
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