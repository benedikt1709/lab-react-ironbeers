import React from 'react';

class SearchbarDatabase extends React.Component {

    state = {
        beers: [],
        filteredBeers: []
    }

    render() {
      return (
        <div style={{margin: 20}}>
          <form>
                <input style={{width: 300}} type="text" placeholder="Search Database" 
                onChange = {(event) => {this.props.onSearch(event.target.value)}}/>
          </form>
        </div>
      );
    }
};

export default SearchbarDatabase;