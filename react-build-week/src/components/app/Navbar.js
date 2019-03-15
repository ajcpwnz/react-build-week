import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getExperimentsAsync, searchExperiments } from '../../actions/actionCreators';
import styled from 'styled-components';
import maxime from './img/maxime.png';

const NavbarContainer = styled.div `
    display: flex;
    position: fixed;
    top: 0px;
    left: 64px;
    height: 64px;
    width: 100vw;
    background: #FFFFFF;
    border-bottom: 0.5px solid rgba(151, 151, 151, 0.38);
    box-sizing: border-box;
`

const NavbarSearch = styled.input `
    margin-top: 15px;
    margin-left: 38px;
    height: 30px;
    width: 300px;
    border: none;
    font-size: 14px;
`
const NavbarSettings = styled.div `
    position: absolute;
    right: 180px;
    margin-top: 23px;
`

const NavbarProfile = styled.img `
    position: absolute;
    right: 120px;
    margin-top: 11px;
    border-radius: 100px;
    height: 40px;
    width: 40px;
`


class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchInput: "",
        }
    }
    render() {
        const onSearch = search => {
            if (search.keyCode === 13) {
                this.props.searchExperiments(this.state.searchInput);
            }
        }
      return (
        <NavbarContainer>
            <NavbarSearch
                placeholder="🔍 Search growth experiments and tools"
                onChange={event => this.setState({searchInput: event.target.value})}
                onKeyDown={onSearch}
            >
            </NavbarSearch>
            <NavbarSettings>
                <p>Maxime Salomon</p>
            </NavbarSettings>
            <NavbarProfile src={maxime} height="40px" width="40px"></NavbarProfile>
        </NavbarContainer>
      );
    }
}

const mapStateToProps = state => ({
    experiments: state.experiments,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getExperimentsAsync,
        searchExperiments
    }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);