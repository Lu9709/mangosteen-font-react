# 0.0.0 (2022-12-09)


### Bug Fixes

* **components:** topMenu组件-解决回退造成的菜单与菜单遮罩层行为不一致的问题 ([9d1c8bb](https://github.com/Lu9709/-mangosteen-font-react/commit/9d1c8bb1ccdafd8c800f77db04cc60bcb82becbb))
* **mock:** 修复 mock bug，添加远程数据类型，http.get 接受泛型，完善 Home 页面展示逻辑 ([208f380](https://github.com/Lu9709/-mangosteen-font-react/commit/208f38053d4f7731565c5e4c3e0ac9219d095131))
* **stores:** setError 时之前的表单报错不会保留 ([63117c3](https://github.com/Lu9709/-mangosteen-font-react/commit/63117c39a291ae43b6de0a91a5181a21fd44f93c))
* 解决TS报错 ([130470e](https://github.com/Lu9709/-mangosteen-font-react/commit/130470ee72576bc20e298424c26e02640c4223c0))


### Features

* **app.scss:** 使用 import 确定 css 顺序 ([7a71852](https://github.com/Lu9709/-mangosteen-font-react/commit/7a71852457582bde8a8ab15091474bcba47386b6))
* **components:** 完成 Topnav 组件 ([1258185](https://github.com/Lu9709/-mangosteen-font-react/commit/1258185f6896922b80c692b78b5aa2ee20915333))
* **components:** 完成时间范围选择组件 TimeRangePicker ([e93a7ff](https://github.com/Lu9709/-mangosteen-font-react/commit/e93a7ff7bff01e0893a1309889dc8f717a80dbfb))
* **components:** 完成滑动菜单的样式 ([2b2c72c](https://github.com/Lu9709/-mangosteen-font-react/commit/2b2c72cf816bc4ef63928d1906439240f23f6345))
* **components:** 封装 Icon.tsx 组件 ([0a57c20](https://github.com/Lu9709/-mangosteen-font-react/commit/0a57c2001e701b255e231cdba88b906c37bcd681))
* **components:** 封装 Loading.tsx 组件 ([4e05af7](https://github.com/Lu9709/-mangosteen-font-react/commit/4e05af761e3a1b1d3d6b82930a9be2d6c9735f64))
* **components:** 新建三个组件 Loading.tsx AddItemFloatButton.tsx Icon.tsx ([02c868b](https://github.com/Lu9709/-mangosteen-font-react/commit/02c868b663773610cf094396b5db784c4e2ed581))
* **components:** 点击外部关闭菜单 ([c2425e7](https://github.com/Lu9709/-mangosteen-font-react/commit/c2425e7a5f86e987b4579d6488d0d3cce46424ba))
* **components:** 移动Root.tsx文件至components ([620be85](https://github.com/Lu9709/-mangosteen-font-react/commit/620be85435215a642fbf68d7c5b168ce67de500d))
* **components:** 给菜单添加滑动动画 ([30d8551](https://github.com/Lu9709/-mangosteen-font-react/commit/30d855120de766cc7addd3c9df521aa1079e68c9))
* **components:** 给菜单添加跳转动作 ([70745c8](https://github.com/Lu9709/-mangosteen-font-react/commit/70745c84e3eb109ada2954a0d49785f25d1db4d1)), closes [#123](https://github.com/Lu9709/-mangosteen-font-react/issues/123)
* **context:** 使用上下文（Context）来 setVisible ([895e5dd](https://github.com/Lu9709/-mangosteen-font-react/commit/895e5dd7cfacf74c48f582c55ce6c72d448096f8))
* **hooks:** 创建useTitle hooks,演示如何设置页面标题 title ([bb729ec](https://github.com/Lu9709/-mangosteen-font-react/commit/bb729ecb6fcc5b060c0df3c48526f495855731bf))
* **hooks:** 引入 zustand，封装 useLocalStore Hook ([d47d977](https://github.com/Lu9709/-mangosteen-font-react/commit/d47d9778258a9c5be6b623465aedd24cb226b83c))
* **layouts:** 完成第一个页面的样式 ([fde7794](https://github.com/Lu9709/-mangosteen-font-react/commit/fde7794d021777e6765d176b3fa29704ed38542d))
* **layouts:** 添加第一个页面的 HTML ([dd8be42](https://github.com/Lu9709/-mangosteen-font-react/commit/dd8be4295c69e4cb7fd59d9ebcbbf03ed0cfa11d))
* **lib:** 添加表单校验逻辑 ([00ee442](https://github.com/Lu9709/-mangosteen-font-react/commit/00ee442f864bbdb83b2a5a17dfbf8e59c66a2492))
* **mock:** 使用 vite-plugin-mock 在本地创建 mock 服务器 ([09f73e1](https://github.com/Lu9709/-mangosteen-font-react/commit/09f73e17e6ca6fde383a6b6268c808695ff092e4))
* **mock:** 改造Mock,快速假数据 ([b39ca86](https://github.com/Lu9709/-mangosteen-font-react/commit/b39ca866dc79a27203e234db99d4d97f9a5c87dc))
* **pages:** items页面可以请求数据了 ([524013c](https://github.com/Lu9709/-mangosteen-font-react/commit/524013cef08cc7187d410bc8eb1c2bceda01afec))
* **pages:** signInPage 完成登录页面的样式 ([2e1cb3f](https://github.com/Lu9709/-mangosteen-font-react/commit/2e1cb3f2a1a28cf93ae983362884d870601f3391))
* **pages:** 修改 Welcome 界面，即使页面被浏览器挡住，也不会影响交互 ([b80804b](https://github.com/Lu9709/-mangosteen-font-react/commit/b80804b200b79d05ab6463afd75b83d8850765a7))
* **pages:** 创建 ItemsPage 页面 ([f5e0789](https://github.com/Lu9709/-mangosteen-font-react/commit/f5e07897d40bcde22ea675d1c9de23ea085e90e9))
* **pages:** 创建登录页面 ([092b42e](https://github.com/Lu9709/-mangosteen-font-react/commit/092b42e0914334d1f1f847c6e7d194eeac509764))
* **pages:** 基本完成表单提交功能 ([778c8c6](https://github.com/Lu9709/-mangosteen-font-react/commit/778c8c6d7b1b1c7e5c5df153c4698f8057abc32d))
* **pages:** 完成 4 个界面 ([4cc985e](https://github.com/Lu9709/-mangosteen-font-react/commit/4cc985e3d528045e80c3fbb8aa8a1405b41c92e3))
* **pages:** 完成 ItemsList 组件，ItemsPage 页面基本完成 ([0ac8110](https://github.com/Lu9709/-mangosteen-font-react/commit/0ac8110acdcc06fe7f16ea12ed7035aa6ae29f33))
* **pages:** 完成 ItemsSummary 组件 ([9700cc3](https://github.com/Lu9709/-mangosteen-font-react/commit/9700cc3c6fb46431b9386a7af2c2ae9f56cf6688))
* **pages:** 完成加载中和加载失败的展示逻辑 ([92da173](https://github.com/Lu9709/-mangosteen-font-react/commit/92da17393fe93313217b5bff4014f857ce889bb6))
* **pages:** 完成首页样式 ([676ac61](https://github.com/Lu9709/-mangosteen-font-react/commit/676ac617a8c50545d1efab681d94288a76931a18))
* **pages:** 没有更多数据时，不展示加载按钮 ([7f3c14b](https://github.com/Lu9709/-mangosteen-font-react/commit/7f3c14b5577bf4574026577375d0edbf5302ee2f))
* **pages:** 禁止SWR重新检验第一页的数据 ([be4fce6](https://github.com/Lu9709/-mangosteen-font-react/commit/be4fce66c86657ef554559ed9d360383d27556f4))
* **pages:** 表单提交事件可以获取到表单数据 ([5c5f23b](https://github.com/Lu9709/-mangosteen-font-react/commit/5c5f23bea1340ca15af98d92da18631bf668e9fd))
* **stores:** 使用 useMenuStore 来封装 Menu 的状态 ([30215bd](https://github.com/Lu9709/-mangosteen-font-react/commit/30215bd3506686e4006297c7e3b1bb98a46513f8))
* 使用 Root 组件默认展示 /welcome/1 ([cc9c09e](https://github.com/Lu9709/-mangosteen-font-react/commit/cc9c09eadd633e0d9c4b141377acfb131b17804f))
* 实现「跳过」功能 ([1ac7029](https://github.com/Lu9709/-mangosteen-font-react/commit/1ac7029e90abf565836f4c9084aa891bd74d7090))
* 封装useSwipe的Hooks可以手势滑动 ([e2d8a5b](https://github.com/Lu9709/-mangosteen-font-react/commit/e2d8a5b909823945364b488ecc996cebb7aff0db))
* 添加一个默认404路由 ([c4118cb](https://github.com/Lu9709/-mangosteen-font-react/commit/c4118cb18ca1be1f9612052eeef40837e5e62993))
* 演示如何发送关联请求 ([633f89a](https://github.com/Lu9709/-mangosteen-font-react/commit/633f89a8b6d32e137c8692b6b0f9d2eb921c0051))


### Performance Improvements

* **context:** 使用Context进行组件通信 ([77d0c25](https://github.com/Lu9709/-mangosteen-font-react/commit/77d0c25f2823d2611c3b72f9501603392e1cb868))
* **hooks:** useSwipe Hooks 优化动画切换手势的逻辑 ([526285b](https://github.com/Lu9709/-mangosteen-font-react/commit/526285b287206e6e56849c9c11e29110ee20ff87))
* **layouts:** 优化动画的两个细节 ([48486c8](https://github.com/Lu9709/-mangosteen-font-react/commit/48486c8dd6a910adc6d140b996bd9e8a3b53fa4c))
* **lib:** 优化hasError方法 ([36ee00b](https://github.com/Lu9709/-mangosteen-font-react/commit/36ee00bbfc01158bdea8f3e016bb3c4b3370a7b0))



