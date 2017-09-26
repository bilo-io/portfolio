export const getCookie = (name) => {
    let ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        console.log({c})
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

export const setCookie = (cookieName, cookieValue, cookieExpiryHours=0.1, cookiePath='/') => {
    let d = new Date();
    d.setTime(d.getTime() + (cookieExpiryHours * 60 * 60 * 1000));
    let cookie = `${cookieName}=${cookieValue};${d};path=${cookiePath}`;
    console.log({ cookie });
    document.cookie = cookie;
}