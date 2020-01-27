import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as waitingActions from '../store/modules/waiting';
import WaitingList from '../components/WaitingList';

class WaitingListContainer extends Component {
    // 인풋 변경 이벤트
    handleChange = e => {
        const { waitingActions } = this.props;
        waitingActions.changeInput(e.target.value);
    };

    // 등록이벤트
    handleSubmit = e => {
        e.preventDefault();
        const { waitingActions, input } = this.props;
        waitingActions.create(input); // 등록
        waitingActions.changeInput(''); // 인풋값 초기화
    };

    // 입장
    handleEnter = id => {
        const { waitingActions } = this.props;
        waitingActions.enter(id);
    };

    // 나가기
    handleLeave = id => {
        const { waitingActions } = this.props;
        waitingActions.leave(id);
    };

    render() {
        const { input, list } = this.props;
        return (
            <WaitingList 
                input={input}
                waitingList={list}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onEnter={this.handleEnter}
                onLeave={this.handleLeave}
            />
        );
    }
}

const mapStateToProps = ({ waiting }) => ({
    input: waiting.input,
    list: waiting.list,
});

const mapDispatchToProps = dispatch => ({
    waitingActions: bindActionCreators(waitingActions, dispatch),
    // 다른 모듈 추가
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WaitingListContainer);
