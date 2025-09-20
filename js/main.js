document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return console.error("app 要素が見つかりません");

  // タイトル
  const title = document.createElement("h2");
  title.textContent = "JALライフステータスポイント シミュレーター";
  app.appendChild(title);

  // フォーム生成
  const form = document.createElement("form");
  form.className = "mt-4";

  services.forEach(s => {
    const group = document.createElement("div");
    group.className = "mb-3";

    const label = document.createElement("label");
    label.className = "form-label";
    label.setAttribute("for", s.id);
    label.textContent = s.name;

    const input = document.createElement("input");
    input.type = "number";
    input.id = s.id;
    input.className = "form-control";
    input.min = "0";
    input.value = "";

    group.appendChild(label);
    group.appendChild(input);
    form.appendChild(group);
  });

  const button = document.createElement("button");
  button.type = "submit";
  button.className = "btn btn-primary";
  button.textContent = "計算する";
  form.appendChild(button);

  const result = document.createElement("div");
  result.id = "result";
  result.className = "mt-5";

  form.addEventListener("submit", e => {
    e.preventDefault();
    calc();
  });

  app.appendChild(form);
  app.appendChild(result);
});

// 計算処理（同じ）
function calc() {
  let total = 0;
  let details = [];

  services.forEach(s => {
    const val = Number(document.getElementById(s.id).value) || 0;
    const pts = s.formula(val);
    total += pts;

    if (val > 0) {
      details.push({
        name: s.name,
        input: `${val} ${s.unit}`,
        points: pts
      });
    }
  });

  const years = total > 0 ? (1500 / total).toFixed(1) : "∞";
  const progress = Math.min((total / 1500) * 100, 100);

  let html = `
    <div class="alert alert-info">
      <h4 class="alert-heading">結果</h4>
      <p>年間獲得ポイント: <strong>${total}</strong> pt</p>
      <p>1500pt到達まで: <strong>${years}</strong> 年</p>
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width:${progress}%">
          ${progress.toFixed(1)}%
        </div>
      </div>
    </div>
  `;

  if (details.length > 0) {
    html += `
      <h5 class="mt-4">積算内訳</h5>
      <table class="table table-striped">
        <thead>
          <tr><th>サービス</th><th>入力値</th><th>加算ポイント</th></tr>
        </thead>
        <tbody>
          ${details.map(d => `
            <tr>
              <td>${d.name}</td>
              <td>${d.input}</td>
              <td><strong>${d.points}</strong> pt</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  document.getElementById("result").innerHTML = html;
}
