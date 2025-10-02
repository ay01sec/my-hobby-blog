// src/types/gtag.d.ts
export {};

declare global {
  // window.dataLayer を認識させる
  interface Window {
    dataLayer: any[];
  }

  // グローバル dataLayer 変数（window 経由でない参照にも対応）
  var dataLayer: any[];

  // gtag の呼び出しを許可（gtag('js', new Date()) など）
  function gtag(...args: any[]): void;
}
