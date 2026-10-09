"use strict";

/* Language Travel - script.js */

const $ = id => document.getElementById(id);

const countryLanguages = [
  ["fa", "فارسی"], ["en", "English"], ["ar", "العربية"],
  ["es", "Español"], ["fr", "Français"], ["de", "Deutsch"],
  ["it", "Italiano"], ["pt", "Português"], ["ru", "Русский"],
  ["tr", "Türkçe"], ["zh-CN", "中文 (简体)"], ["zh-TW", "中文 (繁體)"],
  ["ja", "日本語"], ["ko", "한국어"], ["hi", "हिन्दी"],
  ["ur", "اردو"], ["az", "Azərbaycanca"], ["nl", "Nederlands"],
  ["pl", "Polski"], ["sv", "Svenska"], ["el", "Ελληνικά"],
  ["he", "עברית"], ["id", "Bahasa Indonesia"], ["th", "ไทย"],
  ["vi", "Tiếng Việt"], ["uk", "Українська"], ["bn", "বাংলা"],
  ["ro", "Română"], ["cs", "Čeština"], ["da", "Dansk"],
  ["fi", "Suomi"], ["no", "Norsk"], ["hu", "Magyar"],
  ["bg", "Български"], ["hr", "Hrvatski"], ["sk", "Slovenčina"],
  ["sl", "Slovenščina"], ["sr", "Српски"], ["ms", "Bahasa Melayu"],
  ["ta", "தமிழ்"], ["te", "తెలుగు"], ["fa-AF", "دری"],
  ["sw", "Kiswahili"], ["fil", "Filipino"], ["ca", "Català"],
  ["et", "Eesti"], ["lv", "Latviešu"], ["lt", "Lietuvių"],
  ["is", "Íslenska"], ["ga", "Gaeilge"], ["cy", "Cymraeg"],
  ["af", "Afrikaans"], ["sq", "Shqip"], ["mk", "Македонски"],
  ["be", "Беларуская"], ["kk", "Қазақша"], ["uz", "Oʻzbekcha"],
  ["mn", "Монгол"], ["ne", "नेपाली"], ["si", "සිංහල"],
  ["km", "ខ្មែរ"], ["lo", "ລາວ"], ["my", "မြန်မာ"],
  ["am", "አማርኛ"], ["yo", "Yorùbá"], ["ig", "Igbo"],
  ["ha", "Hausa"], ["gu", "ગુજરાતી"], ["mr", "मराठी"],
  ["pa", "ਪੰਜਾਬੀ"], ["ps", "پښتو"], ["ku", "Kurdî"],
  ["hy", "Հայերեն"], ["ka", "ქართული"], ["bs", "Bosanski"],
  ["eo", "Esperanto"]
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
  "Python": "A readable general-purpose programming language.",
  "JavaScript": "A programming language widely used for interactive websites.",
  "TypeScript": "JavaScript with a static type system.",
  "Java": "A general-purpose, class-based programming language.",
  "C": "A procedural programming language used for systems and applications.",
  "C++": "A compiled language supporting procedural and object-oriented programming.",
  "C#": "A general-purpose language commonly used with .NET.",
  "Go": "A compiled language designed for simplicity and concurrency.",
  "Rust": "A systems programming language focused on memory safety.",
  "Kotlin": "A modern language commonly used for Android development.",
  "Swift": "A programming language for Apple platforms and more.",
  "Dart": "A programming language often used with Flutter.",
  "Ruby": "A dynamic language known for expressive syntax.",
  "PHP": "A server-side language often used for web development.",
  "Lua": "A lightweight scripting language used in games and applications.",
  "R": "A language and environment for statistical computing.",
  "MATLAB": "A technical computing environment and programming language.",
  "Perl": "A language used for text processing and scripting.",
  "Scala": "A language combining object-oriented and functional programming.",
  "Haskell": "A statically typed functional programming language.",
  "Elixir": "A functional language built on the Erlang virtual machine.",
  "Erlang": "A language designed for concurrent and fault-tolerant systems.",
  "Julia": "A high-level language for technical and scientific computing.",
  "Groovy": "A dynamic language for the Java platform.",
  "Objective-C": "An object-oriented language historically used for Apple software.",
  "Visual Basic": "A language for developing applications in the Microsoft ecosystem.",
  "Fortran": "A language widely used in scientific and numerical computing.",
  "COBOL": "A language historically used in business data processing.",
  "Pascal": "A structured programming language used in education and software.",
  "Delphi": "A development environment and language based on Object Pascal.",
  "Assembly": "A low-level language closely related to machine instructions.",
  "HTML": "A markup language that structures web pages.",
  "CSS": "A stylesheet language used to control web page appearance.",
  "XML": "A markup format for structured data.",
  "SVG": "An XML-based format for vector graphics.",
  "JSON": "A text format for exchanging structured data.",
  "YAML": "A human-readable data serialization format.",
  "Markdown": "A lightweight markup syntax for formatted text.",
  "SQL": "A language for querying and managing relational databases.",
  "GraphQL": "A query language for APIs.",
  "PL/SQL": "Oracle's procedural extension to SQL.",
  "T-SQL": "Microsoft SQL Server's SQL extension.",
  "DQL": "A term commonly used for data query languages.",
  "Cypher": "A query language for graph databases.",
  "SPARQL": "A query language for RDF data.",
  "MongoDB Query Language": "A query syntax for working with MongoDB documents.",
  "Prolog": "A logic programming language.",
  "Lisp": "A family of languages known for symbolic processing.",
  "Scheme": "A minimalist dialect of Lisp.",
  "Clojure": "A functional Lisp dialect running on several platforms.",
  "Mercury": "A logic and functional programming language.",
  "Datalog": "A declarative logic language for querying data.",
  "Esperanto": "A planned international auxiliary language.",
  "Lojban": "A constructed language designed around logical structure.",
  "Toki Pona": "A constructed language with a small vocabulary.",
  "Interlingua": "An international auxiliary language based on shared vocabulary.",
  "Ithkuil": "A constructed language designed for precise expression.",
  "Quenya": "An Elvish language created by J. R. R. Tolkien.",
  "Sindarin": "An Elvish language created by J. R. R. Tolkien.",
  "Klingon": "A constructed language from Star Trek.",
  "Dothraki": "A constructed language from Game of Thrones.",
  "Binary": "A number representation using zeros and ones.",
  "Morse code": "A system representing characters with short and long signals.",
  "Base64": "A method for representing bytes using printable text characters.",
  "hexadecimal": "A base-16 number system.",
  "ROT13": "A letter substitution that rotates letters by thirteen places.",
  "Caesar cipher": "A substitution cipher that shifts letters by a fixed amount.",
  "Pigpen cipher": "A substitution cipher using geometric symbols.",
  "ASCII": "A character encoding standard for basic English text.",
  "Unicode": "A standard for representing characters from many writing systems.",
  "Braille": "A tactile writing system based on raised dots.",
  "Wolfram Language": "A symbolic language used in computation and knowledge-based programming.",
  "Mathematica": "A technical computing system that uses the Wolfram Language.",
  "Maple": "A computer algebra system for symbolic and numerical mathematics.",
  "Verilog": "A hardware description language for digital systems.",
  "SystemVerilog": "A hardware description and verification language.",
  "VHDL": "A language for describing digital electronic systems.",
  "Chisel": "A hardware construction language embedded in Scala.",
  "Bluespec": "A family of high-level hardware design languages.",
  "GDScript": "A scripting language designed for the Godot game engine.",
  "GML (GameMaker Language)": "A scripting language used in GameMaker.",
  "Verse": "A programming language associated with Unreal Editor for Fortnite.",
  "AngelScript": "An embeddable scripting language used in applications and games.",
  "HLSL": "A shading language used in graphics programming.",
  "GLSL": "A shading language used with OpenGL.",
  "High Valyrian": "A constructed language featured in Game of Thrones.",
  "Na'vi": "A constructed language created for the film Avatar."
};

const categoryDescriptions = {
  "زبان‌های برنامه‌نویسی": "Languages used to write software and computer instructions.",
  "🌐 زبان‌های وب و نشانه‌گذاری": "Languages and formats used to structure, style, and exchange web content.",
  "🗄️ زبان‌های پایگاه‌داده / Query": "Languages and query syntaxes used to access and manage data.",
  "🤖 زبان‌های هوش مصنوعی و منطقی": "Languages used in logic, rules, symbolic processing, and artificial intelligence.",
  "🧠 زبان‌های ساخته‌شده و مصنوعی": "Languages deliberately created by people for communication, experimentation, or fiction.",
  "🔐 زبان‌ها و کدهای رمزگونه": "Encoding, representation, and cipher systems; not all are natural languages.",
  "🧮 زبان‌های علمی و تخصصی": "Languages and tools for scientific, mathematical, and technical computing.",
  "⚙️ زبان‌های سخت‌افزاری": "Languages used to describe and design digital hardware.",
  "🕹️ زبان‌ها/اسکریپت‌های مربوط به بازی": "Languages and tools used for game logic, graphics, and shaders.",
  "👽 زبان‌های خیالی": "Constructed languages created for fictional worlds and stories."
};

let mode = "builder";

function fillSelect(select, entries, selected) {
  select.replaceChildren();

  for (const [value, label] of entries) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    select.appendChild(option);
  }

  if (selected) select.value = selected;
}

function setStatus(text) {
  $("status").textContent = text;
}

function setOutput(text) {
  $("outputText").value = text;
}

fillSelect($("countryTarget"), countryLanguages, "fa");
fillSelect($("sourceLang"), countryLanguages, "en");
fillSelect($("targetLang"), countryLanguages, "fa");
fillSelect($("earthLang"), [
  ["auto", "تشخیص خودکار متن"],
  ["Binary", "Binary"],
  ["Morse code", "Morse code"],
  ["Base64", "Base64"],
  ["hexadecimal", "Hexadecimal"],
  ["ROT13", "ROT13"],
  ["Caesar cipher", "Caesar cipher"],
  ["ASCII", "ASCII"],
  ["Unicode", "Unicode"],
  ["Braille", "Braille"],
  ...Object.keys(groups).flatMap(category =>
    groups[category].map(name => [name, name])
  ).filter((item, index, arr) =>
    arr.findIndex(other => other[0] === item[0]) === index
  )
], "auto");

for (const category of Object.keys(groups)) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  $("category").appendChild(option);
}

function updateSpecialLanguages() {
  const category = $("category").value;
  fillSelect($("specialLang"), groups[category].map(name => [name, name]));
}

updateSpecialLanguages();
$("category").addEventListener("change", updateSpecialLanguages);

document.querySelectorAll(".mode").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".mode").forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");
    mode = button.dataset.mode;

    $("builderControls").hidden = mode !== "builder";
    $("earthControls").hidden = mode !== "earth";
    $("travelControls").hidden = mode !== "travel";
    $("countryTargetBox").hidden = mode === "travel";

    const descriptionsByMode = {
      builder: "Builderer: متن را بنویس و نوع زبان مقصد را انتخاب کن.",
      earth: "Come back to earth: متن یا کد را وارد کن تا تبدیل یا ترجمه شود.",
      travel: "Let's travel: زبان مبدأ و مقصد را انتخاب و متن را ترجمه کن."
    };

    setStatus(descriptionsByMode[mode]);
    setOutput("");
  });
});

function utf8ToBinary(text) {
  return [...new TextEncoder().encode(text)]
    .map(byte => byte.toString(2).padStart(8, "0"))
    .join(" ");
}

function binaryToText(text) {
  const cleaned = text.trim();

  if (!cleaned || !/^[01\s]+$/.test(cleaned)) {
    throw new Error("Binary باید فقط شامل صفر و یک باشد.");
  }

  const bits = cleaned.replace(/\s+/g, "");

  if (bits.length % 8 !== 0) {
    throw new Error("تعداد بیت‌ها باید مضربی از ۸ باشد.");
  }

  const bytes = bits.match(/.{8}/g).map(bits8 => parseInt(bits8, 2));
  return new TextDecoder("utf-8", { fatal: true }).decode(new Uint8Array(bytes));
}

function textToHex(text) {
  return [...new TextEncoder().encode(text)]
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join(" ");
}

function hexToText(text) {
  const cleaned = text.replace(/\s+/g, "");

  if (!cleaned || !/^(?:[0-9a-fA-F]{2})+$/.test(cleaned)) {
    throw new Error("Hexadecimal باید شامل جفت‌های هگز باشد؛ مثال: 48 69");
  }

  const bytes = cleaned.match(/.{2}/g).map(pair => parseInt(pair, 16));
  return new TextDecoder("utf-8", { fatal: true }).decode(new Uint8Array(bytes));
}

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";

  bytes.forEach(byte => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

function decodeBase64(text) {
  const binary = atob(text.trim());
  const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

function rot13(text) {
  return text.replace(/[a-zA-Z]/g, char => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode((char.charCodeAt(0) - base + 13) % 26 + base);
  });
}

const morseTable = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--",
  "/": "-..-.", "-": "-....-", "(": "-.--.", ")": "-.--.-"
};

const reverseMorse = Object.fromEntries(
  Object.entries(morseTable).map(([char, code]) => [code, char])
);

function encodeMorse(text) {
  return text.toUpperCase().split("").map(char => {
    if (char === " ") return "/";
    return morseTable[char] || "?";
  }).join(" ");
}

function decodeMorse(text) {
  return text.trim().split(/\s+/).map(code => {
    if (code === "/") return " ";
    if (!reverseMorse[code]) throw new Error("کد Morse ناشناخته: " + code);
    return reverseMorse[code];
  }).join("");
}

function encodeUnicode(text) {
  return [...text].map(char =>
    "U+" + char.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")
  ).join(" ");
}

function decodeUnicode(text) {
  const tokens = text.trim().split(/[\s,]+/);
  if (!tokens.length || !tokens.every(token => /^U\+[0-9a-f]{1,6}$/i.test(token))) {
    throw new Error("قالب Unicode نامعتبر است؛ مثال: U+0048 U+0069");
  }

  return tokens.map(token => {
    const point = parseInt(token.slice(2), 16);
    if (point > 0x10FFFF || (point >= 0xD800 && point <= 0xDFFF)) {
      throw new Error("کد Unicode معتبر نیست: " + token);
    }
    return String.fromCodePoint(point);
  }).join("");
}

function caesar(text, shift = 3) {
  return text.replace(/[a-z]/gi, char => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode(
      (char.charCodeAt(0) - base + shift + 260) % 26 + base
    );
  });
}

function decodeCaesar(text, shift = 3) {
  return caesar(text, -shift);
}

function encodeAscii(text) {
  const points = [...text].map(char => char.codePointAt(0));

  if (points.some(point => point > 127)) {
    throw new Error("ASCII فقط برای نویسه‌های محدودهٔ ۰ تا ۱۲۷ است.");
  }

  return points.join(" ");
}

function decodeAscii(text) {
  const parts = text.trim().split(/\s+/);

  if (!parts.length || !parts.every(part => /^\d{1,3}$/.test(part))) {
    throw new Error("کدهای ASCII را با فاصله جدا کن؛ مثال: 72 105");
  }

  return parts.map(part => {
    const value = Number(part);
    if (value > 127) throw new Error("عدد خارج از محدودهٔ ASCII است.");
    return String.fromCharCode(value);
  }).join("");
}

const brailleTable = {
  a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑", f: "⠋",
  g: "⠛", h: "⠓", i: "⠊", j: "⠚", k: "⠅", l: "⠇",
  m: "⠍", n: "⠝", o: "⠕", p: "⠏", q: "⠟", r: "⠗",
  s: "⠎", t: "⠞", u: "⠥", v: "⠧", w: "⠺", x: "⠭",
  y: "⠽", z: "⠵", " ": " "
};

function encodeBraille(text) {
  return [...text.toLowerCase()].map(char => brailleTable[char] || char).join("");
}

function convertEncoding(text, type, direction) {
  const decode = direction === "decode";

  switch (type) {
    case "Binary": return decode ? binaryToText(text) : utf8ToBinary(text);
    case "hexadecimal": return decode ? hexToText(text) : textToHex(text);
    case "Base64": return decode ? decodeBase64(text) : encodeBase64(text);
    case "ROT13": return rot13(text);
    case "Morse code": return decode ? decodeMorse(text) : encodeMorse(text);
    case "Caesar cipher": return decode ? decodeCaesar(text) : caesar(text);
    case "ASCII": return decode ? decodeAscii(text) : encodeAscii(text);
    case "Unicode": return decode ? decodeUnicode(text) : encodeUnicode(text);
    case "Braille": return decode
      ? "تبدیل خودکار Braille به متن معمولی برای همهٔ زبان‌ها پشتیبانی نمی‌شود."
      : encodeBraille(text);
    default: return null;
  }
}

async function translateOnline(text, from, to) {
  if (!text.trim()) throw new Error("ابتدا متن وارد کن.");
  if (text.length > 4500) {
    throw new Error("متن بیش از حد طولانی است؛ آن را به چند بخش تقسیم کن.");
  }

  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", text);
  url.searchParams.set("langpair", `${from}|${to}`);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("سرویس ترجمه پاسخ مناسبی نداد. بعداً دوباره تلاش کن.");
  }

  const data = await response.json();

  if (!data.responseData || !data.responseData.translatedText) {
    throw new Error(data.responseDetails || "ترجمه در دسترس نیست.");
  }

  if (data.responseStatus && data.responseStatus !== 200) {
    throw new Error(data.responseDetails || "سرویس ترجمه نتوانست متن را ترجمه کند.");
  }

  return data.responseData.translatedText;
}

function makeCode(text, language) {
  const escaped = {
    Python: text.replace(/\\/g, "\\\\").replace(/'/g, "\\'"),
    JavaScript: text.replace(/\\/g, "\\\\").replace(/`/g, "\\`"),
    TypeScript: text.replace(/\\/g, "\\\\").replace(/`/g, "\\`"),
    Java: text.replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
    "C#": text.replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
    PHP: text.replace(/\\/g, "\\\\").replace(/'/g, "\\'"),
    Ruby: text.replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
    Go: text.replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
    Swift: text.replace(/\\/g, "\\\\").replace(/"/g, '\\"'),
    Kotlin: text.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
  };

  const value = escaped[language] ?? text.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

  const templates = {
    Python: `print("${value}")`,
    JavaScript: `console.log("${value}");`,
    TypeScript: `console.log("${value}");`,
    Java: `System.out.println("${value}");`,
    "C#": `Console.WriteLine("${value}");`,
    PHP: `<?php echo "${value}"; ?>`,
    Ruby: `puts "${value}"`,
    Go: `fmt.Println("${value}")`,
    Swift: `print("${value}")`,
    Kotlin: `println("${value}")`,
    C: `printf("${value}\\n");`,
    "C++": `std::cout << "${value}" << std::endl;`,
    HTML: `<p>${value}</p>`,
    XML: `<text>${value}</text>`,
    JSON: JSON.stringify({ text: text }, null, 2),
    YAML: `text: "${value}"`,
    Markdown: `# Translation\n\n${text}`,
    SQL: `SELECT '${value.replace(/'/g, "''")}' AS text;`,
    Lua: `print("${value}")`,
    Dart: `print("${value}");`,
    Rust: `println!("${value}");`,
    R: `print("${value}")`,
    Perl: `print "${value}\\n";`,
    Scala: `println("${value}")`,
    Groovy: `println "${value}"`,
    Elixir: `IO.puts("${value}")`,
    Erlang: `io:format("${value}~n").`,
    Haskell: `main = putStrLn "${value}"`,
    Julia: `println("${value}")`,
    MATLAB: `disp("${value}")`,
    Fortran: `PRINT *, "${value}"`,
    COBOL: `DISPLAY "${value}"`,
    Pascal: `writeln('${value.replace(/'/g, "''")}');`,
    Delphi: `Writeln('${value.replace(/'/g, "''")}');`,
    "Visual Basic": `Console.WriteLine("${value}")`,
    ObjectiveC: `NSLog(@"${value}");`,
    "Objective-C": `NSLog(@"${value}");`,
    Assembly: `; ${text}`,
    Bash: `echo "${value}"`,
    PowerShell: `Write-Output "${value}"`,
    SQL: `SELECT '${value.replace(/'/g, "''")}' AS text;`
};

if (templates[language]) {
    return templates[language];
}

return `// ${language}\n// Original text: ${text}\n// This is a sample template, not a real translation.`;

}

async function translateOnline(text, from, to) {
const url =
"https://api.mymemory.translated.net/get?q=" +
encodeURIComponent(text) +
"&langpair=" +
encodeURIComponent(from + "|" + to);

const response = await fetch(url);

if (!response.ok) {
    throw new Error("Translation service unavailable.");
}

const data = await response.json();

if (
    data.responseStatus !== 200 ||
    !data.responseData ||
    typeof data.responseData.translatedText !== "string"
) {
    throw new Error("Translation failed.");
}

return data.responseData.translatedText;

}

function getSelectedLanguage(selectElement) {
return selectElement?.value || "";
}

function setStatus(message, isError = false) {
status.textContent = message;
status.style.color = isError ? "#ff6b6b" : "";
}

function updateMode() {
builderControls.hidden = currentMode !== "builder";
earthControls.hidden = currentMode !== "earth";
travelControls.hidden = currentMode !== "travel";
countryTargetBox.hidden = currentMode === "travel";

if (currentMode === "builder") {
    translateBtn.textContent = "Build";
} else if (currentMode === "earth") {
    translateBtn.textContent = "Translate back";
} else {
    translateBtn.textContent = "Let's travel";
}

setStatus("");

}

function updateLanguageOptions() {
const categoryName = category.value;
const languages = languageCatalog[categoryName] || [];

specialLang.innerHTML = "";

languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = language;
    specialLang.appendChild(option);
});

}

function fillCountryLanguages(selectElement) {
selectElement.innerHTML = "";

countryLanguages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language.code;
    option.textContent = language.name;
    selectElement.appendChild(option);
});

}

async function handleTranslate() {
const text = inputText.value.trim();

if (!text) {
    setStatus("Please enter some text first.", true);
    return;
}

translateBtn.disabled = true;
outputText.value = "";
setStatus("Working...");

try {
    let result = "";

    if (currentMode === "builder") {
        const language = getSelectedLanguage(specialLang);
        const encodingResult = convertEncoding(text, language, "encode");

        if (encodingResult !== null) {
            result = encodingResult;
        } else if (
            constructedLanguages.includes(language) ||
            fictionalLanguages.includes(language)
        ) {
            const target = getSelectedLanguage(countryTarget);
            result = await translateOnline(text, "en", target);
            result +=
                "\n\nNote: This is a regular-language translation, not an authentic " +
                language +
                " translation.";
        } else {
            result = makeCode(text, language);
        }
    } else if (currentMode === "earth") {
        const language = getSelectedLanguage(earthLang);
        const decoded = convertEncoding(text, language, "decode");

        if (decoded !== null) {
            result = decoded;
        } else {
            const target = getSelectedLanguage(countryTarget);
            result = await translateOnline(text, "en", target);
        }
    } else {
        const from = getSelectedLanguage(sourceLang);
        const to = getSelectedLanguage(targetLang);

        if (from === to) {
            result = text;
        } else {
            result = await translateOnline(text, from, to);
        }
    }

    outputText.value = result;
    setStatus("Done!");
} catch (error) {
    console.error(error);
    setStatus(
        "Translation failed. Check your internet connection or try again.",
        true
    );
} finally {
    translateBtn.disabled = false;
}

}

function clearFields() {
inputText.value = "";
outputText.value = "";
setStatus("");
}

async function copyOutput() {
const text = outputText.value;

if (!text) {
    setStatus("There is no output to copy.", true);
    return;
}

try {
    await navigator.clipboard.writeText(text);
    setStatus("Copied!");
} catch {
    outputText.focus();
    outputText.select();

    const copied = document.execCommand("copy");
    setStatus(
        copied ? "Copied!" : "Could not copy the output.",
        !copied
    );
}

}

function swapLanguages() {
const oldSource = sourceLang.value;
sourceLang.value = targetLang.value;
targetLang.value = oldSource;
}

document.querySelectorAll("[data-mode]").forEach((button) => {
button.addEventListener("click", () => {
currentMode = button.dataset.mode;
updateMode();
});
});

category.addEventListener("change", updateLanguageOptions);
translateBtn.addEventListener("click", handleTranslate);
clearBtn.addEventListener("click", clearFields);
copyBtn.addEventListener("click", copyOutput);
swap.addEventListener("click", swapLanguages);

fillCountryLanguages(countryTarget);
fillCountryLanguages(earthLang);
fillCountryLanguages(sourceLang);
fillCountryLanguages(targetLang);
updateLanguageOptions();
updateMode();
