'use strict';

class Model {
    constructor(schema) {
        this.schema = schema;
    }

    /**
       * retrieve a record or all 
       * @param {string} _id 
       */
    get(_id) {
        let objQuwey = _id ? { _id } : {};
        // {} return all data , promise 
        return this.schema.find(objQuwey);
    } // end of get method 


    /**
       * add new record 
       * @param {object} record 
       */
    create(record) {
        let newRec = new this.schema(record);
        return newRec.save();
    } // end of create method 

    /**
       * update an existing record by ID 
       * @param {string} _id 
       * @param {object} record 
       */
    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record, { new: true });
    } // end of update method 

    /**
       * remove an revord by ID 
       * @param {string} _id 
       */
    delete(_id) {
        return this.schema.findByIdAndDelete(_id);
    } // end of delete method 

} // end of model class 

module.exports = Model;