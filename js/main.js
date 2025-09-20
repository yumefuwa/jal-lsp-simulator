console.log("main.js 読み込みOK");

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

  // 結果カード
  let html = `
    <div class="alert alert-info mb-4">
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

  // 積算内訳はカードの外に独立
  if (details.length > 0) {
    html += `
      <div class="card mt-4">
        <div class="card-header bg-danger text-white fw-bold">
          積算内訳
        </div>
        <div class="card-body p-0">
          <table class="table table-striped mb-0">
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
        </div>
      </div>
    `;
  }

  document.getElementById("result").innerHTML = html;
}
