Git高级应用
===
* knowledgeid: -LdLtaiBADqiIat-6k_g
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 Rebase 合并
```

该命令可以让和 &#39;merge&#39; 命令得到的结果基本是一致的。</p>
<p>通常使用 &#39;merge&#39; 操作将分支上的代码合并到 &#39;master&#39; 中，分支样子如下所
示</p>
<p><img src="https://user-gold-cdn.xitu.io/2018/4/23/162f109db27be054?w=505&amp;h=461&amp;f=png&amp;s=22796" alt=""></p>
<p>使用 &#39;rebase&#39; 后，会将 &#39;develop&#39; 上的 &#39;commit&#39; 按顺序移到 &#39;master&#39; 
的第三个 &#39;commit&#39; 后面，分支样子如下所示</p>
<p><img src="https://user-gold-cdn.xitu.io/2018/4/23/162f11cc2cb8b332?w=505&amp;h=563&amp;f=png&amp;s=26514" alt=""></p>
<p>Rebase 对比 merge，优势在于合并后的结果很清晰，只有一条线，劣势在于如
果一旦出现冲突，解决冲突很麻烦，可能要解决多个冲突，但是 merge 出现冲
突只需要解决一次。</p>
<p>使用 rebase 应该在需要被 rebase 的分支上操作，并且该分支是本地分支。
如果 &#39;develop&#39; 分支需要 rebase 到 &#39;master&#39; 上去，那么应该如下操作</p>
<p>shell</p>
<h2 id="branch-develop">branch develop</h2>
<p>git rebase master
git checkout master</p>
<h2 id="-master-head-commit">用于将 &#39;master&#39; 上的 HEAD 移动到最新的 commit</h2>
<p>git merge develop

```
## 2.0 stash
```

&#39;stash&#39; 用于临时保存工作目录的改动。开发中可能会遇到代码写一半需要切分
支打包的问题，如果这时候你不想 &#39;commit&#39; 的话，就可以使用该命令。</p>
<p>shell
git stash</p>
<p>使用该命令可以暂存你的工作目录，后面想恢复工作目录，只需要使用</p>
<p>shell
git stash pop</p>
<p>这样你之前临时保存的代码又回来了

```
## 3.0 reflog
```

&#39;reflog&#39; 可以看到 HEAD 的移动记录，假如之前误删了一个分支，可以通过
 &#39;git reflog&#39; 看到移动 HEAD 的哈希值</p>
<p><img src="https://user-gold-cdn.xitu.io/2018/4/23/162f14df98ce3d83?w=950&amp;h=118&amp;f=png&amp;s=77151" alt=""></p>
<p>从图中可以看出，HEAD 的最后一次移动行为是 &#39;merge&#39; 后，接下来分支 
&#39;new&#39; 就被删除了，那么我们可以通过以下命令找回 &#39;new&#39; 分支</p>
<p>shell
git checkout 37d9aca
git checkout -b new</p>
<p>PS：&#39;reflog&#39; 记录是时效的，只会保存一段时间内的记录。

```
## 4.0 Reset
```

如果你想删除刚写的 commit，就可以通过以下命令实现</p>
<p>shell
git reset --hard HEAD^</p>
<p>但是 &#39;reset&#39; 的本质并不是删除了 commit，而是重新设置了 HEAD 和它
指向的 branch。

```
## 5.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLtaiBADqiIat-6k_gx07?alt=media&token=1a6051cc-49ef-4151-9797-75a1f3851c65
