const $ = id => document.getElementById(id);

const languages = [
  ["fa", "فارسی"], ["en", "English"], ["ar", "العربية"],
  ["es", "Español"], ["fr", "Français"], ["de", "Deutsch"],
  ["it", "Italiano"], ["pt", "Português"], ["ru", "Русский"],
  ["tr", "Türkçe"], ["zh-CN", "中文"], ["ja", "日本語"],
  ["ko", "한국어"], ["hi", "हिन्दी"], ["ur", "اردو"],
  ["az", "Azərbaycanca"], ["nl", "Nederlands"], ["pl", "Polski"],
  ["sv", "Svenska"], ["el", "Ελληνικά"], ["he", "עברית"],
  ["id", "Bahasa Indonesia"], ["th", "ไทย"], ["vi", "Tiếng Việt"],
  ["uk", "Українська"], ["bn", "বাংলা"], ["ro", "Română"],
  ["cs", "Čeština"], ["da", "Dansk"], ["fi", "Suomi"]
];

const groups = {
  "زبان‌های برنامه‌نویسی": [
    "Python", "JavaScript", "TypeScript", "Java", "C", "C++", "C#",
    "Go", "Rust", "Kotlin", "Swift", "Dart", "Ruby", "PHP", "Lua",
    "R", "MATLAB", "Perl", "Scala", "Haskell", "Elixir", "Erlang",
    "Julia", "Groovy", "Objective-C", "Visual Basic", "Fortran",
    "COBOL", "Pascal", "Delphi", "Assembly"
  ],
  "🌐 زبان‌های وب و نشانه‌گذاری": [
    "HTML", "CSS", "XML", "SVG", "JSON", "YAML", "Markdown",
    "SQL", "GraphQL"
  ],
  "🗄️ زبان‌های پایگاه‌داده / Query": [
    "SQL", "PL/SQL", "T-SQL", "DQL", "Cypher", "SPARQL",
    "MongoDB Query Language"
  ],
  "🤖 زبان‌های هوش مصنوعی و منطقی": [
    "Prolog", "Lisp", "Scheme", "Clojure", "Mercury", "Datalog"
  ],
  "🧠 زبان‌های ساخته‌شده و مصنوعی": [
    "Esperanto", "Lojban", "Toki Pona", "Interlingua", "Ithkuil",
    "Quenya", "Sindarin", "Klingon", "Dothraki"
  ],
  "🔐 زبان‌ها و کدهای رمزگونه": [
    "Binary", "Morse code", "Base64", "hexadecimal", "ROT13",
    "Caesar cipher", "Pigpen cipher", "ASCII", "Unicode", "Braille"
  ],
  "🧮 زبان‌های علمی و تخصصی": [
    "Wolfram Language", "MATLAB", "R", "Mathematica", "Maple", "Julia"
  ],
  "⚙️ زبان‌های سخت‌افزاری": [
    "Verilog", "SystemVerilog", "VHDL", "Chisel", "Bluespec"
  ],
  "🕹️ زبان‌ها/اسکریپت‌های مربوط به بازی": [
    "GDScript", "GML (GameMaker Language)", "Lua", "Verse",
    "AngelScript", "HLSL", "GLSL"
  ],
  "👽 زبان‌های خیالی": [
    "Klingon — Star Trek", "Dothraki — Game of Thrones",
    "High Valyrian — Game of Thrones", "Quenya — Tolkien",
    "Sindarin — Tolkien", "Na'vi — Avatar"
  ]
};

const descriptions = {
  "زبان‌های برنامه‌نویسی":
    "زبان‌هایی برای نوشتن دستورها، ساخت برنامه‌ها و حل مسائل با رایانه.",
  "🌐 زبان‌های وب و نشانه‌گذاری":
    "زبان‌ها و قالب‌هایی برای ساخت، نمایش و تبادل اطلاعات در وب.",
  "🗄️ زبان‌های پایگاه‌داده / Query":
    "زبان‌ها و دستورهایی برای جست‌وجو، پرس‌وجو و مدیریت داده‌ها.",
  "🤖 زبان‌های هوش مصنوعی و منطقی":
    "زبان‌هایی با کاربرد در منطق، استدلال، قواعد و مسائل هوش مصنوعی.",
  "🧠 زبان‌های ساخته‌شده و مصنوعی":
    "زبان‌هایی که انسان‌ها عمداً طراحی کرده‌اند؛ بعضی برای ارتباط و بعضی برای آزمایش یا هنر.",
  "🔐 زبان‌ها و کدهای رمزگونه":
    "روش‌هایی برای نمایش، تبدیل، کدگذاری یا رمزگذاری اطلاعات؛ همهٔ آن‌ها زبان طبیعی نیستند.",
  "🧮 زبان‌های علمی و تخصصی":
    "ابزارها و زبان‌هایی برای محاسبات علمی، ریاضی، تحلیل داده و مدل‌سازی.",
  "⚙️ زبان‌های سخت‌افزاری":
    "زبان‌هایی برای توصیف مدارها و طراحی یا شبیه‌سازی سخت‌افزار دیجیتال.",
  "🕹️ زبان‌ها/اسکریپت‌های مربوط به بازی":
    "زبان‌ها و ابزارهایی برای منطق بازی، گرافیک، شیدرها و ساخت بازی‌های رایانه‌ای.",
  "👽 زبان‌های خیالی":
    "زبان‌هایی که برای دنیاهای داستانی، فیلم‌ها، مجموعه‌ها و آثار تخیلی ساخته شده‌اند."
};

let currentMode = "builder";

function fillSelect(select, items, selected) {
  select.innerHTML = "";
  items.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  });
  if (selected) select.value = selected;
}

fillSelect($("targetLang"), languages, "fa");
fillSelect($("sourceLang"), languages, "en");

const categorySelect = $("category");
Object.keys(groups).forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
});

function updateLanguageList() {
  const category = categorySelect.value;
  $("language").innerHTML = "";

  groups[category].forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    $("language").appendChild(option);
  });
}

updateLanguageList();
categorySelect.addEventListener("change", updateLanguageList);

function setStatus(message) {
  $("status").textContent = message;
}

function setResult(message) {
  $("result").textContent = message;
}

document.querySelectorAll(".mode").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode").forEach(b =>
      b.classList.remove("active")
    );

    button.classList.add("active");
    currentMode = button.dataset.mode;

    const isTravel = currentMode === "travel";
    $("catalogControls").hidden = isTravel;
    $("travelControls").hidden = !isTravel;

    if (currentMode === "builder") {
      setStatus("Builderer: اطلاعات زبان انتخاب‌شده را به زبان مقصد ترجمه کن.");
    } else if (currentMode === "earth") {
      setStatus("Come back to earth: نام و توضیحات زبان را به زبان مقصد برگردان.");
    } else {
      setStatus("Let's travel: یک متن را از زبان مبدأ به زبان مقصد ترجمه کن.");
    }
  });
});

async function translateText(text, from, to) {
  if (!text.trim()) throw new Error("اول یک متن وارد کن.");
  if (text.length > 4500) {
    throw new Error("متن خیلی طولانی است. لطفاً آن را به بخش‌های کوچک‌تر تقسیم کن.");
  }

  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", text);
  url.searchParams.set("langpair", `${from}|${to}`);

  const response = await fetch(url.toString());
  if (!response.ok) throw new Error("ارتباط با سرویس ترجمه ناموفق بود.");

  const data = await response.json();

  if (data.responseStatus !== 200 || !data.responseData?.translatedText) {
    throw new Error(data.responseDetails || "ترجمه انجام نشد.");
  }

  return data.responseData.translatedText;
}

async function runTranslation(text, from, to, title = "") {
  setStatus("در حال ترجمه... لطفاً صبر کن.");
  setResult("");

  try {
    const translated = await translateText(text, from, to);
    setResult((title ? title + "\n\n" : "") + translated);
    setStatus("ترجمه انجام شد.");
  } catch (error) {
    setResult("خطا: " + error.message);
    setStatus("ترجمه انجام نشد.");
  }
}

$("translateInfo").addEventListener("click", async () => {
  const category = categorySelect.value;
  const name = $("language").value;
  const target = $("targetLang").value;

  if (!name) {
    setStatus("ابتدا یک زبان انتخاب کن.");
    return;
  }

  const description = descriptions[category] || "توضیحات این دسته موجود نیست.";
  const text =
    `Language name: ${name}\n` +
    `Category: ${category}\n` +
    `Description: ${description}`;

  await runTranslation(text, "en", target, "نام اصلی: " + name);
});

$("translateText").addEventListener("click", async () => {
  const from = $("sourceLang").value;
  const to = $("targetLang").value;
  const text = $("travelText").value;

  if (from === to) {
    setResult(text);
    setStatus("زبان مبدأ و مقصد یکسان هستند.");
    return;
  }

  await runTranslation(text, from, to);
});

$("swap").addEventListener("click", () => {
  const source = $("sourceLang");
  const target = $("targetLang");
  const oldSource = source.value;

  source.value = target.value;

  if ([...target.options].some(option => option.value === oldSource)) {
    target.value = oldSource;
  }

  setStatus("زبان‌های مبدأ و مقصد جابه‌جا شدند.");
});

$("copy").addEventListener("click", async () => {
  const text = $("result").textContent;

  try {
    await navigator.clipboard.writeText(text);
    setStatus("نتیجه کپی شد.");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();

    try {
      document.execCommand("copy");
      setStatus("نتیجه کپی شد.");
    } catch {
      setStatus("کپی خودکار ممکن نشد؛ متن را دستی انتخاب کن.");
    }

    area.remove();
  }
});
