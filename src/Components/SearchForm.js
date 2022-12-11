import React from "react";
import './global.css';
import {nonRepeatedLabels} from '../Helpers/data'

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filters: {
          tag1: false,
          tag2: false,
          tag3: false,
        }
      };
    }
  
    handleChange = (event) => {
      const {name, checked} = event.target;
      this.setState(prevState => ({
        filters: {
          ...prevState.filters,
          [name]: checked,
        }
      }));
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const {filters} = this.state;
      const filteredResults = this.filterResults(filters);
      this.props.onUpdate(filteredResults);
      // do something with the filtered results, such as update the state of a parent component
    }
  
    filterResults = (filters) => {
      // filter the results based on the selected filters
    }
  
    render() {
      const {filters} = this.state;
      return (
        <form onSubmit={this.handleSubmit} className="form">
            {nonRepeatedLabels.map(label => (
            <label>
                <input
                type="checkbox"
                name={label}
                checked={filters.label}
                onChange={this.handleChange}
                />
            {label}
            </label>
        ))}
          <button type="submit">Search</button>
        </form>
      );
    }
  }
  
  export default SearchForm;