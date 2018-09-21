// const session = require('electron').remote.session;
// const session = require('electron')
const storage = require('electron-json-storage');
const session = require('electron').remote.session
const dataPath = storage.getDataPath();
storage.setDataPath(dataPath);
/*export function getCookies(name) {
    session.defaultSession.cookies.get({ url:'renguCom', name: name }, function (error, cookies) {
        return cookies
    });
};

export function setCookies(name, value) {
    const cookie = {url: 'http://www.github.com', name: name, value: value}
    session.defaultSession.cookies.set(cookie, (error) => {
    });
    session.defaultSession.cookies.flushStore(()=>{})
};*/
export function testPath() {
    const dataPath = storage.getDataPath();
    console.log(dataPath);
}
export function setStorage(name, value){
    storage.set(name, { value: value }, function(error) {
        if (error) throw error;
    })
}
export function getStorage(name){
    storage.get(name, function(error, data) {
        return(data.value)
    })
}
