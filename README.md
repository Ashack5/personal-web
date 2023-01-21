# personal-web

## Start development

- next.js dev server

```bash
$ npm install
$ npm run dev
# Please Access: http://localhost:3000/examples/ssr/hello-world
```

- storybook

```bash
$ npm run start:sb
# Please Access: http://localhost:6006
```

## Commit message

See: https://www.conventionalcommits.org/ja/v1.0.0/#specification

### Labels

- `build`    ビルド系タスクに影響のある新機能追加，編集 (example scopes: next.config, webpack, swc, npm)
- `ci`       CI 系の設定ファイルの追加，修正 (example scopes: github-acitons, Circle, BrowserStack, renovate, reg-suit)
- `feat`     ユーザーのための機能関係
- `fix`      バグ修正（開発環境周りのバグ含む）
- `docs`     ドキュメントの修正
- `perf`     パフォーマンス改善のコード （このラベルを使うときは，テストコードの代わりにベンチマークを含める）
- `refactor` 手動によるリファクタリング, prettier や eslint の自動修正は style を使う
- `style`    コーディングスタイルの修正，prettier, eslint の自動修正 **注意: CSS のデザイン修正は feat**
- `test`     テストコードの追加，編集
- `chore`    その他
