# Pull Requestのお作法
- コメントは、md記法で書く
- プロダクトに配属されたら、ブランチとプルリクは基本的にチケットベースで作成する。修正箇所が多い場合は細かく分ける。
- レビューしてくれる方が、修正後の見え方をコードを落として確認する手間を省くため、スクショを添付するとベター

# git commands
```
//ローカルブランチをリモートにpush
git push -u origin ブランチ名

//ローカルブランチ名変更
git branch -m 変更前の名前 変更後の名前

//ローカルブランチ削除
git branch --delete [ブランチ名]
git branch -d [ブランチ名]

//リモートブランチ削除
git push origin :branch_name
```
