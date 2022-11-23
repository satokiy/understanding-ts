## understanding-ts
- udemy講座の学習リポジトリ. 
- セクションごとに成果物が異なるので、npm workspaceを用いてモノリポで学習ができるように作成していく

## npm packageのインストール先ルール
- 本番用のパッケージを全体にインストールしない
- 開発用のパッケージは基本はグローバルにインストールするが、都度判断する
  - @typesパッケージ等は各セクションごとでもOK、など
  - eslint, prettierなどはグローバルに用いる

