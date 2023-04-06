import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../store/action-creators";
import "./counter.css";

export const CounterComponent = ({
    counter,
    handleIncrement,
    handleDecrement,
}) => {
    return (
        <>
            Counter: {counter}
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    );
};

const mapStateToProps = ({ counter }) => ({
    counter,
});

const mapDispatchToProps = {
    handleIncrement: increment,
    handleDecrement: decrement,
};

export const Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);