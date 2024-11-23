import { Component } from "react";
import PropTypes from "prop-types";

class ClickMe extends Component {
  handleClick = () => {
    this.setState({ count: this.state.count + (this.props.level || 1) });
  };

  constructor(props) {
    super(props);
    this.state = { count: props.level || 1 };
  }

  //1-1
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 호출됨");
  }

  //1-2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate 호출됨");
  }

  //1-3 2-3
  render() {
    return (
      <div>
        클릭횟수 x {this.props.level || 1} : {this.state.count}
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }

  //1-4
  componentDidMount() {
    console.log("componentDidMount 호출됨");
  }

  //2-4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("2-4 getSnapshotBeforeUpdate 호출됨");
  }

  //2-5
  componentDidUpdate() {
    console.log("2-5 componentDidUpdate 호출됨");
  }

  //3-1 컴포넌트 제거
  componentWillUnmount() {
    console.log("3-1 componentWillUnmount 호출됨");
  }
}

ClickMe.propTypes = {
  level: PropTypes.number,
};

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={2} />
        <ClickMe level={5} />
        <ClickMe />
      </div>
    );
  }
}

export default Parent;
