# Grunt
더 오래되었다.

# Gulp
반복작업을 자동화해서 대신 수행해 주는 도구입니다.

npm i -g gulp

프로젝트마다 gulp 디펜던시 설치가 필요합니다.

npm i gulp


# .gitignore

https://www.gitignore.io/


# Babel

npm i --save-dev babel-preset-es2015

# package.json

npm init -y

npm i gulp [--save]

```
"dependencies": {
  "gulp": "^3.9.1"
}
```

npm i --save-dev babel-preset-es2015

```
"devDependencies": {
  "babel-preset-es2015": "^6.24.1"
},
```

# .babelrc

{"presets":["es2015"]}

# 2.3.1 바벨을 걸프와 함께 사용하기

es6와 public/es6에 있는 코드를 ES5로 변환해서 
dist와 public/dist에 저장합니다.

npm i --save-dev gulp-babel


```
E:\java\git\work\p62>gulp
module.js:549
    throw err;
    ^

Error: Cannot find module '@babel/core'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (E:\java\git\work\p62\node_modules\gulp-babel\index.js:7:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
```

```
E:\java\git\work\p62>npm i --save-dev @babel/core
npm WARN p62@1.0.0 No repository field.

+ @babel/core@7.0.0
added 32 packages in 12.995s

E:\java\git\work\p62>gulp
[18:02:28] Using gulpfile E:\java\git\work\p62\gulpfile.js
[18:02:28] Starting 'default'...
[18:02:28] Finished 'default' after 14 ms
```

하지만 트랜스파일링 된 결과파일이 만들어 지지 않는다.

```
{
  "name": "p62",
  "version": "1.0.0",
  "description": "더 오래되었다.",
  "main": "gulpfile.js",
  "dependencies": {
    "gulp": "^3.9.1"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "gulp-babel": "^8.0.0"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

package.json 파일을 원본 소스를 구해서 바꿔본다.

```
{
  "name": "lj3e-ch02",
  "version": "1.0.0",
  "description": "Chapter 2 from Learning JavaScript, 3rd Edition (O'Reilly Media).",
  "main": "dist/test.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Ethan Brown <e@zepln.com>",
  "license": "MIT OR GPL-3.0",
  "devDependencies": {
    "babel-preset-es2015": "^6.13.2",
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2",
    "gulp-eslint": "^3.0.1"
  }
}
```

```
E:\java\git\work\p62>gulp
[18:09:29] Using gulpfile E:\java\git\work\p62\gulpfile.js
[18:09:29] Starting 'default'...
[18:09:29] Finished 'default' after 14 ms
```

성공적으로 dist 폴더에 트랜스파일링이 된 
결과 파일을 얻었다.


