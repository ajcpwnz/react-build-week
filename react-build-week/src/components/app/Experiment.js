import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExperimentsAsync } from '../../actions/actionCreators';

class Experiment extends React.Component {
    componentDidMount() {
        this.props.getExperimentsAsync();
      }
      render() {
        //   console.log(this.props.match.params);
        return (
            <>
                <h2>Experiment Page</h2>
            </>
        );
    }
}

const mapStateToProps = state => ({
    experiments: state.experiments,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getExperimentsAsync
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Experiment);