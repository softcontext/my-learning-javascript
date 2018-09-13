
npm install 설치대상프로그램 -옵션
-g: 설치대상프로그램을 전역적으로 설치하라. 
나중에 콘솔에 해당 프로그램을 사용할 수 있게 된다.

```
npm install http-server -g

npm install -g http-server

npm i -g http-server
```

```
E:\java\git\work>npm i -g http-server
C:\Users\co\AppData\Roaming\npm\hs -> C:\Users\co\AppData\Roaming\npm\node_modules\http-server\bin\http-server
C:\Users\co\AppData\Roaming\npm\http-server -> C:\Users\co\AppData\Roaming\npm\node_modules\http-server\bin\http-server
+ http-server@0.11.1
added 2 packages and updated 6 packages in 9.93s
```

```
npm init

npm init -y
```

```
E:\java\git\work\p60>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (p60)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: SONG Seokwon
license: (ISC) MIT
About to write to E:\java\git\work\p60\package.json:

{
  "name": "p60",
  "version": "1.0.0",
  "description": "npm install 설치대상프로그램 -옵션\r -g: 설치대상프로그램을 전역적으로 설치하라. \r 나중에  콘솔에 해당 프로그램을 사용할 수 있게 된다.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "SONG Seokwon",
  "license": "MIT"
}


Is this ok? (yes) y
```

package.json 
---------------------------
이 파일은 프로젝트 설명,버전, 저자, 라이센스,
원격저장소, 단축명령, 디펜던시 정보를 관리하는 파일입니다.
노드 기반의 프로젝트에서 주로 사용합니다.


```
npm i underscore
```

-g 옵션을 안 붙였으므로 컴퓨터 당 하나의 설치대상 
프로그램을 설치하는 것이 아니라 커서가 위치한 폴더 밑으로
해당 프로그램을 설치합니다.
결국 프로젝트 당 하나를 설치하는 것이며 자동으로
node_modules 폴더밑으로 설치가 됩니다.

```
E:\java\git\work\p60>npm i underscore
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN p60@1.0.0 No repository field.

+ underscore@1.9.1
added 1 package in 1.195s
```

package.json 파일에 다음 내용이 추가됩니다.
```
"dependencies": {
  "underscore": "^1.9.1"
}
```





