import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchExperiments } from '../../actions/actionCreators';
import styled from 'styled-components';
import settings from './img/settings.png';

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
    margin-top: 20px;
    margin-left: 15px;
    height: 30px;
    width: 300px;
    border: none;
    font-size: 14px;
`
const NavbarSettings = styled.div `
    position: absolute;
    right: 200px;
    margin-top: 20px;
`

const NavbarProfile = styled.div `
    position: absolute;
    right: 120px;
    border-radius: 100px;
    background-color: #0014DD;
    color: white;
    padding: 12px 15px;
    font-size: 16px;
    margin-top: 10px;
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
                <img src={settings} alt="Settings"/>
            </NavbarSettings>
            <NavbarProfile>M</NavbarProfile>
        </NavbarContainer>
      );
    }
}

const mapStateToProps = state => ({
    experiments: state.experiments,
  });
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchExperiments
    }, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);