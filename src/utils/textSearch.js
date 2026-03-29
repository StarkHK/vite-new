export default function textSearch(text, query) {
  if (text.trim("") === "" && query.trim("") === "") {
    return text;
  }

  const boldCharArray = Array.from({ length: text.length }, () => 0);

  for (let i = 0; i < text.length; ) {
    const subStr = text.slice(i, i + query.length);

    if (subStr.toLowerCase() === query.toLowerCase()) {
      boldCharArray.fill(1, i, i + query.length);
      i = i + query.length;
    } else {
      i++;
    }
  }

  let highlightString = "";

  for (let i = 0; i < text.length; i++) {
    const shouldHaveOpeningTag =
      boldCharArray[i] === 1 && boldCharArray[i - 1] !== 1;

    const shouldHaveClosingTag =
      boldCharArray[i] === 1 && boldCharArray[i + 1] !== 1;

    let char = text[i];

    if (shouldHaveOpeningTag) {
      char = "<b>" + char;
    }

    if (shouldHaveClosingTag) {
      char = char + "</b>";
    }

    highlightString += char;
  }

  return highlightString;
}
