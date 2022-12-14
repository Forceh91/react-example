function harshTruncateConditions(condition: String): String {
  // to lowercase
  condition = condition.toLowerCase();

  // handle thunderstorm when its prefaced with light/heavy
  if (condition.includes("light thunderstorm") || condition.includes("heavy thunderstorm"))
    condition = condition.replace(/thunderstorm/gi, "tstorm");

  // handle light snow
  condition = condition.replace(/(light|heavy) (rain|snow) and (snow|rain)/gi, "rain/snow");

  // handle light/heavy freezing rain
  condition = condition.replace(/(light|heavy) freezing rain/gi, "freezing rain");

  // handle snow + blowing snow
  condition = condition.replace(/(light|heavy) snow (shower\s)?and blowing snow/gi, "snow/blw snow");

  // handle light/heavy conditions
  if (condition.length > 13) condition = condition.replace(/light/gi, "lgt").replace(/heavy/gi, "hvy");

  // handle light/heavy rain/snow shower
  condition = condition.replace(/\s(rain|snow)shower/gi, " $1shwr");

  // final truncation for and/width
  if (condition.includes("with")) condition = condition.split(" with")[0];
  if (condition.includes("and")) condition = condition.split(" and")[0];

  // now truncate to just 13 chars
  return `${condition.slice(0, 13)}`;
}

export default harshTruncateConditions;
