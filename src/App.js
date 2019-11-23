import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addItems, removeItems, updatePrice} from './Actions/Actions';

const App = (props) => {
  const removeItems= item =>{
    props.removeItems(item);
    props.updatePrice(-item.price);
  }

  const addItems= item =>{
    props.addItems(item);
    props.updatePrice(item.price);
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice}/>
        <AddedFeatures car={props.car} removeItems={removeItems}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addItems={addItems} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return{
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  };
}

export default connect(mapStateToProps, {addItems, removeItems, updatePrice})(App);
