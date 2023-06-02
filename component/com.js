// component/com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dat: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    a: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      console.log('handleClick');
      this.triggerEvent("syn", 
      // 1.父给子属性值，子直接取到使用
      // 2.父给子传递属性函数，子调用父亲的方法，并传递数据 =》 json和方法
      {value: 1, 
        func: () => console.log("nice")
      });
    }, 
    
  }
})
