// js/services.js
const services = [
  // ✈️ フライト関連
  {
    id: "domestic",
    name: "JAL国内線搭乗",
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
    name: "JALカード",
    unit: "マイル",
    formula: (value) => Math.floor(value / 2000) * 5
  },
  {
    id: "jalPay",
    name: "JAL PAY",
    unit: "マイル",
    formula: (value) => Math.floor(value / 500) * 1
  },
  {
    id: "jalMall",
    name: "JAL MALL",
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
    unit: "利用有無",
    formula: (value) => value >= 1 ? 1 : 0
  },
  {
    id: "hikari",
    name: "JAL光",
    unit: "利用有無",
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
    name: "JALパックツアー国内",
    unit: "回",
    formula: (value) => value * 1
  },
  {
    id: "tourInternational",
    name: "JALパックツアー海外",
    unit: "回",
    formula: (value) => value * 3
  },
  {
    id: "furusato",
    name: "JALふるさと納税",
    unit: "円",
    formula: (value) => Math.floor(value / 50000) * 1
  },
  {
    id: "payExchange",
    name: "JAL PAY両替",
    unit: "マイル",
    formula: (value) => Math.floor(value / 300) * 1
  },
  {
    id: "abc",
    name: "JAL ABC",
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

  // 🏠 住宅ローン・資産
  {
    id: "loan",
    name: "JAL住宅ローン",
    unit: "融資実行",
    formula: (value) => value >= 1 ? 20 : 0
  },
  {
    id: "investment",
    name: "JALの資産運用（口座開設）",
    unit: "口座数",
    formula: (value) => value * 1
  },
  {
    id: "etravel",
    name: "JAL e旅計画",
    unit: "契約口数",
    formula: (value) => value * 1
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
