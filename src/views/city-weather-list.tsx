import { useState } from "react";
import CityWeatherItem from "../components/city-weather";

const CityWeatherView = () => {
  const [displayAreaCode, switchDisplayAreaCode] = useState(0);

  const updateToNextAreaCode = (): void => {
    switchDisplayAreaCode((displayAreaCode + 1) % areas.length);
  };

  // we need to paginate the data below so that it shows all stations from one specific
  // area code for 30s then switches over. it loops back around once it gets to the end
  setInterval(() => {
    updateToNextAreaCode();
  }, 30 * 1000);

  const getWeatherReportsForAreaCode = (): Array<any> => {
    return weatherReports.filter((wr) => wr.area === areas[displayAreaCode]);
  };

  // no weather reports so just display generic message
  if (!weatherReports.length) return <div>No observations available</div>;

  // otherwise render the list of city/temp/condition for the current page
  return (
    <ul>
      {getWeatherReportsForAreaCode().map((weatherReport) => (
        <CityWeatherItem
          key={weatherReport.stationCode}
          name={weatherReport.name}
          temp={weatherReport.observation.temp}
          condition={weatherReport.observation.condition}
        />
      ))}
    </ul>
  );
};

export default CityWeatherView;

const weatherReports = [
  {
    name: "Brandon",
    stationCode: "MB/s0000492",
    area: "mb/on",
    observation: {
      condition: "Light Snow",
      temp: "-9.9",
    },
  },
  {
    name: "Dauphin",
    stationCode: "MB/s0000508",
    area: "mb/on",
    observation: {
      condition: "Light Snow",
      temp: "-10.0",
    },
  },
  {
    name: "Kenora",
    stationCode: "ON/s0000651",
    area: "mb/on",
    observation: {
      condition: "Light Snow",
      temp: "-7.2",
    },
  },
  {
    name: "Thompson",
    stationCode: "MB/s0000695",
    area: "mb/on",
    observation: {
      condition: "Mainly Clear",
      temp: "-20.6",
    },
  },
  {
    name: "The Pas",
    stationCode: "MB/s0000644",
    area: "mb/on",
    observation: {
      condition: "Mainly Clear",
      temp: "-14.1",
    },
  },
  {
    name: "Lynn Lake",
    stationCode: "MB/s0000777",
    area: "mb/on",
    observation: {
      condition: "Light Snow",
      temp: "-14.8",
    },
  },
  {
    name: "Churchill",
    stationCode: "MB/s0000779",
    isBackup: true,
    area: "mb/on",
    observation: {
      condition: "Clear",
      temp: "-19.5",
    },
  },
  {
    name: "Vancouver",
    stationCode: "BC/s0000141",
    area: "west",
    observation: {
      condition: "Mostly Cloudy",
      temp: "4.7",
    },
  },
  {
    name: "Victoria",
    stationCode: "BC/s0000775",
    area: "west",
    observation: {
      condition: "Partly Cloudy",
      temp: "2.0",
    },
  },
  {
    name: "Edmonton",
    stationCode: "AB/s0000510",
    area: "west",
    observation: {
      condition: "Mainly Clear",
      temp: "-7.0",
    },
  },
  {
    name: "Calgary",
    stationCode: "AB/s0000047",
    area: "west",
    observation: {
      condition: "Mostly Cloudy",
      temp: "-1.1",
    },
  },
  {
    name: "Saskatoon",
    stationCode: "SK/s0000797",
    area: "west",
    observation: {
      condition: "Light Snow",
      temp: "-12.0",
    },
  },
  {
    name: "Regina",
    stationCode: "SK/s0000788",
    area: "west",
    observation: {
      condition: "Mist",
      temp: "-11.9",
    },
  },
  {
    name: "Thunder Bay",
    stationCode: "ON/s0000411",
    area: "west",
    observation: {
      condition: "Light Snow",
      temp: "-5.0",
    },
  },
  {
    name: "Toronto",
    stationCode: "ON/s0000458",
    area: "east",
    observation: {
      condition: "Mostly Cloudy",
      temp: "2.9",
    },
  },
  {
    name: "Ottawa",
    stationCode: "ON/s0000623",
    area: "east",
    observation: {
      condition: "Light Rain",
      temp: "5.1",
    },
  },
  {
    name: "Montreal",
    stationCode: "QC/s0000635",
    area: "east",
    observation: {
      condition: "Mostly Cloudy",
      temp: "7.6",
    },
  },
  {
    name: "Quebec City",
    stationCode: "QC/s0000620",
    area: "east",
    observation: {
      condition: "Cloudy",
      temp: "2.1",
    },
  },
  {
    name: "Fredericton",
    stationCode: "NB/s0000250",
    area: "east",
    observation: {
      condition: "Cloudy",
      temp: "2.5",
    },
  },
  {
    name: "Halifax",
    stationCode: "NS/s0000318",
    area: "east",
    observation: {
      condition: "Mostly Cloudy",
      temp: "6.7",
    },
  },
  {
    name: "St. John's",
    stationCode: "NL/s0000280",
    area: "east",
    observation: {
      condition: "Light Rain",
      temp: "12.9",
    },
  },
];

const areas = [...new Set(weatherReports.map((report) => report.area))];
