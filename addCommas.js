const addCommas = (num) => {
    let str = num.toString().split(".");
  
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

module.exports = addCommas;