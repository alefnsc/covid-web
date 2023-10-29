async function getData(date, countryIso) {
  try {
    const data = await axios.get(
      `https://covid-api.com/api/reports/total?date=${date}&iso=${countryIso}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getCountries() {
  try {
    return await axios.get("./js/countries.json");
  } catch (error) {
    console.error(error);
  }
}

export { getData, getCountries };
