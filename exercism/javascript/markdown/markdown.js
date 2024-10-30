function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function isTag(text, tag) {
  return text.startsWith(`<${tag}>`);
}

function parser(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}

function parse__(markdown) {
  return parser(markdown, "__", "strong");
}

function parse_(markdown) {
  return parser(markdown, "_", "em");
}

function parseText(markdown) {
  const parsedText = parse_(parse__(markdown));
  return parsedText;
}

function isHeading(line) {
  return getHeadingLevel(line) !== 0;
}

function isList(line) {
  return line.startsWith("*");
}

const MAX_HEADING_LEVEL = 6;

function getHeadingLevel(line) {
  let count = 0;
  while (line[count] === "#") {
    count++;
  }
  if (count > MAX_HEADING_LEVEL) {
    count = 0;
  }
  return count;
}

function parseHeader(line) {
  const headingLevel = getHeadingLevel(line);
  const headerTag = `h${headingLevel}`;
  const headerHtml = wrap(line.substring(headingLevel + 1), headerTag);
  return headerHtml;
}

function parseLineItem(markdown) {
  return wrap(parseText(markdown.substring(2)), "li");
}

function parseParagraph(markdown) {
  return wrap(parseText(markdown), "p");
}

function parseLine(markdown, linesGenerator) {
  if (isHeading(markdown)) {
    return parseHeader(markdown);
  } else if (isList(markdown)) {
    let listLines = ["<ul>"];
    let nextLine = markdown;
    let isDone = false;
    while (!isDone && isList(nextLine)) {
      listLines.push(parseLineItem(nextLine));
      const nextItem = linesGenerator.next();
      isDone = nextItem.done;
      nextLine = nextItem.value;
    }
    listLines.push("</ul>");
    if (!isDone) {
      listLines.push(parseLine(nextLine, linesGenerator));
    }
    return listLines.join("");
  } else {
    return parseParagraph(markdown);
  }
  // todo: what if it doesn't fall into paragraph, heading, or list?
  // todo: test for parsing errors, assert and throw
}

const getLines = function* (markdown) {
  const lines = markdown.split("\n");
  for (const line of lines) {
    yield line;
  }
};

export function parse(markdown) {
  const linesGenerator = getLines(markdown);
  let result = "";
  for (const line of linesGenerator) {
    let lineResult = parseLine(line, linesGenerator);
    result += lineResult;
  }

  return result;
}
