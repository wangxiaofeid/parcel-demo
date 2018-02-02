import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('appStore')
@observer
export default class Page2 extends Component {
    render() {
        const { appStore } = this.props;
        return <div>
            page2
        </div>
    }
}
