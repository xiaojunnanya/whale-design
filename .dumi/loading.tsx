import React, { memo } from 'react'

// 约定 .dumi/loading.(js|jsx|ts|tsx) 为全局 loading 组件；dumi 2 默认按路由对产物拆包，
// 切换页面时需要等待异步 chunk 加载完成后才能呈现，可通过该组件来为用户展示自定义加载动画。

const loading = memo(() => {
  return (
    <div></div>
  )
})

export default loading