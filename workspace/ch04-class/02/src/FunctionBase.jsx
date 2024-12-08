import { Component, useState } from "react";
import PropTypes from "prop-types";

function ClickMe({ level }) {
  const [count, setCount] = useState(level || 1);

  const handleClick = () => {
    setCount({ count: this.state.count + (this.props.level || 1) });
  };

  return (
    <div>
      클릭횟수 x {this.props.level || 1} : {this.state.count}
      <button onClick={this.handleClick}>클릭</button>
    </div>
  );
}

ClickMe.propTypes = {
  level: PropTypes.number,
};

function Parent() {
  return (
    <div>
      <h1>02 클래스 컴포넌트-함수 컴포넌트와 같이 사용</h1>
      <ClickMe level={2} />
      <ClickMe level={5} />
      <ClickMe />
    </div>
  );
}

export default Parent;
