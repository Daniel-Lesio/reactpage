import { atom } from 'recoil'

const modeState = atom({
    key : 'modeState',
    default  : true
})

const accentColor = atom({
    key : 'accentColor',
    default : "#e6af4b"
})

const menuState = atom({
    key : 'menuState',
    default : false
})

export { menuState , modeState , accentColor }