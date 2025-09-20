function calc(){
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

  // メイン結果
  let html = `
    <div class="alert alert-info mt-4">
      <h4 class="alert-heading">結果</h4>
      <p>年間獲得ポイント: <strong>${total}</strong> pt</p>
      <p>1500pt到達まで: <strong>${years}</strong> 年</p>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width:${progress}%">
          ${progress.toFixed(1)}%
        </div>
      </div>
    </div>
  `;

  // 積算根拠（詳細リスト）
  if (details.length > 0) {
    html += `
      <h5 class="mt-4">積算内訳</h5>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>サービス</th>
            <th>入力値</th>
            <th>加算ポイント</th>
          </tr>
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
