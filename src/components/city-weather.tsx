import harshTruncateConditions from "../ts/conditions";
import { padString } from "../ts/string-utils";

interface CityWeather {
  name: String;
  temp: string;
  condition: String;
}

const CityWeatherItem = (props: CityWeather) => {
  function roundTemp(temp: string): string {
    if (!temp) return "";
    return Math.round(parseInt(temp)).toString();
  }

  return (
    <div>
      <span>{padString(props.name, 13)}</span>
      <span>{padString(roundTemp(props.temp), 5, true)}&nbsp;&nbsp;</span>
      <span>{padString(harshTruncateConditions(props.condition), 13)}</span>
    </div>
  );
};

export default CityWeatherItem;
