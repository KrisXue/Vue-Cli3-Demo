// 基准大小
const baseSize = 36
// 设置 rem 函数
function setRem() {
    // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 1440
    console.log('scale', scale)
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = `${baseSize *
        Math.min(scale, 2)}px`
    console.log('fon-size', document.documentElement.style.fontSize)
}

setRem()

const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
window.addEventListener(resizeEvt, setRem, false)
