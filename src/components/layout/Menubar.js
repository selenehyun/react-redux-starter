import React, {Component} from 'react';
import { Menu, Icon } from 'semantic-ui-react'

export const Menubar = (props) => {
    return (
        <Menu>
            <Menu.Item onClick={props.sidebarOnOff}>
                <Icon name="sidebar" />
            </Menu.Item>

            <Menu.Item
                name='reviews'
            >
                Reviews
            </Menu.Item>

            <Menu.Item
                name='upcomingEvents'
            >
                Upcoming Events
            </Menu.Item>
        </Menu>
    )
}



