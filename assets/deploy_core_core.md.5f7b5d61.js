import{_ as s,o as a,c as n,a as p}from"./app.7f8628ac.js";const l=JSON.parse('{"title":"Mix Space Core 部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"视频教程","slug":"视频教程"},{"level":2,"title":"域名解析","slug":"域名解析"},{"level":2,"title":"准备环境","slug":"准备环境"},{"level":3,"title":"系统","slug":"系统"},{"level":3,"title":"安装面板","slug":"安装面板"},{"level":3,"title":"Node.js 安装","slug":"node-js-安装"},{"level":3,"title":"安装一些必备软件","slug":"安装一些必备软件"},{"level":3,"title":"新建网站并配置 SSL","slug":"新建网站并配置-ssl"},{"level":3,"title":"安装 docker","slug":"安装-docker"},{"level":2,"title":"安装 Core","slug":"安装-core"},{"level":3,"title":"准备","slug":"准备"},{"level":3,"title":"生成容器","slug":"生成容器"},{"level":2,"title":"反向代理","slug":"反向代理"},{"level":3,"title":"Mix Space Core","slug":"mix-space-core"},{"level":2,"title":"初始化","slug":"初始化"}],"relativePath":"deploy/core/core.md"}'),e={name:"deploy/core/core.md"},o=[p('<h1 id="mix-space-core-部署" tabindex="-1">Mix Space Core 部署 <a class="header-anchor" href="#mix-space-core-部署" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>推荐使用 Docker Compose 部署整个环境。<a href="/deploy/">请点这里</a></p></div><h2 id="视频教程" tabindex="-1">视频教程 <a class="header-anchor" href="#视频教程" aria-hidden="true">#</a></h2><iframe src="https://api.paugram.com/bili?av=897657356&amp;style=gray" style="height:176px;width:100%;"></iframe><p>配合文档食用效果更佳。</p><h2 id="域名解析" tabindex="-1">域名解析 <a class="header-anchor" href="#域名解析" aria-hidden="true">#</a></h2><p>国内服务器请完成备案后再进行。</p><p>本文档示例域名：</p><p><code>Mix Space Core</code> : <code>server.test.cn</code></p><p><code>kami</code> : <code>www.test.cn</code></p><h2 id="准备环境" tabindex="-1">准备环境 <a class="header-anchor" href="#准备环境" aria-hidden="true">#</a></h2><h3 id="系统" tabindex="-1">系统 <a class="header-anchor" href="#系统" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>❗ 注意：文档未考虑对 Windows 的支持工作，Windows 的使用者请自行处理兼容性问题；</p><p>Linux 内核版本 &gt; 4.18，建议使用 5.X 版本的内核；内存 &gt; 1 GiB ！</p></div><p>例如 Ubuntu、Debian 最新版等等，不建议使用 CentOS（终究是要停更的）。</p><p><strong>推荐使用较高版本的 Linux 内核。</strong></p><h3 id="安装面板" tabindex="-1">安装面板 <a class="header-anchor" href="#安装面板" aria-hidden="true">#</a></h3><ul><li><p>安装<a href="https://www.bt.cn/bbs/thread-19376-1-1.html" target="_blank" rel="noreferrer">宝塔面板</a></p></li><li><p>在宝塔面板 — 软件商店，安装 <code>Nginx</code>。</p></li></ul><h3 id="node-js-安装" tabindex="-1">Node.js 安装 <a class="header-anchor" href="#node-js-安装" aria-hidden="true">#</a></h3><h4 id="方法一（可用，但存在问题，不推荐）" tabindex="-1">方法一（可用，但存在问题，不推荐） <a class="header-anchor" href="#方法一（可用，但存在问题，不推荐）" aria-hidden="true">#</a></h4><p>宝塔面板 - 软件商店，选择 <code>pm2 管理器</code>(nvm) , 另外一个 <code>Node.js 版本管理器</code> 未做校验，不予讨论</p><p>Node 版本选择 Node 16.X ，稳定版本是 Node 16.16.x</p><h4 id="方法二（虽麻烦，但推荐-🌟）" tabindex="-1">方法二（虽麻烦，但推荐 🌟） <a class="header-anchor" href="#方法二（虽麻烦，但推荐-🌟）" aria-hidden="true">#</a></h4><p>使用 nvm OR n 作为 Node.js 管理器</p><p>这里推荐小巧可爱的 n</p><p>假设你的 shell 解释器 是 bash，如果你的是其他，请类比参考哦？</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n</span></span>\n<span class="line"><span style="color:#676E95;"># 如果无法访问 Github raw 的话就执行下面这条命令</span></span>\n<span class="line"><span style="color:#676E95;"># curl -L https://raw.fastgit.org/tj/n/master/bin/n -o n</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">export N_PREFIX=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">HOME</span><span style="color:#C3E88D;">/.n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bashrc</span></span>\n<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">export PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">N_PREFIX</span><span style="color:#C3E88D;">/bin:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bashrc</span></span>\n<span class="line"><span style="color:#676E95;"># echo &quot;export N_NODE_MIRROR=https://npmmirror.com/mirrors/node&quot; &gt;&gt; ~/.bashrc  #如果官方源下载慢的话可以执行这条换国内源</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">export N_PRESERVE_NPM=1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bashrc</span></span>\n<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bashrc</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">bash n lts</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm i -g n@latest</span></span>\n<span class="line"></span></code></pre></div><p>接下来你即可使用 n 管理 node.js 版本了。</p><p>只需执行 <code>n &lt;version&gt;</code> 即可下载并安装Node.js版本。如果 <code>&lt;version&gt;</code> 已经下载，<code>n</code> 将从其缓存中安装。</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">n lts</span></span>\n<span class="line"></span></code></pre></div><h3 id="安装一些必备软件" tabindex="-1">安装一些必备软件 <a class="header-anchor" href="#安装一些必备软件" aria-hidden="true">#</a></h3><p><strong>在下面的内容中，假设你是普通用户权限</strong></p><p>Debian / Ubuntu ，RedHat (CentOS)系同理（自行参考）</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo apt update </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> sudo apt install git curl vim wget git-lfs -y</span></span>\n<span class="line"></span></code></pre></div><p>RedHat系，例如 CentOS</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum/dnf check-update </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> yum/dnf git curl vim wget git-lfs</span></span>\n<span class="line"></span></code></pre></div><p>安装相关软件</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># 安装相关软件</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm install -g pnpm pm2</span></span>\n<span class="line"><span style="color:#676E95;"># 如果安装比较慢，可以使用以下命令切换镜像源</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> registry http://mirrors.cloud.tencent.com/npm/</span></span>\n<span class="line"></span></code></pre></div><h3 id="新建网站并配置-ssl" tabindex="-1">新建网站并配置 SSL <a class="header-anchor" href="#新建网站并配置-ssl" aria-hidden="true">#</a></h3><p>在宝塔面板上新建以上网站，部署好 SSL 证书并开启强制 HTTPS</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>🧨 警告：前端要求强制 HTTPS，未配置 SSL 将无法正常访问。</p></div><h3 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl -fsSL https://get.docker.com </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> bash -s docker</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 如果安装比较慢，推荐使用以下命令</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">curl -fsSL https://get.docker.com </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> bash -s docker --mirror Aliyun</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><p>检查是否安装完成</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker -v</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">sudo docker compose version</span></span>\n<span class="line"></span></code></pre></div><p>正常输出版本号即可</p><h2 id="安装-core" tabindex="-1">安装 Core <a class="header-anchor" href="#安装-core" aria-hidden="true">#</a></h2><h3 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-hidden="true">#</a></h3><p>为了方便管理建议将 <code>docker-compose.yml</code> 放到 <code>mx-space/server</code> 下</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#82AAFF;">cd</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">mkdir -p mx-space/server</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> mx-space/server</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env</span></span>\n<span class="line"></span></code></pre></div><p>用宝塔或者 <code>vim</code> 编辑这个 <code>.env</code> 文件，文件示例如下</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE</span></span>\n<span class="line"><span style="color:#A6ACCD;"># SEE https://docs.docker.com/compose/environment-variables/#the-env-file</span></span>\n<span class="line"><span style="color:#A6ACCD;">JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串，示例如：hash 的 md5 值</span></span>\n<span class="line"><span style="color:#A6ACCD;">ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是kami的域名，如果允许多个域名访问，用英文逗号,分隔</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="生成容器" tabindex="-1">生成容器 <a class="header-anchor" href="#生成容器" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># 拉取最新镜像</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">sudo docker compose pull</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 启动容器</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">sudo docker compose up -d</span></span>\n<span class="line"></span></code></pre></div><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-hidden="true">#</a></h2><h3 id="mix-space-core" tabindex="-1">Mix Space Core <a class="header-anchor" href="#mix-space-core" aria-hidden="true">#</a></h3><p>进入宝塔面板—网站，设置后端网站（<a href="http://server.test.cn" target="_blank" rel="noreferrer">server.test.cn</a>)</p><p>我们点击左侧的 <code>配置文件</code>（网站设置）</p><p>在 <code>error_log</code> 这行下面，添加如下配置:</p><div class="language-nginx"><button class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"><span style="color:#676E95;">#PROXY-START/</span></span>\n<span class="line"><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/socket.io </span><span style="color:#A6ACCD;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_buffering </span><span style="color:#A6ACCD;">off</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Connection </span><span style="color:#C3E88D;">&quot;Upgrade&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:2333/socket.io</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> /</span></span>\n<span class="line"><span style="color:#F07178;">{</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#F07178;">http://127.0.0.1:2333/</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">REMOTE-HOST </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">X-Cache </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">upstream_cache_status</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> set $</span><span style="color:#A6ACCD;">static_fileJsNv8TWb</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~* </span><span style="color:#C3E88D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#F07178;"> )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\tset $</span><span style="color:#A6ACCD;">static_fileJsNv8TWb</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\texpires </span><span style="color:#F07178;">12h</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        }</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">static_fileJsNv8TWb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">= </span><span style="color:#F07178;">0 )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">Cache-Control no-cache</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    }</span></span>\n<span class="line"><span style="color:#F07178;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">#PROXY-END/</span></span>\n<span class="line"></span></code></pre></div><p>保存即可。或者也可以像视频一样在 网站设置-反向代理 处添加一个目标 URL 为 <code>http://127.0.0.1:2333</code> 的反代后再直接用上面的内容覆盖原来的反代配置文件。</p><p>然后那么局部配置文件示例如下：</p><div class="language-nginx"><button class="copy"></button><span class="lang">nginx</span><pre><code><span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> access_log </span><span style="color:#A6ACCD;"> /www/wwwlogs/server.test.cn.log</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> error_log </span><span style="color:#A6ACCD;"> /www/wwwlogs/server.test.cn.log</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#676E95;">#PROXY-START/</span></span>\n<span class="line"><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/socket.io </span><span style="color:#A6ACCD;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_buffering </span><span style="color:#A6ACCD;">off</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Connection </span><span style="color:#C3E88D;">&quot;Upgrade&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:2333/socket.io</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> /</span></span>\n<span class="line"><span style="color:#F07178;">{</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#F07178;">http://127.0.0.1:2333/</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Real-IP </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">X-Forwarded-For </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#F07178;">REMOTE-HOST </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">remote_addr</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">X-Cache </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">upstream_cache_status</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> set $</span><span style="color:#A6ACCD;">static_fileJsNv8TWb</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~* </span><span style="color:#C3E88D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#F07178;"> )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\tset $</span><span style="color:#A6ACCD;">static_fileJsNv8TWb</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">\texpires </span><span style="color:#F07178;">12h</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">        }</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">static_fileJsNv8TWb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">= </span><span style="color:#F07178;">0 )</span></span>\n<span class="line"><span style="color:#F07178;">    {</span></span>\n<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;"> add_header </span><span style="color:#F07178;">Cache-Control no-cache</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    }</span></span>\n<span class="line"><span style="color:#F07178;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;">#PROXY-END/</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h2><p>访问 <code>https://server.test.cn/proxy/qaqdmin</code> 来进行初始化，否则前端将会出现异常报错。</p>',64)];const c=s(e,[["render",function(s,p,l,e,c,t){return a(),n("div",null,o)}]]);export{l as __pageData,c as default};
