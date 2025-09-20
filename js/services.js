// js/services.js
const services = [
  // ✈️ フライト関連
  {
    id: "domestic",
    name: "JAL国内線搭乗回数",
    unit: "回",
    formula: (value) => value * 5
  },
  {
    id: "intl",
    name: "JAL国際線搭乗",
    unit: "区間マイル",
    formula: (value) => Math.floor(value / 1000) * 5
  },

  // 💳 カード / 決済
  {
    id: "jalCard",
    name: "JALカード獲得マイル数",
    unit: "マイル",
    formula: (value) => Math.floor(value / 2000) * 5
  },
  {
    id: "jalPay",
    name: "JAL PAY獲得マイル数",
    unit: "マイル",
    formula: (value) => Math.floor(value / 500) * 1
  },
  {
    id: "jalMall",
    name: "JAL MALL獲得マイル数",
    unit: "マイル",
    formula: (value) => Math.floor(value / 100) * 1
  },

  // 🏃‍♂️ Wellness
  {
    id: "wellness",
    name: "JAL Wellness＆Travel",
    unit: "月",
    formula: (value) => value * 1
  },

  // ⚡ インフラ
  {
    id: "denki",
    name: "JALでんき",
    unit: "月",
    formula: (value) => value >= 1 ? 1 : 0
  },
  {
    id: "hikari",
    name: "JAL光",
    unit: "月",
    formula: (value) => value >= 1 ? 1 : 0
  },
  {
    id: "mobile",
    name: "JALモバイル利用月数",
    unit: "月",
    formula: (value) => value >= 1 ? 1 : 0
  },

  // 🛍 サービス利用
  {
    id: "inFlight",
    name: "JAL機内販売",
    unit: "マイル",
    formula: (value) => Math.floor(value / 100) * 1
  },
  {
    id: "tourDomestic",
    name: "JALパックツアー国内利用回数",
    unit: "回",
    formula: (value) => value * 3
  },
  {
    id: "tourInternational",
    name: "JALパックツアー海外利用回数",
    unit: "回",
    formula: (value) => value * 10
  },
  {
    id: "payExchange",
    name: "JAL PAY両替獲得マイル",
    unit: "マイル",
    formula: (value) => Math.floor(value / 300) * 1
  },
  {
    id: "abc",
    name: "JAL ABC獲得マイル",
    unit: "マイル",
    formula: (value) => Math.floor(value / 200) * 1
  },
  {
    id: "kariteco",
    name: "JALでkariteco",
    unit: "利用有無",
    formula: (value) => value >= 1 ? 1 : 0
  },
  {
    id: "mileagePark",
    name: "JALマイレージパーク",
    unit: "マイル",
    formula: (value) => Math.floor(value / 100) * 1
  },

  // 🏦 NEOBANK
  {
    id: "neobankYen",
    name: "JAL NEOBANK（円普通預金）",
    unit: "積算回数",
    formula: (value, premium=false) => Math.floor(value/6) * (premium ? 3 : 1)
  },
  {
    id: "neobankFx",
    name: "JAL NEOBANK（外貨普通預金）",
    unit: "積算回数",
    formula: (value, premium=false) => Math.floor(value/6) * (premium ? 6 : 2)
  },
  {
    id: "neobankBonus",
    name: "JAL NEOBANKプレミアム（半期ボーナスマイル）",
    unit: "回",
    formula: (value) => value * 1
  },

  // 💳 Luxury Card
  {
    id: "luxuryCard",
    name: "JAL Luxury Card（基本）",
    unit: "マイル",
    formula: (value) => Math.floor(value / 2500) * 5
  },
  {
    id: "luxuryCardBonus",
    name: "JAL Luxury Card（年間ボーナス）",
    unit: "年間利用額（円）",
    formula: (value) => value >= 10000000 ? 75 : 0
  },

  // 📈 株主優待
  {
    id: "stock",
    name: "JAL株主",
    unit: "株数",
    formula: (value) => {
      if (value >= 7000) return 50;
      if (value >= 6000) return 45;
      if (value >= 5000) return 40;
      if (value >= 4000) return 35;
      if (value >= 3000) return 30;
      if (value >= 2000) return 25;
      if (value >= 1000) return 20;
      if (value >= 500) return 10;
      if (value >= 100) return 2;
      return 0;
    }
  }
];
