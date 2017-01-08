import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react';
import './App.scss';
//Components
import { Menubar } from './layout/Menubar';
import { sidebarOnOff } from '../actions/ui-action';
// import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menubar sidebarOnOff={this.props.sidebarOnOff}/>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={this.props.ui.sidebarOn} icon='labeled' vertical inverted>
                        <Menu.Item name='home'>
                            <Link to='/'>
                                <Icon name='home' />
                                Dashboard
                            </Link>
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Link to='/products'>
                                <Icon name='gamepad' />
                                Products
                            </Link>
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Link to='/map'>
                                <Icon name='camera' />
                                Map
                            </Link>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

App.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        ui: state.ui
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sidebarOnOff: () => {
            dispatch(sidebarOnOff());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);