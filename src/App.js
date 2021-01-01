import React from 'react';

import { fetchData } from './api';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {

  state = {
    data: {},
    country: 'Global',
  }

  async componentDidMount() {
    const fetchedData = await fetchData(this.state.country);
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          {country !== "Global" ? <Chart data={data} country={country} /> : null}
      </div>
    )
  }
}

export default App;