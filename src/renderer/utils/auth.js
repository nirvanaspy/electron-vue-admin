import Cookies from 'js-cookie'
import getCookies from './cookies'
import setCookies from './cookies'

const TokenKey = 'Admin-Token'

/*export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function getRefreshToken() {
  return Cookies.get('RefreshTokenKey')
}
export function setRefreshToken(token) {
  return Cookies.set('RefreshTokenKey', token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getIp() {
  return Cookies.get('ip')
}

export function getPort() {
  return Cookies.get('port')
}

export function setUserId(id) {
  return Cookies.set('userId', id)
}

export function removeUserId(id) {
  return Cookies.remove('userId')
}

export function removeProId(id) {
  return Cookies.set('projectId')
}

export function setExpire(timestamp) {
  return Cookies.set('timestamp', timestamp)
}

export function getExpire(timestamp) {
  return Cookies.get('timestamp')
}

export function removeExpire(timestamp) {
  return Cookies.remove('timestamp')
}

export function setExpire2(reTimestamp) {
  return Cookies.set('reTimestamp', reTimestamp)
}

export function getExpire2(reTimestamp) {
  return Cookies.get('reTimestamp')
}

export function removeExpire2(reTimestamp) {
  return Cookies.remove('reTimestamp')
}*/

const storage = require('electron-json-storage');
const dataPath = storage.getDataPath();
storage.setDataPath(dataPath);
export function testPath() {
    const dataPath = storage.getDataPath();
    console.log(dataPath);
}
function setStorage(name, value){
    storage.set(name, { value: value }, function(error) {
        if (error) throw error;
    })
}
function getStorage(name){
    storage.get(name, function(error, data) {
        return(data.value)
    })
}
export function getToken() {
    return getStorage(TokenKey)
}
export function setToken(token) {
    return setStorage(TokenKey, token)
}
export function getRefreshToken() {
    return getStorage('RefreshTokenKey')
}
export function setRefreshToken(token) {
    return setStorage('RefreshTokenKey', token)
}
export function removeToken() {
    return Cookies.remove(TokenKey)
}
export function getIp() {
    return getStorage('ip')
}

export function getPort() {
    return getStorage('port')
}

export function setUserId(id) {
    return setStorage('userId', id)
}

export function getTheUserId() {
    return getStorage('userId')
}

export function removeUserId(id) {
    return Cookies.remove('userId')
}

export function removeProId(id) {
    return Cookies.remove('projectId')
}

export function setExpire(timestamp) {
    return setStorage('timestamp', timestamp)
}

export function getExpire(timestamp) {
    return getStorage('timestamp')
}

export function removeExpire(timestamp) {
    return Cookies.remove('timestamp')
}

export function setExpire2(reTimestamp) {
    return setStorage('reTimestamp', reTimestamp)
}

export function getExpire2(reTimestamp) {
    return getStorage('reTimestamp')
}

export function removeExpire2(reTimestamp) {
    return Cookies.remove('reTimestamp')
}
