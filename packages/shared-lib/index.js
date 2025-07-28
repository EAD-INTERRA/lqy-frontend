"use strict";
exports.__esModule = true;
exports.getWithExpiry = exports.setWithExpiry = exports.store = void 0;
var vuex_1 = require("vuex");
exports.store = (0, vuex_1.createStore)({
    state: {
        authToken: null,
        isLoggedIn: false
    },
    mutations: {
        SET_AUTH_TOKEN: function (state, token) {
            state.authToken = token;
            state.isLoggedIn = Boolean(token);
        }
    },
    actions: {
        login: function (_a, _b) {
            var commit = _a.commit;
            var token = _b.token, expiresIn = _b.expiresIn;
            setWithExpiry('authToken', token, expiresIn * 1000); // expiresIn is in seconds
            commit('SET_AUTH_TOKEN', token);
        },
        logout: function (_a) {
            var commit = _a.commit;
            localStorage.removeItem('authToken');
            commit('SET_AUTH_TOKEN', null);
        },
        checkAuth: function (_a) {
            var commit = _a.commit;
            var token = getWithExpiry('authToken');
            if (!token) {
                window.location.href = 'https://your-auth-app-url/login';
            }
        }
    }
});
function setWithExpiry(key, value, ttl) {
    var now = new Date();
    var item = {
        value: value,
        expiry: now.getTime() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
    setTimeout(function () {
        localStorage.removeItem(key);
    }, ttl);
}
exports.setWithExpiry = setWithExpiry;
function getWithExpiry(key) {
    var itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    var item = JSON.parse(itemStr);
    var now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}
exports.getWithExpiry = getWithExpiry;
