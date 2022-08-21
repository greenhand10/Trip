## 1
这个文件首先是使用vite和pinia的 使用vite创建项目通过npm init vue@latest

首先vite是不会自动生成jsconfig.json的 但是我们想要有好的代码提示就可以把用vue cli生成的jsconfig.json来帮助代码提示

创建完项目以后就开始构建项目的目录结构
assets --- 这个文件夹是用来放一些本地的图片 文件 和css的
mock --- 这个是服务器还没写好 自己设置的假数据
view --- 这个是路由用的页面转换
store --- 这个是pinia或者vuex使用的
hooks --- 一些可以共用的代码片段
components --- 公共的页面组件
utils --- 公共的库
services --- 发送请求需要的文件夹
router --- 路由相关的配置

然后开始处理样式那些 就是normalize.css
通过npm install normalize.css

如果数据是从本地准备动态传进来的时候 照片是img里面的src引进来的 
本地数据的地址是使用@/来写的 引进去以后 vite不会帮我们解析 就会导致不能引进图片 如果是vue cli 那么webpack可以直接使用require来帮我们处理 但是如果是vite的话就要额外进行操作 

jsconfig.js 和 tsconfig.json 是两个唯一可以在json文件里面写注释的json文件

我们在使用vant的时候 如果提供了本地的图就使用自定义导入 如果直接使用vant里面的图形 然后我们在使用以后想要修改图案的样式的时候 比如大小 大小的话vant里面一般使用的是css的变量 我们可以通过直接修改变量来改变样式 修改变量的方式有两种 一种是全局:root{}修改对应的变量 一种是局部修改 在一个选择器下面修改对应的变量 同时还有一种vue提供给我们的方法，首先找到类 对类中的css属性重写 因为父组件一般是不能直接修改子组件的样式的 vue为我们提供了一个api
```css
:deep(.class){
  font-size:50px;
}
```

获取用户定位的方法navigator.geolocation.getCurrentPosition() 但是由于用户原因 超时无法获取用户的位置

如果数据没有双向绑定 可以考虑使用计算属性 计算属性可以让里面的数据都双向绑定
