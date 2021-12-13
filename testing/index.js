const converstion = (amount) => {
    if (amount == 1) {
        return `${amount} byte`
    }
    else if (amount < 1000) {
        return `${amount} bytes`
    }
    else if (1000 <= amount && amount < 10000) {
        let kb = (amount / 1000).toFixed(3)
        return `${kb} kb`
    }
    else if (10000 <= amount && amount < 100000) {
        let mb = (amount / 10000).toFixed(3)
        return `${mb} Mb`
    }
    else if (100000 <= amount && amount < 1000000) {
        let gb = (amount / 100000).toFixed(3)
        return `${gb} Gb`
    } else if(amount < 0){
        return `${0} bytes`
    }
}

module.exports = converstion