/**
 * 
 * @param {string} key 
 * @returns 
 */

 function loadData(key){
    try {
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    } catch (error) {
        return undefined
    }
}


/**
 * 
 * @param {string} key 
 * @param {any} data 
 */

function saveData(key,data){
    localStorage.setItem(key, JSON.stringify(data))
}

export {loadData, saveData}