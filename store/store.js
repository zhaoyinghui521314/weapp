import { observable, action } from 'mobx-miniprogram'

export const store = observable({
  activeIndex: 0,
  updateActiveIndex: action(function(index) {
    console.log('更改', index);
    this.activeIndex = index;
  })
})