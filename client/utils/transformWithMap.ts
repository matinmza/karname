const transformWithMap = (text: string, map: Record<string, string>) => {
  let transformedText: string = "";
  for (let i = 0; i < text.length; i++) {
    transformedText = transformedText + (map[text[i]] || "");
  }
  return transformedText;
};

export default transformWithMap;
