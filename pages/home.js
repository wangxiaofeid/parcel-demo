import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from "antd";

@inject('appStore')
@observer
export default class Home extends Component {
    render() {
        const { appStore } = this.props;
        return <div>
            <p>{appStore.current}</p>
            <Button onClick={() => { appStore.currentPlus()}}>+1</Button>
        </div>
    }
}
