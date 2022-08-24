import{_ as s,j as n,g as a,H as l}from"./chunks/framework.8815fd6f.js";const C=JSON.parse('{"title":"PoC Writing Notice","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/poc-write-notice.md","lastUpdated":1658474088000}'),o={name:"en/guide/poc-write-notice.md"},p=l(`<h1 id="poc-writing-notice" tabindex="-1">PoC Writing Notice <a class="header-anchor" href="#poc-writing-notice" aria-hidden="true">#</a></h1><ol><li>When writing a PoC, try not to use third-party modules. If it is unavoidable, please fill in the <code>install_requires</code> field carefully, and fill in the format reference: <a href="./poc-specification.html">PoC Third-party Module Dependency</a></li><li>When writing a PoC, try to use the methods provided by the API that Pocsuite3 has encapsulated, so as to avoid reinventing the wheel yourself. For some general methods, you can add them to the API. For details, refer to <a href="./poc-api.html">&quot;General API List&quot;</a> .</li><li>If the PoC needs to include remote files, etc., use Pocsuite3 remote files. For details, please refer to <a href="./poc-remote-file.html">&quot;Pocsuite3 Remote File&quot;</a>. If the corresponding files are missing, A PR can be submitted on GitHub.</li><li>When writing PoC, try not to require input parameters as much as possible, so that the customization is too high, which is not conducive to the batch scheduling execution of PoC.</li><li>For the convenience of PoC management, please fill in the PoC information field carefully.</li><li>In order to prevent false positives and prevent keywords being detected by WAF, etc., it is required to output a random string (you can call the <code>random_str</code> method in the API) when the verification result is judged, instead of using a constant string.</li></ol><p>for example:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">When detecting SQL injection</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    token </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">random_str</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    payload </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select md5(%s)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> token</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> hashlib</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">md5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> token</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">hexdigest</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">URL</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">When detecting XSS vulnerabilities</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Refer to https://paper.seebug.org/1119/</span></span>
<span class="line"><span style="color:#A6ACCD;">    token </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">random_str</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    payload </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alert(&quot;%s&quot;)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> token</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> payload </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">URL</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Check </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> PHP file upload was successful</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    token </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">random_str</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    payload </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;?php echo md5(&quot;%s&quot;);unlink(__FILE__);?&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> token</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> hashlib</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">md5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> token</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">hexdigest</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">URL</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url</span></span>
<span class="line"></span></code></pre></div><ol start="7"><li>For arbitrary file reading vulnerability, If you don&#39;t know the filepath to read, you can read the system file for verification, and you need to write two versions, Windows version and Linux version. example:</li></ol><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/etc/passwd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/windows/win.ini</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">    res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_arbitrary_file_read</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:/bin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[fonts]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">URL</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">url</span></span>
<span class="line"><span style="color:#A6ACCD;">        result</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VerifyInfo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decode</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> self</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse_output</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">result</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ol start="8"><li>In verify mode, the uploaded files must be deleted.</li><li>After the PoC is written, be sure to test it. The test rules are: 5 websites that are not affected by the vulnerability, to ensure that the PoC verification is unsuccessful; 5 websites that are affected by the vulnerability, to ensure that the PoC verification is successful</li></ol>`,7),e=[p];function t(r,c,D,F,y,i){return a(),n("div",null,e)}var d=s(o,[["render",t]]);export{C as __pageData,d as default};