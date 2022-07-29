import React from 'react';

class DropDown extends React.Component {

  state = {
    loading: true,
    values: [],
    selectCity: 'Edmonton',
    selectValue: '62e049f89f5f8e15881530cb',
    weather: {
      current: {
        temperature: '0',
        weather_descriptions: [
          ''
        ]
      }
    }
  }

  fetchCities = () => {
    fetch('http://localhost:5500/cities')
      .then(function(res) {
        return res.json();
      }).then((json) => {
        this.setState({
          values: json
        })
      });
  }

  fetchWeather = () => {
    fetch('http://localhost:5500/weather/' + this.state.selectCity)
      .then(function(res) {
        return res.json();
      }).then((json) => {
        this.setState({
          loading: false,
          weather: json
        })
      });
  }

  async componentDidMount() {
    this.fetchCities();
    this.fetchWeather();
  }

  handleDropdownChange = (e) => {
    this.setState({selectValue: e.target.value, selectCity: this.state.values.find(field => field._id == e.target.value).name});
    this.fetchWeather();
  }

  render() {
    return <div className="drop-down">
      {this.state.loading ? <div>Loading...</div> :
        <div>
          <div class="select">
            <select name="format" id="format" onChange={this.handleDropdownChange}>{
              this.state.values.map((obj) => {
                return <option value={obj._id} >{obj.name}</option>
              })
            }</select>
          </div>
          <div id="outline"><p>{this.state.values.find(field => field._id == this.state.selectValue).description}</p></div>
          <div id="outline"><p>Current weather in {this.state.values.find(field => field._id == this.state.selectValue).name} is {this.state.weather.current.weather_descriptions[0].toLowerCase()} with a temperature of {this.state.weather.current.temperature}°.</p></div>
        </div>}
    </div>;
  }
}

export default DropDown;
