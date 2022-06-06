/**
 * kenyacounties <https://github.com/kitavidavis/kenyacounties>
 * 
 * Copyright (c) 2022-present, David Kitavi
 * Released under the MIT License
 */

const counties = require('./counties.json')

module.exports = {

    getAll: function(){
        /**
         * @returns []
         */

        return counties;
    },

    getCountyByCode: function(code){
        /**
         * @param code
         * @returns {}
         */

        if(typeof(code) !== 'number'){
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
    },

    getSubCountiesByCountyCode: function(code){
        /**
         * @param code
         * @returns []
         */

        if(typeof(code) !== 'number'){
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
    },

    getSubCountiesByCountyName: function(name){
        /**
         * @param name
         * @returns []
         */

        if(typeof(name) !== 'string'){
            throw new TypeError("County name should explicitely be a string");
        }
    
        counties.map((item) => {
            if(item.name.toLowerCase() === name.toLowerCase()){
                return item.sub_counties;
            }
        })
    },
};
