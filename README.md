# 療育マップ（千代田区）

児童発達支援・放課後等デイサービスの施設を地図にまとめたサイトです。

- ピンをタップ → 支援内容の概要
- 「公式サイトを見る」 → 各施設のHPへ
- 上部のボタンでサービスの種類を絞り込み、右下のボタンで一覧表示

## ファイル

| ファイル | 中身 |
|---|---|
| `index.html` | 画面（地図・カード・一覧） |
| `facilities.js` | 施設データ。**施設の追加・修正はここだけ** |

## 公開方法（GitHub Pages・無料）

1. GitHubでアカウントを作り、新しいリポジトリ（例: `ryoiku-map`）を Public で作成
2. 「Add file → Upload files」から `index.html` と `facilities.js` をアップロード
3. Settings → Pages → Branch を `main` / `/(root)` にして Save
4. 数分後に `https://<ユーザー名>.github.io/ryoiku-map/` で公開されます

Netlify Drop（https://app.netlify.com/drop）にフォルダをドラッグするだけでも公開できます。

## 施設の追加

`facilities.js` の配列に1件追加します。緯度経度は国土地理院の住所検索で調べられます:
`https://msearch.gsi.go.jp/address-search/AddressSearch?q=東京都千代田区○○1-2-3`
の結果の `coordinates` が `[経度, 緯度]` です。

```js
{
  name: "施設名",
  services: ["jihatsu", "houday"],   // jihatsu=児童発達支援 / houday=放課後等デイ / houmon=訪問型
  address: "千代田区…",
  tel: "03-xxxx-xxxx",
  lat: 35.69, lng: 139.76,
  age: "未就学児",
  tags: ["個別", "ABA"],
  summary: "支援内容の概要（80字程度）",
  url: "https://..."
},
```

## データの出典

- 施設一覧: 千代田区「児童福祉法による障害児通所支援サービス」（2025年9月8日更新）
- 位置: 国土地理院 住所検索API
- 概要: 各施設公式サイトの記載を要約（2026年9月確認）
- 地図: 国土地理院 淡色地図 / Leaflet

公開前に掲載施設へ一声かけておくと、内容の誤りや掲載可否を確認できて安心です。
