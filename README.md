# Project setup
必要なライブラリをインストール
```
yarn 
```

scssのビルド
```
yarn run build
```

scssのビルド + watch 
```
yarn run build.watch
```

# Directory structure
## root
```
root/   
├ notes  
├ src  
├ .gitignore   
├ index.html  
├ main.css  
├ package-lock.json  
├ package.json  
├ webpack.config.js  
└ yarn-lock  
```

## src
```
src   
 ├ assets  
 └ scss  
    ├ common      :プロジェクトに関係する、ベースとなるコード。reset, variablesなど。   
    ├ components  :コンポーネント。  
    ├ parts       :汎用性の高いコード。headingなど。  
    └ main.scss  
```
