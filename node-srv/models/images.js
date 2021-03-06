/**
 * @Author: acexy@thankjava.com
 * 2018/6/19
 * @Description:图片模块数据库
 */
const baseModel = require('./basic.js');

class images extends baseModel {
    Schema() {
        return {
            userId: {type: String, required: true},
            url: {type: String, required: true},
            // 当图片不允许访问时将返回该字段对应当资源展示
            violationUrl: {type: String, require: false},
            urn: {type: String, unique: true},
            thumbUrn: {type: String, unique: true},
            sortId: {type: String, required: true},
            tags: {type: Array, required: false},
            // 00 图片状态正常
            // 01 违规 成人图片
            status: {type: String, default: '00'},
            // 图片系统自动分级
            sysScyCode: {type: Number},
            // everyone | teen | adult
            sysScyLevel: {type: Number, default: 1},
            sysScyLevelTime: {type: Number, required: false},
            sysScyLevelDetail: {type: String, required: false},
            confirmScyLevel: {type: String, required: false},
            confirmScyLevelTime: {type: Number, required: false},
            confirmedByUser: {type: Boolean, required: false},
        };
    };

    SchemaName() {
        return 'images';
    };

    save(images) {
        return new this.model(images).save();
    }

    saveMany(imagesArray) {
        return this.model.insertMany(imagesArray);
    }

    selectByPage(page) {
        return baseModel.selectByPage(page, this.model);
    }

    selectOwnByIds(ids, userId) {
        let condition = {userId: userId};
        if (typeof ids === 'string') {
            condition._id = ids;
        } else if (Array.isArray(ids)) {
            condition._id = {
                '$in': ids
            };
        } else {
            return false;
        }
        return this.model.find(condition).exec();
    }

    removeOwnManyById(ids, userId) {
        let condition = {userId: userId};
        if (typeof ids === 'string') {
            condition._id = ids;
        } else if (Array.isArray(ids)) {
            condition._id = {
                '$in': ids
            };
        } else {
            return false;
        }
        return this.model.deleteMany(condition).exec();
    }

    selectByUrn(urn) {
        return this.model.findOne({urn: urn}).exec();
    }

    selectById(id) {
        return this.model.findOne({_id: id}).exec();
    }

    selectByUrnOwn(urn, userId) {
        return this.model.findOne({urn: urn, userId: userId}).exec();

    }

    updateById(update, id) {
        return this.model.updateOne({_id: id}, update).exec();
    }

    selectByCondition(condition) {
        return this.model.find(condition).exec();
    }

    selectByConditionOne(condition) {
        return this.model.findOne(condition).exec();
    }

    updateByCondition(update, condition) {
        return this.model.updateOne(condition, update).exec();
    }

}

module.exports = new images();