/**
 * kenyacounties <https://github.com/kitavidavis/kenyacounties>
 * 
 * Copyright (c) 2022-present, David Kitavi
 * Released under the MIT License
 */

import counties from './counties';

module.exports = function(){
    return counties;
}

module.exports.getCountyByCode = function(code){
    if(typeof(code) !== number){
        throw new TypeError("County code must be a number!");
    }

    if(code < 1 ){
        throw new RangeError("Code should be in a range of 0 - 47");
    }

    if(code > 47){
        throw new RangeError("Code should be in a range of 0-47");
    }

    counties.map((item) => {
        if(item.code === code){
            return item;
        }
    });

    return null;
}

module.exports.getSubCountiesByCountyCode = function(code){
    if(typeof(code) !== number){
        throw new TypeError("County code must be a number!");
    }

    if(code < 1 ){
        throw new RangeError("Code should be in a range of 0 - 47");
    }

    if(code > 47){
        throw new RangeError("Code should be in a range of 0-47");
    }

    counties.map((item) => {
        if(item.code === code){
            return item.sub_counties;
        }
    });
}

module.exports.getSubCountiesByCountyName = function(name){
    if(typeof(name) !== string){
        throw new TypeError("County name should explicitely be a string");
    }

    counties.map((item) => {
        if(item.name.toLowerCase() === name.toLowerCase()){
            return item.sub_counties;
        }
    })
}