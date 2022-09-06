import{_ as s,o as a,c as n,a as p}from"./app.7f8628ac.js";const l=JSON.parse('{"title":"部署 Kami","description":"","frontmatter":{},"headers":[{"level":2,"title":"开始！","slug":"开始！"},{"level":2,"title":"拉取源文件","slug":"拉取源文件"},{"level":2,"title":"安装依赖","slug":"安装依赖"},{"level":2,"title":"构建","slug":"构建"},{"level":2,"title":"pm2 托管（启动）","slug":"pm2-托管（启动）"},{"level":2,"title":"反向代理","slug":"反向代理"},{"level":2,"title":"PS","slug":"ps"},{"level":2,"title":"后续","slug":"后续"}],"relativePath":"deploy/kami/index.md"}'),e={name:"deploy/kami/index.md"},o=[p('<h1 id="部署-kami" tabindex="-1">部署 Kami <a class="header-anchor" href="#部署-kami" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本文默认您已安装 服务端，若未安装请移步至 <a href="/deploy/core/core">Core 安装</a>，即本节内容从 <a href="/deploy/core/core">Core 安装</a> 继承，所需要的前置内容已经在该节阐明！</p></div><h2 id="开始！" tabindex="-1">开始！ <a class="header-anchor" href="#开始！" aria-hidden="true">#</a></h2><h2 id="拉取源文件" tabindex="-1">拉取源文件 <a class="header-anchor" href="#拉取源文件" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> mx-space</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">git clone https://github.com/mx-space/kami.git --depth=1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 网络不好的情况，请使用下面的命令。</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">git clone https://hub.fastgit.xyz/mx-space/kami.git --depth=1</span></span>\n<span class="line"></span></code></pre></div><p>更换分支到最后一个稳定版本(tag)</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> kami </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> git fetch --tags </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> git checkout </span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">git rev-list --tags --max-count=1</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"></span></code></pre></div><p>拉取图片文件</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">git lfs fetch --all</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">git lfs pull</span></span>\n<span class="line"></span></code></pre></div><p>注意：如果无法正常拉取，可以到 GitHub 上手动下载文件并放到相应目录。</p><p>复制配置文件</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;"> cp .env.example .env</span></span>\n<span class="line"></span></code></pre></div><p>编辑 <code>.env</code>，示例如下：</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># API 地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2</span></span>\n<span class="line"><span style="color:#676E95;"># GATEWAY 地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn</span></span>\n<span class="line"><span style="color:#676E95;">#前端使用的配置项名字</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_SNIPPET_NAME=kami</span></span>\n<span class="line"><span style="color:#676E95;"># 如果使用 CDN, 修改产物前缀</span></span>\n<span class="line"><span style="color:#A6ACCD;">ASSETPREFIX=</span></span>\n<span class="line"></span></code></pre></div><p>去掉注释，保存即可。</p><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm i</span></span>\n<span class="line"></span></code></pre></div><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm build</span></span>\n<span class="line"><span style="color:#676E95;">#备用命令</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm run build</span></span>\n<span class="line"></span></code></pre></div><h2 id="pm2-托管（启动）" tabindex="-1">pm2 托管（启动） <a class="header-anchor" href="#pm2-托管（启动）" aria-hidden="true">#</a></h2><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run prod:pm2</span></span>\n<span class="line"><span style="color:#676E95;"># pm2 start</span></span>\n<span class="line"></span></code></pre></div><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-hidden="true">#</a></h2><p>点击网站—网站，设置前端网站（<a href="http://www.test.cn" target="_blank" rel="noreferrer">www.test.cn</a>），</p><p>我们点击左侧的 <code>配置文件</code>（网站设置）</p><p>在 <code>error_log</code> 这行下面，添加如下配置:</p><div class="language-nginx"><button class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"><span style="color:#676E95;">#PROXY-START/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> ^</span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> /</span></span>\n<span class="line"><span style="color:#F07178;">{</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#F07178;">http://127.0.0.1:2323</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">REMOTE-HOST </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">X-Cache </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">upstream_cache_status</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> set $</span><span style="color:#A6ACCD;">static_fileSw1Jy3nG</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~* </span><span style="color:#C3E88D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#F07178;"> )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\tset $</span><span style="color:#A6ACCD;">static_fileSw1Jy3nG</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\texpires </span><span style="color:#F07178;">12h</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        }</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">static_fileSw1Jy3nG</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">= </span><span style="color:#F07178;">0 )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">Cache-Control no-cache</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    }</span></span>\n<span class="line"><span style="color:#F07178;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">#PROXY-END/</span></span>\n<span class="line"></span></code></pre></div><p>保存即可。或者也可以像视频一样在 网站设置-反向代理 处添加一个目标 URL 为 <code>http://127.0.0.1:2323</code> 的反代后再直接用上面的内容覆盖原来的反代配置文件。</p><p>然后那么局部配置文件示例如下：</p><div class="language-nginx"><button class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> access_log </span><span style="color:#A6ACCD;"> /www/wwwlogs/www.test.cn.log</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> error_log </span><span style="color:#A6ACCD;"> /www/wwwlogs/www.test.cn.log</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;">#PROXY-START/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> ^</span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> /</span></span>\n<span class="line"><span style="color:#F07178;">{</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#F07178;">http://127.0.0.1:2323</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">REMOTE-HOST </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">X-Cache </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">upstream_cache_status</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> set $</span><span style="color:#A6ACCD;">static_fileSw1Jy3nG</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~* </span><span style="color:#C3E88D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#F07178;"> )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\tset $</span><span style="color:#A6ACCD;">static_fileSw1Jy3nG</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\texpires </span><span style="color:#F07178;">12h</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        }</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">static_fileSw1Jy3nG</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">= </span><span style="color:#F07178;">0 )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">Cache-Control no-cache</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    }</span></span>\n<span class="line"><span style="color:#F07178;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">#PROXY-END/</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><p>接下来访问 <a href="https://www.test.cn/" target="_blank" rel="noreferrer">https://www.test.cn/</a> ，看看运行是否正常，若有不正常请自行参考文档进行解决，或者提 <a href="https://github.com/mx-space/docs/issues" target="_blank" rel="noreferrer">issue</a></p><h2 id="ps" tabindex="-1">PS <a class="header-anchor" href="#ps" aria-hidden="true">#</a></h2><p>在 <code>Kami</code> 前端，可以在链接的后面带上 <code>/login</code> (例如 <a href="https://www.test.cn/login" target="_blank" rel="noreferrer">https://www.test.cn/login</a>) 或者双击左上角 logo 进行登录，对评论进行操作，例如：置顶，删除，回复....</p><h2 id="后续" tabindex="-1">后续 <a class="header-anchor" href="#后续" aria-hidden="true">#</a></h2><p>自定义 Kami 可定义的元素，需要的章节 <a href="/options/">Kami 设置</a></p><p>设置歌单，音乐播放器等，需要的章节 <a href="/options/serverless">云函数配置</a></p>',35)];const c=s(e,[["render",function(s,p,l,e,c,t){return a(),n("div",null,o)}]]);export{l as __pageData,c as default};