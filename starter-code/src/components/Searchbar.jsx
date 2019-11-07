import React from 'react';

class Searchbar extends React.Component {

    state = {
        beers: [],
        filteredBeers: []
    }

    filterList = (event) => {
        this.props.onSearch(event.target.value.toLowerCase())
    }

    render() {
      return (
        <div style={{margin: 20}}>
          <form>
                <input style={{width: 300}} type="text" placeholder="Search Local" onChange={this.filterList}/>
          </form>
          <div>
            {
                this.state.filteredBeers.map(function(item) {
                    return <div key={item.name}>{item.name}</div>
                })
            }
            </div>
        </div>
      );
    }
};

export default Searchbar;