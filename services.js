// services.js
const services = [
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
  {
    id: "jalCard",
    name: "JALカード",
    unit: "マイル",
    formula: (value) => Math.floor(value / 2000) * 5
  },
  {
    id: "jalMall",
    name: "JAL MALL",
    unit: "マイル",
    formula: (value) => Math.floor(value / 100) * 1
  },
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
    name: "JAL NEOBANK（半期ボーナス）",
    unit: "回",
    formula: (value) => value * 1
  },
  {
    id: "luxuryCard",
    name: "JAL Luxury Card（基本）",
    unit: "マイル",
    formula: (value) => Math.floor(value / 2500) * 5
  },
  {
    id: "luxuryCardBonus",
    name: "JAL Luxury Card（ボーナス）",
    unit: "年間利用額（円）",
    formula: (value) => value >= 10000000 ? 75 : 0
  },
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
  // 🔜 他のサービスも同じように追加していける
];
