function padString(val: any, minLength: number, isFront?: Boolean): string {
  if (val === null || val === undefined) val = "";
  val = val.toString();
  if (!val.length) return "";

  const paddingToAdd = minLength - val.length;
  let paddingString = "";
  for (let i = 0; i < paddingToAdd; i++) paddingString += "\u00A0"; // this is the unicode equivalent of &nbsp;

  return !isFront ? val + paddingString : paddingString + val;
}

export { padString };
