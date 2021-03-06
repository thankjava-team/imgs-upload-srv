/**
 * @Author: acexy@thankjava.com
 * @Date: 2019-04-25
 * @Description: 处理sort分类的mongo数据层
 **/
const baseModel = require('./basic.js');

class sort extends baseModel {

    Schema() {
        return {
            sortName: {type: String, required: true},
            userId: {type: String, required: true},
            shared: {type: Boolean, default: false},
            shareId: {type: String, required: false}
        };
    };

    SchemaName() {
        return 'sorts';
    };

    save(sort) {
        return new this.model(sort).save();
    }

    selectById(id) {
        return this.model.findOne({_id: id}).exec();
    }

    selectOwnById(sortId, userId) {
        return this.model.findOne({_id: sortId, userId: userId}).exec();
    }

    updateOwnById(condition, sortId, userId) {
        return this.model.updateOne({_id: sortId, userId: userId}, condition).exec();
    }

    removeOwnById(sortId, userId) {
        return this.model.deleteOne({_id: sortId, userId: userId}).exec();
    }

    selectOneByUserId(userId) {
        return this.model.findOne({userId: userId}).exec();
    }

    selectByCondition(condition) {
        return this.model.find(condition).exec();
    }

    /**
     * 删除已经分享的分类
     * @param sortId
     * @returns {*|RegExpExecArray}
     */
    updateForDeleteShareId(sortId) {
        return this.model.updateOne({_id: sortId}, {shared: false, "$unset": {shareId: ""}}).exec();
    }
}

module.exports = new sort();