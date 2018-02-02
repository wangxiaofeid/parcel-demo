import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('appStore')
@observer
export default class Page1 extends Component {
    render() {
        const { appStore } = this.props;
        return <div>
            page1
        </div>
    }
}
