# 專案名稱
骰寶遊戲 (Dice Game)

> 這是一個 Side Project

## 專案簡介
線上骰寶遊戲系統，採用 Ruby on Rails 作為後端 API 框架，搭配 React + Redux 建構前端介面，實作完整的遊戲流程與下注機制。

此為個人 Side Project，旨在展現 Ruby on Rails 開發風格與程式碼撰寫能力，同時練習前端版面設計與切版技術。

## 遊戲功能
- 擲骰子遊戲
- 下注系統
- 即時結算
- 遊戲紀錄查詢

## 專案架構
- **後端**: Ruby on Rails API
- **前端**: React + Redux 狀態管理
- **資料庫**: MySQL
- **建置工具**: Vite

## 螢幕截圖
（待補充）

## 執行專案
安裝後端相依套件：`bundle install`
建立資料庫：`rails db:create` `rails db:migrate`
安裝前端相依套件：`yarn install`
啟動後端伺服器：`rails server`
啟動前端開發伺服器：`yarn start`

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 即可存取應用程式。

## 部署
設定伺服器資訊：在 `config/deploy/production.rb` 中設定伺服器資訊。
部署到伺服器：`cap production deploy`

## 使用的語言與函式庫版本
- **Ruby**: 3.0.2
- **Rails**: 6.1.4
- **Node.js**: 14.17.6
- **Yarn**: 1.22.11
- **NPM**: 6.14.15
- **React**: 17.0.2
- **Redux**: 4.1.0
- **Bundler**: 2.2.22
- **Capistrano**: 3.16.0
- **Puma**: 5.3.2

## 技術棧
Ruby on Rails, React, Redux, Yarn, Bundler, Capistrano

## 聯絡資訊
如有任何問題，請聯絡專案擁有者：[wchampionjohn@gmail.com](mailto:wchampionjohn@gmail.com)
