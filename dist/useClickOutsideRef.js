"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = useClickOutsideRef;

var _react = require("react");

function useClickOutsideRef(callback, initialValue = null) {
    const elementRef = (0, _react.useRef)(initialValue);
    (0, _react.useEffect)(() => {
        function handler(event) {
            var _elementRef$current;

            if (
                !(
                    (_elementRef$current = elementRef.current) !== null &&
                    _elementRef$current !== void 0 &&
                    _elementRef$current.contains(event.target)
                )
            ) {
                callback();
            }
        }

        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, [callback]);
    return elementRef;
}
