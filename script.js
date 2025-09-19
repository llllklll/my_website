let scores = { 
  "كرمنا": 0, 
  "طموحنا": 0, 
  "فزعتنا": 0, 
  "أصالتنا": 0, 
  "جودنا": 0, 
  "رؤيتنا": 0 
};

let totalAnswers = 0;

// دالة عند اختيار إجابة
function answer(category, qNum) {
  if (scores.hasOwnProperty(category)) {
    scores[category]++;
  }
  totalAnswers++;

  // إخفاء السؤال الحالي
  const current = document.getElementById("q" + qNum);
  if (current) current.classList.remove("active");

  // عرض السؤال التالي أو النتيجة
  const next = document.getElementById("q" + (qNum + 1));
  if (next) {
    next.classList.add("active");
  } else {
    showResult();
  }
}

// دالة عرض النتيجة
function showResult() {
  const resultDiv = document.getElementById("result");
  if (resultDiv) resultDiv.classList.add("active");

  const scoresDiv = document.getElementById("scores");
  if (scoresDiv) scoresDiv.innerHTML = "";

  for (let cat in scores) {
  const percent = totalAnswers === 0 ? 0 : Math.round((scores[cat] / totalAnswers) * 100);
  scoresDiv.innerHTML += `<p class="result">عزنا بـ${cat}: ${percent}%</p>`;
}

}