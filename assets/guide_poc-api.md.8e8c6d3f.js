import{_ as s,j as n,g as a,I as l}from"./chunks/framework.4d72ab90.js";const C=JSON.parse('{"title":"\u901A\u7528 API \u5217\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u901A\u7528\u65B9\u6CD5","slug":"\u901A\u7528\u65B9\u6CD5"},{"level":2,"title":"ShellCode \u751F\u6210\u652F\u6301","slug":"shellcode-\u751F\u6210\u652F\u6301"},{"level":2,"title":"HTTP \u670D\u52A1\u5185\u7F6E","slug":"http-\u670D\u52A1\u5185\u7F6E"}],"relativePath":"guide/poc-api.md","lastUpdated":1657949701000}'),p={name:"guide/poc-api.md"},o=l(`<h1 id="\u901A\u7528-api-\u5217\u8868" tabindex="-1">\u901A\u7528 API \u5217\u8868 <a class="header-anchor" href="#\u901A\u7528-api-\u5217\u8868" aria-hidden="true">#</a></h1><p>\u5728\u7F16\u5199 PoC \u7684\u65F6\u5019\uFF0C\u76F8\u5173\u65B9\u6CD5\u8BF7\u5C3D\u91CF\u8C03\u7528 Pocsuite3 \u5DF2\u5C01\u88C5\u7684 API\u3002</p><h2 id="\u901A\u7528\u65B9\u6CD5" tabindex="-1">\u901A\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u901A\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>from pocsuite3.api import logger</td><td>\u65E5\u5FD7\u8BB0\u5F55\uFF0C\u6BD4\u5982logger.log(info)</td></tr><tr><td>from pocsuite3.api import requests</td><td>\u8BF7\u6C42\u7C7B\uFF0C\u7528\u6CD5\u540C requests</td></tr><tr><td>from pocsuite3.api import Seebug</td><td>Seebug api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import ZoomEye</td><td>ZoomEye api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import Shodan</td><td>Shodan api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import Fofa</td><td>Fofa api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import Quake</td><td>Quake api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import Hunter</td><td>Hunter api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import Censys</td><td>Censys api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import CEye</td><td>CEye api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import Interactsh</td><td>Interactsh api \u8C03\u7528</td></tr><tr><td>from pocsuite3.api import crawl</td><td>\u7B80\u5355\u722C\u866B\u529F\u80FD</td></tr><tr><td>from pocsuite3.api import PHTTPServer</td><td>Http \u670D\u52A1\u529F\u80FD</td></tr><tr><td>from pocsuite3.api import REVERSE_PAYLOAD</td><td>\u53CD\u5411\u8FDE\u63A5 shell payload</td></tr><tr><td>from pocsuite3.api import get_results</td><td>\u83B7\u53D6\u7ED3\u679C</td></tr></tbody></table><p>\uFF08TODO\uFF1AAPI \u6587\u6863\u5B8C\u5584\uFF09</p><h2 id="shellcode-\u751F\u6210\u652F\u6301" tabindex="-1">ShellCode \u751F\u6210\u652F\u6301 <a class="header-anchor" href="#shellcode-\u751F\u6210\u652F\u6301" aria-hidden="true">#</a></h2><p>\u5728\u4E00\u4E9B\u7279\u6B8A\u7684 Linux \u548C Windows \u73AF\u5883\u4E0B\uFF0C\u60F3\u5F97\u5230\u53CD\u5F39 shell \u6761\u4EF6\u6BD4\u8F83\u56F0\u96BE\u3002\u4E3A\u6B64\u6211\u4EEC\u5236\u4F5C\u4E86\u7528\u4E8E\u5728 Windows/Linux x86/x64 \u73AF\u5883\u4E0B\u7684\u7528\u4E8E\u53CD\u5F39\u7684 shellcode\uFF0C\u5E76\u5236\u4F5C\u4E86\u63A5\u53E3\u652F\u6301\uFF0C\u4F60\u5728\u53EA\u9700\u8981\u62E5\u6709\u547D\u4EE4\u6267\u884C\u6743\u9650\u4E0B\u4FBF\u53EF\u4EE5\u81EA\u52A8\u5C06 shellcode \u5199\u5165\u5230\u76EE\u6807\u673A\u5668\u4EE5\u53CA\u6267\u884C\u53CD\u5F39 shell \u547D\u4EE4\u3002</p><p>Demo Poc\uFF1A<a href="https://github.com/knownsec/pocsuite3/blob/master/pocsuite3/pocs/thinkphp_rce2.py" target="_blank" rel="noreferrer">https://github.com/knownsec/pocsuite3/blob/master/pocsuite3/pocs/thinkphp_rce2.py</a></p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> generate_shellcode_list</span></span>
<span class="line"><span style="color:#A6ACCD;">_list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_shellcode_list</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">listener_ip</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">get_listener_ip</span><span style="color:#89DDFF;">(),</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">listener_port</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">get_listener_port</span><span style="color:#89DDFF;">(),</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">os_target</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">OS</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">LINUX</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">os_target_arch</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">OS_ARCH</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">X86</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5C06\u751F\u6210\u4E00\u957F\u4E32\u6267\u884C\u6307\u4EE4\uFF0C\u6267\u884C\u8FD9\u4E9B\u6307\u4EE4\u4FBF\u53EF\u4EE5\u53CD\u5F39\u51FA\u4E00\u4E2A shell\u3002</p><h2 id="http-\u670D\u52A1\u5185\u7F6E" tabindex="-1">HTTP \u670D\u52A1\u5185\u7F6E <a class="header-anchor" href="#http-\u670D\u52A1\u5185\u7F6E" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u4E00\u4E9B\u9700\u8981\u7B2C\u4E09\u65B9 HTTP \u670D\u52A1\u624D\u80FD\u9A8C\u8BC1\u7684\u6F0F\u6D1E\uFF0CPocsuite3 \u4E5F\u63D0\u4F9B\u5BF9\u5E94\u7684 API\uFF0C\u652F\u6301\u5728\u672C\u5730\u5F00\u542F\u4E00\u4E2A HTTP \u670D\u52A1\u65B9\u4FBF\u8FDB\u884C\u9A8C\u8BC1\u3002</p><p>\u53EF\u67E5\u770B\u6D4B\u8BD5\u7528\u4F8B\uFF1A<a href="https://github.com/knownsec/pocsuite3/blob/master/tests/test_httpserver.py" target="_blank" rel="noreferrer">https://github.com/knownsec/pocsuite3/blob/master/tests/test_httpserver.py</a></p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">If you have issues about development, please read:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">https://github.com/knownsec/pocsuite3/blob/master/docs/CODING.md</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">for more about information, plz visit https://pocsuite.org</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> SimpleHTTPRequestHandler</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Output</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> POCBase</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> register_poc</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> PHTTPServer</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyRequestHandler</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">SimpleHTTPRequestHandler</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">do_GET</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        path </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span></span>
<span class="line"><span style="color:#A6ACCD;">        status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">404</span></span>
<span class="line"><span style="color:#A6ACCD;">        count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        xxe_dtd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> path </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/xxe_dtd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">xxe_dtd</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_response</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">status</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Length</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end_headers</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">wfile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">xxe_dtd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">encode</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_response</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">status</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Length</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end_headers</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">do_HEAD</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">404</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">endswith</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">jar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_response</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">status</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send_header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Length</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end_headers</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoPOC</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">POCBase</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    vulID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># ssvid</span></span>
<span class="line"><span style="color:#A6ACCD;">    version </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    author </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">seebug</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    vulDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018-03-08</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    createDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018-04-12</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    updateDate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2018-04-13</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    references </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    appPowerLink </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    appName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    appVersion </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    vulType </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    desc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    samples </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    install_requires </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_verify</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">&#39;&#39;&#39;</span><span style="color:#676E95;font-style:italic;">Simple http server demo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           default params:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           		bind_ip=&#39;0.0.0.0&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           		bind_port=666</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           		is_ipv6=False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           		use_https=False</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           		certfile=os.path.join(paths.POCSUITE_DATA_PATH, &#39;cacert.pem&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">                requestHandler=BaseRequestHandler</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">           You can write your own handler, default list current directory</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        </span><span style="color:#89DDFF;font-style:italic;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        httpd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">PHTTPServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">requestHandler</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">MyRequestHandler</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        httpd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># Write your code</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse_output</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">result</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse_output</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        output </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Output</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            output</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">result</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            output</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">target is not vulnerable</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    _attack </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> _verify</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">register_poc</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">DemoPOC</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,14),t=[o];function e(c,r,D,F,y,A){return a(),n("div",null,t)}var d=s(p,[["render",e]]);export{C as __pageData,d as default};
