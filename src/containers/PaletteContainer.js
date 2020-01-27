import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';
// 우리느 지금 컴포넌트 - store 를 연결하는 작업을 할 것!
// 리덕스와 연동된 컴포넌트 -> 컴테이너 컴포넌트

class PaletteContainer extends Component {
    handleSelect = color => {
      const { changeColor } = this.props;
      console.log('what');
      changeColor(color);
    };
  
    render() {
      const { color } = this.props;
      return <Palette onSelect={this.handleSelect} selected={color} />;
    }
  }

// props로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
    color: state.counter.color,
  });

// props로 넣어줄 액션생성함수
const mapDispatchToProps = dispatch => ({
    changeColor: color => dispatch(changeColor(color)),
  });

// 컴포넌트에 리덕스 스토어를 연동해 줄 때에는 connect 함수 사용
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaletteContainer);