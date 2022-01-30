"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _bi = require("react-icons/bi");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

const Modal = ({
                   isActive,
                   handleClick,
                   modalContent,
                   backgroundStyle,
                   contentStyle,
                   exitBtn,
                   exitBtnStyle,
                   refresh
               }) => {
    const backStyle = {
        display: isActive ? "block" : "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        backgroundColor: "rgba(255,255,255,0.35)",
        textAlign: "center",
        ...backgroundStyle
    };
    const innerStyle = {
        maxWidth: "20%",
        maxHeight: "20%",
        minHeight: "10%",
        position: "relative",
        border: "5px solid red",
        borderRadius: 10,
        backgroundColor: "white",
        padding: 20,
        marginLeft: "50%",
        marginTop: "25%",
        transform: "translate(-50%, -50%)",
        ...contentStyle
    };
    const exitStyle = {
        position: "absolute",
        top: 2,
        right: 8,
        cursor: "pointer",
        ...exitBtnStyle
    };

    const handleClickExit = () => {
        handleClick();

        if (refresh) {
            window.location.reload();
        }
    };

    return /*#__PURE__*/ _react.default.createElement(
        "div",
        {
            style: backStyle
        },
        /*#__PURE__*/ _react.default.createElement(
            "div",
            {
                style: innerStyle
            },
            modalContent,
            /*#__PURE__*/ _react.default.createElement(
                "div",
                {
                    style: exitStyle,
                    onClick: handleClickExit
                },
                exitBtn
                    ? exitBtn
                    : /*#__PURE__*/ _react.default.createElement(_bi.BiWindowClose, {
                        size: "1.5rem"
                    })
            )
        )
    );
};

var _default = Modal;
exports.default = _default;
