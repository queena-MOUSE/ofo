# ofo
用vue做ofo官网

挂载vue-cli生成的静态文件的坑：
主要是路由问题，需修改打包路径为相对路径和 router的路由路径加前置ofo,header组件的路径也需要加前置ofo,引用路径也许要加入前置ofo
