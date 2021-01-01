import React from 'react';

import { fetchData, fetchDailyData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import banner from './img/banner.png';

class App extends React.Component {

  state = {
    data: {},
    dailyData: [],
    country: 'Global',
  }

  async componentDidMount() {
    const fetchedData = await fetchData(this.state.country);
    const fetchedDailyData = await fetchDailyData();
    this.setState({data: fetchedData, dailyData: fetchedDailyData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, dailyData, country } = this.state;

    return (
      <div className={styles.container}>
          <img className={styles.image} src={banner} alt="COVID-19 Tracker" />
          <Cards data={data} dailyData={dailyData} country={country} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          {country !== "Global" ? <Chart data={data} dailyData={dailyData} country={country} /> : null}
      </div>
    )
  }
}

export default App;