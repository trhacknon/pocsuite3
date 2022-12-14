# version 2.0.1
----------------
* fix words matcher expression execution #333, thanks @soapffz
* fix catch binascii ValueError Exception #334, thanks @izj007
* improve template robustness
* support digest_username and digest_password
* support negative matchers

# version 2.0.0
----------------
* yaml poc support, compatible with nuclei
* fix httpserver module hangs on macos platform
* auto correction of url protocol based on status code

# version 1.9.11
----------------
* support customize poc protocol and default port #321
* -p option support optional protocol field, [proto:]port #323
* add -s option to skip target default port #323
* poc-console optimization
* some bug fixes & improvements

# version 1.9.10
----------------
fix different python versions have different behaviors on ipaddress library #319

# version 1.9.9
----------------
* auto correct url based on poc's protocol attribute #316
* fix Colorizing doesn't work on Windows with poc-console #318
* trail slash at the end of url #314

# version 1.9.8
----------------
* support full PoC search by regex keyword #312
* set default value for PoC in POCBase #312
* add bind/reverse shell payload #311
* fix fofa query over multiple pages #310

# version 1.9.7
----------------
* improve encoding compatibility #305
* obfuscate REVERSE_PAYLOAD to evade windows defender #306
* improve --ppt

# version 1.9.6
----------------
* support -o parameter, save the result in json lines format
* optimize timeout for cyberspace search engine plugins
* optimize the handling of the url protocol
* docs update

# version 1.9.5
----------------
* refactor --ppt, optimize mosaic for url
* optimize poc template
* optimize pocsuite command default prompt message
* adjust the default timeout to 10 seconds
* adjust the default number of threads to 150
* target url support cidr, user can use -p provide additional ports
* support local mode, local mode do not need any targets, e.g. LPE
* bug fixes

# version 1.9.4
-----------------
* support poc template generate
* support custom interactsh server
* Switch the authentication method of ZoomEye and CEYE to API-KEY
* support honeypot detect
* support http/https protocol autocorrect
* refactor --update
* support version check

# version 1.9.3
-----------------
* add support for qianxin hunter cyberspace search engine
* support self.rhost & self.rport in POCBase

# version 1.9.2
-----------------
* Improved shell mode

# version 1.9.1
-----------------
* fix #272, #274
* the hook support of requests can be used alone
* refactor shell mode, add handle for keyboard interrupt

# version 1.9.0
-----------------
* Fix urllib3 issue with parsing URIs
* Prevent URL encoding

# version 1.8.12
-----------------
* update fofa api url #263

# version 1.8.11
-----------------
* fix windows log color issue #258

# version 1.8.10
-----------------
* fix #254
* fix urlparse fails with simple url
* use pycryptodomex instead of pycryptodome, fix #255

# version 1.8.9
-----------------
* fix user-agent bug #252

# version 1.8.8
-----------------
* rewrite multi module
* integrate with interactsh
* support filter poc by keyword

# version 1.8.7
-----------------
* fix bug
* optimize code style & docs
* delete the exe tool for compatibility with dfsg

# version 1.8.6
-----------------
* support encrypted shell (TLS) in shell mode
* fix #228

# version 1.8.5
-----------------
* support bind shell in shell mode
* fix #221

# version 1.8.4
-----------------
* update docs
* fix typo

# version 1.8.3
-----------------
* some improvements related to dependent

# version 1.8.2
-----------------
* fix finding a python module version gives error

# version 1.8.1
-----------------
* fix check_requires() can not handle dependent version correctly #208
* update docs

# version 1.8.0
-----------------
* fix the timeout problem in shell mode leads to confusing results
* made some improvements with network address related issues

# version 1.7.8
-----------------
* add option to display extra parameters of poc
* add more poc attribute to result dict
* allow custom module path in console mode
* fix some compatibility problems

# version 1.7.7
-----------------
* ??????--dork?????????poc??????dork??????????????????
* ??????Debian???????????????

# version 1.7.6
-----------------
* fixes #192

# version 1.7.5
-----------------
* ?????????????????????dork????????????base64?????? fixes #169 #173
* ??????target??????requests????????????bug fix #183

# version 1.7.4
-----------------
* ??????????????????poc??????????????????????????????????????? fixes #149
* ??????--pocs-path??????bug

# version 1.7.2
-----------------
* ??????powershell bash??????shell ??????????????????

# version 1.7.0
-----------------
* ??????`Python 3.9`???????????????
* console??????????????????????????????????????????pocuite3??????clear????????????

# version 1.6.5
----------------
* ??????http?????????????????????
* ??????html??????????????????
* ??????console?????????lport????????????
* shell??????????????????select???use??????shell

# version 1.6.4
----------------
* ??????Github Action????????????pypi

# version 1.6.0~1.6.3
---------------
* ????????????UA?????????
* ??????--ppt??????????????????
* ???poc???????????????????????????????????????
* ??????InMemoryWar
* ??????urllib3???`chunk_length`??????
* ?????????tag?????????????????????pypi

# version 1.5.9
---------------
* ?????????poc????????????????????? #95
* ???????????????poc

# version 1.5.8
---------------
* ??????shadon api??????
* ??????fofa api??????

# version 1.5.7
---------------
* ??????pyreadline????????????
* ????????????????????????

# version 1.5.6
---------------
* ???????????????????????????
* ??????seebug api??????
* ??????socks5????????????

# version 1.5.5
---------------
* fix #87

# version 1.5.4
---------------
* ????????????PoC?????????API
* ??????????????????

# version 1.5.3
---------------
* socket??????????????????????????????socket??????????????????????????????(`conf.origin_socks`)
* ??????requests???????????????None??????????????????

# version 1.5.2
---------------
* typo fix #84
* bugfix ?????????cookie?????????????????????
* bugfix ??????pocsuite3???????????????requests???????????????

# version 1.5.1
---------------
* ??????????????????poc???????????????

# version 1.5.0
---------------
* ??????timeout????????????
* pocsuite3.api ?????? `random_str`
* ??????update function

# version 1.4.9
---------------
* ??????requirement????????????bug
* ??????reverse ????????????

# version 1.4.8
---------------
* console???????????????ip?????????????????? `show ip` `set lhost 0`
* bugfix for ceye dns api

# version 1.4.7
---------------
* ??????console???????????????shell???????????????

# version 1.4.6
---------------
* ??????`-v`???????????????
* ??????????????????poc?????????????????????

# version 1.4.5
---------------
* update usage.md

# version 1.4.3
---------------
* ??????PPT?????????????????????????????????????????????*???

# version 1.4.2
---------------
* ??????console???????????????bug???https://github.com/knownsec/pocsuite3/pull/61

# version 1.4.1
---------------
* ?????????poc????????????conf.poc???????????????

# version 1.4.0
---------------
* ???????????????url???poc????????????(????????????)
* ??????`optparse`???`argparse`

# version 1.3.9
---------------
* ??????plugins??????????????????????????????
* ????????????pocs??????????????????????????????
* PoC??????`add_poc`????????????`fullname`????????????????????????poc??????
* ??????api????????????shell??????

# version 1.3.8
---------------
* add field,option for compatibility with zipoc

# version 1.3.7
---------------
* add poc-plugin to load poc from `pocs` directories.

# version 1.3.6
---------------
* Bugfix parameter `version`

# version 1.3.5
---------------
* Add parameter `-c` for load configuration from the configuration file
* Add parameter `--comparsion` for comparing comparing both of zoomeye and shodan
* Interface supports from zoomeye,shodan and censys

# version 1.3.4
---------------
Cross-platform shell code generation

# version 1.3.3
---------------
fix #37 pocsuite3\lib\core\revision.py

# version 1.3.2
---------------
* bugfix poc thinkphp_rce

# version 1.3.1
---------------
* add confluence poc
* fix pocs/drupalgeddon2
* CYGWIN compatibility
* bugfix revision.py `stdout_encode`

# version 1.3.0
---------------
* new feature: `_verify` `_attack` function can directly return bool, str, dict, etc.
* new plugin: file report
* bugfix get_option() not support int

# version 1.2.10
---------------
* bugfix interpreter_option OptDict

# version 1.2.9
---------------
* seebug poc friendly load reminder
* new feature:displayed results after user interruption
* POC specifies third-party module verification failure
* customize option iter func
* Built-in http server

# version 1.2.8
---------------
* support ceye token
* bugfix plugin from seebug
* refactoring ceye

# version 1.2.7
---------------
* bugfix hook_requests

# version 1.2.6
---------------
* bugfix seebug poc

# version 1.2.5
---------------
* bugfix socks proxy

# version 1.2.2
---------------
* bugfix site-packages poc-console issue
* poc-console support to load absolute path
* poc-console will ignore case when use `search`

# version 1.2.1
---------------
* bugfix auto update error
* bugfix console mode load poc error
* update pocsuite3 banner

# version 1.0
---------------
* Init publish
