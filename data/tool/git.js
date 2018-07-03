commonData.tool.git = {
	content: `
	#安装
	Windows下安装
	从 α(Git 官网|https://git-scm.com/downloads) 上下载 Git 客户端并安装到 C 盘
	将 Git 目录下的 bin（如 C:\\Program Files (x86)\\Git\\bin ）添加到 PATH 环境变量
	添加环境变量：此电脑 > 属性 > 高级系统设置 > 环境变量
	选择 PATH, 点击『编辑』，将 bin 的路径（如 C:\\Program Files (x86)\\Git\\bin ）添加到变量值后面
	
	##用户信息设置
	安装完 Git 后应该及时设置你的用户名称与邮件地址，此后每次 Git 的提交都会使用这些信息。在终端输入一下命令即可设置你的用户信息。
	··
	$ git config --global user.name "你的名称"
	$ git config --global user.email "你的邮箱"
	··
	
	#常用命令
	
	##创建版本库
	··
	$ git clone <url>                  // 克隆远程版本库
	$ git init                         // 初始化本地版本库
	··
	
	##修改和提交
	··
	$ git status                       // 查看状态
	$ git diff                         // 查看变更内容
	$ git add .                        // 跟踪所有改动过的文件
	$ git add <file>                   // 跟踪指定的文件
	$ git mv <old><new>                // 文件改名
	$ git rm<file>                     // 删除文件
	$ git rm --cached<file>            // 停止跟踪文件但不删除
	$ git commit -m "commit messages"  // 提交所有更新过的文件
	$ git commit --amend               // 修改最后一次改动
	··
	
	##查看提交历史
	··
	$ git log                    // 查看提交历史
	$ git log -p <file>          // 查看指定文件的提交历史
	$ git blame <file>           // 以列表方式查看指定文件的提交历史
	··
	
	##撤销
	··
	$ git reset --hard HEAD      // 撤销工作目录中所有未提交文件的修改内容
	$ git checkout HEAD <file>   // 撤销指定的未提交文件的修改内容
	$ git revert <commit>        // 撤销指定的提交
	$ git log --before="1 days"  // 退回到之前1天的版本
	··
	
	##分支与标签
	··
	$ git branch                   // 显示所有本地分支
	$ git checkout <branch/tag>    // 切换到指定分支和标签
	$ git branch <new-branch>      // 创建新分支
	$ git branch -d <branch>       // 删除本地分支
	$ git tag                      // 列出所有本地标签
	$ git tag <tagname>            // 基于最新提交创建标签
	$ git tag -d <tagname>         // 删除标签
	··
	
	##合并与衍合
	··
	$ git merge <branch>        // 合并指定分支到当前分支
	$ git rebase <branch>       // 衍合指定分支到当前分支
	··
	
	##远程操作
	··
	$ git remote -v                   // 查看远程版本库信息
	$ git remote show <remote>        // 查看指定远程版本库信息
	$ git remote add <remote> <url>   // 添加远程版本库
	$ git fetch <remote>              // 从远程库获取代码
	$ git pull <remote> <branch>      // 下载代码及快速合并
	$ git push <remote> <branch>      // 上传代码及快速合并
	$ git push <remote> :<branch/tag-name>  // 删除远程分支或标签
	$ git push --tags                       // 上传所有标签
	··
	
	#常见问题
	·git add .·如果半天没反应的话，应该是有大文件，比如node_modules文件，所以需用.gitignore忽略或选择删除
	若出现·fatal: Unable to create .git/index.lock': File exists.·错误，在.git文件夹内（这是一个隐藏文件夹，可以在左上角查看：组织>文件夹和搜索选项>显示或不显示隐藏文件夹）删除index.lock即可，或者在git bash here执行删除命令：·rm -f .git/index.lock·

	&2018.4.18
	`
}