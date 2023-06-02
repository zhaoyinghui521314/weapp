// custom-tab-bar/index.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'

Component({
  /**
   * 组件的初始数据
   */
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      active: "activeIndex"
    },
    actions: {
      update: "updateActiveIndex"
    }
  },
  data: {
    // active: 0
  },
  properties: {
  
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail });
      this.update(event.detail);
      console.log('zhixing', this.data.active);
      if(event.detail == 1) {
        wx.switchTab({
          url: '/pages/message/message',
        })
      }else {
        console.log('go', event.detail);
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    },
  },
  ready() {
    console.log('ready');
  },
  attached() {
    console.log('attachzhixing');
    // setInterval(() => {
    //   console.log('active', this.data.active);
    // }, [1000])
  }
})
