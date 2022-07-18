import{_ as s,j as n,g as a,I as l}from"./chunks/framework.4d72ab90.js";const C=JSON.parse('{"title":"POCS \u7C7B\u578B\u63D2\u4EF6","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugin-pocs.md","lastUpdated":1657849885000}'),p={name:"guide/plugin-pocs.md"},o=l(`<h1 id="pocs-\u7C7B\u578B\u63D2\u4EF6" tabindex="-1">POCS \u7C7B\u578B\u63D2\u4EF6 <a class="header-anchor" href="#pocs-\u7C7B\u578B\u63D2\u4EF6" aria-hidden="true">#</a></h1><p>POCS \u7C7B\u578B\u63D2\u4EF6\u7528\u6765\u81EA\u5B9A\u4E49\u5728\u7CFB\u7EDF\u521D\u59CB\u5316\u65F6\u5019\u52A0\u8F7D PoC \u811A\u672C\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u4ECE redis \u6216\u6570\u636E\u5E93\u52A0\u8F7D PoC \u811A\u672C\u4EE3\u7801\u3002</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> PluginBase</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> PLUGIN_TYPE</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> logger</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> register_plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TargetPluginDemo</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">PluginBase</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    category </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> PLUGIN_TYPE</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">POCS</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        pocs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">POC_CODE_1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> POC_CODE_2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># load PoC code from redis, database ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> poc </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> pocs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> poc </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_poc</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">poc</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">                    count </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        info_msg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[PLUGIN] get {0} poc(s) from demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        logger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">info</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">info_msg</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">register_plugin</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">TargetPluginDemo</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function t(c,r,D,y,F,i){return a(),n("div",null,e)}var _=s(p,[["render",t]]);export{C as __pageData,_ as default};
