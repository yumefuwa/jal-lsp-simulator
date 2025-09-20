// 最小：2サービスだけ（動作確認用）
const services = [
  { id: "domestic", name: "JAL国内線搭乗", unit: "回", formula: v => v * 5 },
  { id: "intl",     name: "JAL国際線搭乗", unit: "区間マイル", formula: v => Math.floor(v/1000)*5 },
];
