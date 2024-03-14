import React, { memo } from 'react'

// 适用于要在全局添加自定义逻辑的场景（比如监控运行时错误并上报）

const global = memo(() => {
  return (
    <div></div>
  )
})

export default global