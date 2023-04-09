let angle;
let posYeye = $(window).height()/2
let posXeye = $(window).width()/2
let distMax = 20
let distance;
let dist;

$("body").on('mousemove', (E) => {
    angle = -Math.atan2(E.pageY - posYeye , E.pageX - posXeye)
    distance = Math.sqrt((E.pageY - posYeye)*(E.pageY - posYeye) + (E.pageX - posXeye)*(E.pageX - posXeye))
    dist = Math.min(distance, distMax)
    console.log((Math.cos(angle)*dist).toString())
    document.documentElement.style.setProperty('--X', (Math.cos(angle)*dist).toString() + 'px');
    document.documentElement.style.setProperty('--Y', (-Math.sin(angle)*dist).toString() + 'px');
})
