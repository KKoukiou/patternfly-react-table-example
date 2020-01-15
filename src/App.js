import React from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownToggleAction,
    DropdownItem,
    DropdownItemIcon,
    DropdownSeparator,
    DropdownPosition,
    DropdownDirection,
    KebabToggle
} from '@patternfly/react-core';
import { ThIcon, CogIcon, BellIcon, CubesIcon } from '@patternfly/react-icons';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActionOpen: false,
            isCogOpen: false
        };
        this.onActionToggle = isActionOpen => {
            this.setState({
                isActionOpen
            });
        };
        this.onCogToggle = isCogOpen => {
            this.setState({
                isCogOpen
            });
        };
        this.onActionClick = event => {
            console.log('Action clicked!');
        };
        this.onCogClick = event => {
            console.log('Cog clicked!');
        };
        this.onActionSelect = event => {
            this.setState({
                isActionOpen: !this.state.isActionOpen
            });
        };
        this.onCogSelect = event => {
            this.setState({
                isCogOpen: !this.state.isCogOpen
            });
        };
    }

    render() {
        const { isActionOpen, isCogOpen } = this.state;
        const dropdownItems = [
        <DropdownItem key="action" component="button">
            Action
        </DropdownItem>,
        <DropdownItem key="disabled link" component="button" isDisabled>
            Disabled action
        </DropdownItem>,
        <DropdownItem key="other action" component="button">
            Other action
        </DropdownItem>
        ];
        const dropdownIconItems = [
        <DropdownItem key="action" component="button" variant="icon">
            <DropdownItemIcon>
                <CogIcon />
            </DropdownItemIcon>
            Action
        </DropdownItem>,
        <DropdownItem key="disabled link" component="button" variant="icon" isDisabled>
            <DropdownItemIcon>
                <BellIcon />
            </DropdownItemIcon>
            Disabled action
        </DropdownItem>,
        <DropdownItem key="other action" component="button" variant="icon">
            <DropdownItemIcon>
                <CubesIcon />
            </DropdownItemIcon>
            Other action
        </DropdownItem>
        ];
        return (
            <React.Fragment>
                <Dropdown
                    onSelect={this.onActionSelect}
                    toggle={
                        <DropdownToggle
                            splitButtonItems={[
                            <DropdownToggleAction key="action" onClick={this.onActionClick}>
                                Action
                            </DropdownToggleAction>
                            ]}
                            splitButtonVariant="action"
                            onToggle={this.onActionToggle}
                        />
                    }
                    isOpen={isActionOpen}
                    dropdownItems={dropdownItems}
                />{' '}
                <Dropdown
                    onSelect={this.onCogSelect}
                    toggle={
                        <DropdownToggle
                            splitButtonItems={[
                            <DropdownToggleAction key="cog-action" aria-label="Action" onClick={this.onCogClick}>
                                <CogIcon />
                            </DropdownToggleAction>
                            ]}
                            splitButtonVariant="action"
                            onToggle={this.onCogToggle}
                        />
                    }
                    isOpen={isCogOpen}
                    dropdownItems={dropdownIconItems}
                />
            </React.Fragment>
        );
    }
}
