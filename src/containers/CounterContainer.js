import React, { Component } from 'react';
// container의 역할 : store와 컴포넌트와 연결하려면 connect 필요
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
// import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
    handleIncrement = () => {
        this.props.increment();
    };
    handleDecrement = () => {
        this.props.decrement();
    };

    render() {
        const { color, number } = this.props;
        return (
            <Counter
                color={color}
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        );
    }
}

// props로 넣어줄 store 상태값
// state에 해당하는 부분을 비구조화 할당 해주었기 때문에 매번 조회할 때마다 state. 을 생략할 수 있다  (??)
const mapStateToProps = ({ counter }) => ({
    color: counter.color,
    number: counter.number,
});

// 넘겨줄 액션생섬함수 지정
// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
// });

// bindActionCreators 함수 사용해서 간단하게 바꾸기
// const mapDispatchToProps = dispatch => bindActionCreators({increment, decrement}, dispatch);

// 함수가 아닌 객체 설정시 자동bindActionCreators 된다
const mapDispatchToProps = { increment, decrement }; 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
