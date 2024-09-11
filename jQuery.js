function $(selector) {
    const element = document.querySelector(selector)

    const css = (property, value) => {
        if (!element) return;
        if (value !== undefined) {
            element.style[property] = value
            return element
        } else {
            return element.style[property] ? element.style[property] : undefined
        }
    }
    if (element) {
        element.css = css
        return element
    } else {
        console.log("HERE")
        const returnObj = {};
        returnObj.css = () => returnObj;
        return returnObj;
    }
}
console.log($('no-such-thing').css('color'))
