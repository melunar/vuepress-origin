# 按钮
> 按钮
---

#### 属性
---
| 属性名   | 类型        | 默认值 | 描述                                                                     |
| :------- | :---------: | :----: | :----------------------------------------------------------------------- |
| color    | ` String `  | 无     | 语义颜色<br>可扩展 |

#### 示例
---
<template>
  <div class="container">
    <button @click="clickHandle" :disabled="true">禁用</button>
    <demo-base :options="options" @click="clickHandle" />
  </div>
</template>

<script>
export default {
    data(){
        return {    
            options :{
                label : '自定义'
            }
        }
    },
  methods : {
      clickHandle(){
          alert('点')
      }
  }
}
</script>
<style>
.container button{
    margin-right:10px;
}
</style>
``` html
    <button @click="clickHandle">按钮</button>
    <demo-base :options="options" />
```
``` js
export default {
  data(){
    return {    
        options :{
            label : '自定义'
        }
    }
  },
  methods : {
      clickHandle(){
          alert('点')
      }
  }
}
