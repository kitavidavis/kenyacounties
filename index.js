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
    
        counties.filter((item) => {
            return item.code == code;
        });
    
    },

    getSubCountiesByCountyCode: function(code){
        /**
         * @param code
         * @returns []
         */
        let obj = [];

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
            if(item.code == code){
                obj = item;
            }
        });

        return obj;
    },

    getSubCountiesByCountyName: function(name){
        /**
         * @param name
         * @returns []
         */

        let obj = [];

        if(typeof(name) !== 'string'){
            throw new TypeError("County name should explicitely be a string");
        }
    
        counties.map((item) => {
            if(item.name.toLowerCase() == name.toLowerCase()){
                obj = item.sub_counties;
            }
        })

        return obj;
    },
};
