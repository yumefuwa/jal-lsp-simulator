function renderForm() {
  const form = document.getElementById("simForm");
  form.className = "form-grid";

  form.innerHTML = services.map(s => `
    <div class="card">
      <label>${s.name} (${s.unit})</label>
      <input type="number" id="${s.id}" value="0" min="0" />
    </div>
  `).join("") + `<button type="button" class="calc-btn" onclick="calc()">計算する</button>`;
}

function calc(){
  let total = 0;
  services.forEach(s => {
    const val = Number(document.getElementById(s.id).value) || 0;
    total += s.formula(val);
  });

  const years = total > 0 ? (1500 / total).toFixed(1) : "∞";
  const progress = Math.min((total / 1500) * 100, 100);

  document.getElementById("result").innerHTML = `
    <p>年間獲得ポイント: <strong>${total}</strong> pt</p>
    <p>1500pt到達まで: <strong>${years}</strong> 年</p>
    <div class="progress">
      <div class="progress-bar" style="width:${progress}%"></div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderForm);
