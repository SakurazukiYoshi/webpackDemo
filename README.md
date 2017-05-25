# 简介


这是个人配置的gulp+webpack的模板，分工比较明确


webpack用于处理代码的模块化

gulp用于处理less的转化，代码的压缩，复制等等
	 

# 使用步骤


	1. clone代码
	2. npm install
	3. cmd中运行   webpack -w    //用于监视webpack并刷新devDependencies中的文件
	4. cmd中运行   gulp s        //用于刷新浏览器，复制处理相应的css，html，js文件
	
	
	开发的代码在src文件中
	
	线上的代码位于dist文件中
	
	devDependencies文件用于存放webpack，生成的js文件和用于调试的map文件