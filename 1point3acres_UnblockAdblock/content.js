/**
 * Remove DOM elements with the given class name
 * @param   {string}    className   class name of the elements to be removed.
 * @returns {boolean}               true if elements are removed; false if elements are not found.
 */
function removeElementsByClassName(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        Array.from(elements).forEach(
            function (e, i, a) {
                e.remove();
            }
        );
        return true;
    }

    return false;
}

/**
 * Remove a property of the style on an DOM element.
 * @param   {object}    element         element with style.
 * @param   {string}    propertyName    name of the style property to be removed.
 * @returns {boolean}                   true if property on the style is removed; false if the property is not found.
 */
function removeStyleOnElement(element, propertyName) {
    if (element.style.getPropertyValue(propertyName).length > 0) {
        element.style.removeProperty(propertyName);
        return true;
    }

    return false;
}

window.onload = () => {
    // Check every 100ms until element with style 'fc-ab-root' is removed.
    var abExists = setInterval(() => {
        if (removeElementsByClassName('fc-ab-root')) {
            clearInterval(abExists);
        }
    }, 100);

    // Check every 100ms until element with style 'c-whitelist-root' is removed.
    var fcExists = setInterval(() => {
        if (removeElementsByClassName('fc-whitelist-root')) {
            clearInterval(fcExists);
        }
    }, 100);

    // Check every 100ms until 'overflow' property on the document body style is removed.
    var bsExists = setInterval(() => {
        if (removeStyleOnElement(document.body, 'overflow')) {
            clearInterval(bsExists);
        }
    }, 100);
}
