import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/stocks";
import { getAllStocks } from "../../reducers";
import EditStockView from "./EditStockView";

class EditStockContainer extends React.Component {
  componentDidMount() {
      this.props.fetchStockSymbols();
  }

  render() {
    return (
      <div>
        <EditStockView {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stockList: getAllStocks(state) };
};

const mapDispatchToProps = dispatch => {
  return {
      fetchStockSymbols: () => {
          dispatch(actions.fetchStockSymbols())
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStockContainer);
