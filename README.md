# admin_template_vue3

一个轻量的中后台模板
使用了vue3 + NaiveUI + pinia + vite 
喜欢的话欢迎小手点个start哦

## 启动项目建议

1.启动的话建议用16以上的node版本。并且npm的版本也是8以上
 -- 可以在在终端使用node -v 和npm -v 分别查看系统版本。
2.上述完成之后拉下代码在文件根目录下安装依赖即可运行起来

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
