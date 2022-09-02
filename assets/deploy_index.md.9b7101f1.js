import{_ as s,o as a,c as n,a as p}from"./app.7f8628ac.js";const e=JSON.parse('{"title":"部署 Mix-Space","description":"","frontmatter":{"title":"部署 Mix-Space"},"headers":[{"level":3,"title":"准备","slug":"准备"},{"level":2,"title":"环境安装","slug":"环境安装"},{"level":3,"title":"安装软件包","slug":"安装软件包"},{"level":3,"title":"安装 Docker","slug":"安装-docker"},{"level":3,"title":"安装 nvm","slug":"安装-nvm"},{"level":2,"title":"部署系统","slug":"部署系统"},{"level":3,"title":"使用预设脚本部署","slug":"使用预设脚本部署"},{"level":3,"title":"手动部署","slug":"手动部署"}],"relativePath":"deploy/index.md"}'),l={name:"deploy/index.md"},c=[p('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节内容带你部署 Mix-Space，请有耐心的一点点看完；国内服务器请完成备案后再进行</p></div><h3 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-hidden="true">#</a></h3><p>操作系统: 建议 Ubuntu 20.04 / Debian 11 及以上版本，或其他 Linux 发行版本</p><p>Linux 内核版本: 大于 4.18 ，建议 5.x</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>使用小于 4.18 版本的 Linux 内核将无法正常部署 Mix-Space</p></div><h2 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-hidden="true">#</a></h2><h3 id="安装软件包" tabindex="-1">安装软件包 <a class="header-anchor" href="#安装软件包" aria-hidden="true">#</a></h3><p>Debian / Ubuntu</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># apt update &amp;&amp; apt install git curl vim wget git-lfs -y</span></span>\n<span class="line"></span></code></pre></div><p>CentOS</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># yum check-update &amp;&amp; yum install git curl vim wget git-lfs -y</span></span>\n<span class="line"></span></code></pre></div><h3 id="安装-docker" tabindex="-1">安装 Docker <a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a></h3><p>SSH 连接到服务器，使用一键脚本，可以迅速安装 Docker 和 Docker Compose</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ curl -fsSL https://get.docker.com </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> bash -s docker --mirror Aliyun</span></span>\n<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>该过程可能比较慢，请不要断开 SSH 连接；该脚本仅支持 Debian，Ubuntu，CentOS，其他系统请自行安装</p></div><h3 id="安装-nvm" tabindex="-1">安装 nvm <a class="header-anchor" href="#安装-nvm" aria-hidden="true">#</a></h3><p>nvm 用于管理 Node.js</p><p>打开终端，使用一键脚本，可以迅速安装 nvm</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ bash -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/master/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>\n<span class="line"></span></code></pre></div><p>重启终端即可生效</p><p>安装 Node.js 16</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nvm install 16</span></span>\n<span class="line"></span></code></pre></div><p>安装需要的模块</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i -g yarn zx pnpm</span></span>\n<span class="line"></span></code></pre></div><h2 id="部署系统" tabindex="-1">部署系统 <a class="header-anchor" href="#部署系统" aria-hidden="true">#</a></h2><h3 id="使用预设脚本部署" tabindex="-1">使用预设脚本部署 <a class="header-anchor" href="#使用预设脚本部署" aria-hidden="true">#</a></h3><p>克隆仓库</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> mkdir mx-space </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> mx-space</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/mx-space/docker --depth=1</span></span>\n<span class="line"></span></code></pre></div><h4 id="整个环境" tabindex="-1">整个环境 <a class="header-anchor" href="#整个环境" aria-hidden="true">#</a></h4><p>所部署的环境：Kami + Core + Caddy2</p><p>在此之前，你需要将域名解析完毕</p><p>使用一键脚本</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docker</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm i</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ zx ./build.mjs</span></span>\n<span class="line"></span></code></pre></div><p>实例输入：</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">你的域名为：（需要提前绑定）: innei.ren</span></span>\n<span class="line"><span style="color:#A6ACCD;">你的邮箱为: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">若该步留空，则不部署 Caddy 服务</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">: tukon@gmail.com</span></span>\n<span class="line"><span style="color:#A6ACCD;">是否部署 Caddy 2.0？ </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">y/n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">: y</span></span>\n<span class="line"></span></code></pre></div><p>待流程执行完毕，进入 <a href="https://xn--6qqv7i2xdt95b/proxy/qaqdmin%EF%BC%8C%E8%BF%9B%E8%A1%8C%E5%88%9D%E5%A7%8B%E5%8C%96" target="_blank" rel="noreferrer">https://你的域名/proxy/qaqdmin，进行初始化</a></p><h5 id="仅部署服务和主站前端" tabindex="-1">仅部署服务和主站前端 <a class="header-anchor" href="#仅部署服务和主站前端" aria-hidden="true">#</a></h5><p>所部署的环境：Kami + Core</p><p>你不需要 IP 指向。但是需要手动处理服务器反代</p><p>使用一键脚本</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docker</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ npm i</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ zx ./build.mjs</span></span>\n<span class="line"></span></code></pre></div><p>实例输入：</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">你的域名为：（需要提前绑定）: innei.ren</span></span>\n<span class="line"><span style="color:#A6ACCD;">你的邮箱为: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">此步留空，则不部署 Caddy 服务</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">:</span></span>\n<span class="line"></span></code></pre></div><p>待流程执行完毕，进入 <a href="http://127.0.0.1:2333/proxy/qaqdmin" target="_blank" rel="noreferrer">http://127.0.0.1:2333/proxy/qaqdmin</a></p><h3 id="手动部署" tabindex="-1">手动部署 <a class="header-anchor" href="#手动部署" aria-hidden="true">#</a></h3><h4 id="部署-core" tabindex="-1">部署 Core <a class="header-anchor" href="#部署-core" aria-hidden="true">#</a></h4><p>//TODO docs: rewrite core install</p><p>//TODO docs: rewirte kami install</p>',48)];const o=s(l,[["render",function(s,p,e,l,o,t){return a(),n("div",null,c)}]]);export{e as __pageData,o as default};
