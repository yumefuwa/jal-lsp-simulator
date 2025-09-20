function renderForm() {
  const form = document.getElementById("simForm");
  form.innerHTML = services.map(s => `
    <label>${s.name} (${s.unit}): 
      <input type="number" id="${s.id}" value="0" />
    </label><br />
  `).join("") + `<button type="button" onclick="calc()">計算する</button>`;
}

function calc() {
  let total = 0;
  services.forEach(s => {
    const val = Number(document.getElementById(s.id).value) || 0;
    total += s.formula(val);
  });
  const years = total > 0 ? (1500/total).toFixed(1) : "∞";
  document.getElementById("result").innerHTML =
    `<p>年間獲得ポイント: <strong>${total}</strong> pt</p>
     <p>1500pt到達まで: <strong>${years}</strong> 年</p>`;
}

document.addEventListener("DOMContentLoaded", renderForm);
