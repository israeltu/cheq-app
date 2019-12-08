const Sequelize =require ("sequelize");
const db=require('../dao/db');


module.exports =db.sequelize.define(
    'keywordlist',{
        id:{
            type: Sequelize.INTEGER(11),primaryKey: true,
            autoIncrement:true,allowNull: false
        },
        user_id:{
            type: Sequelize.INTEGER(11),allowNull: true,
            defaultValue:null
        },
        name:{
            type: Sequelize.STRING(45),allowNull: true,
            defaultValue:null
        },
        description:{
            type: Sequelize.STRING(500),allowNull: true,
            defaultValue:null
        },
        keywords:{
            type: Sequelize.JSON,allowNull: true,
            defaultValue:null
        },
        number_of_keywords:{
            type: Sequelize.INTEGER(11),
            allowNull: false
        },
        language:{
            type: Sequelize.STRING(45),allowNull: true,
            defaultValue:null
        },
        number_of_keywords:{
            type: Sequelize.INTEGER(11),allowNull: false,
            defaultValue:null
        },
        is_private:{
            type: Sequelize.INTEGER(11),
            allowNull: true,defaultValue: 0
        },
        last_modified: {type:Sequelize.DATE,defaultValue: Sequelize.NOW,
                       allowNull: true
        },
        origin_keywords:{
            type: Sequelize.JSON,allowNull: true,
            defaultValue:null
        },
        version:{
            type: Sequelize.STRING(45),allowNull: false,
            defaultValue:0
        },
        origin_version:{
            type: Sequelize.STRING(45),allowNull: false,
            defaultValue:0
        }
    },{timestamps: false}

);


//Table structure
/*
`id` int(11) NOT NULL AUTO_INCREMENT,
`user_id` int(11) DEFAULT NULL,
`name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
`description` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
`keywords` json DEFAULT NULL,
`number_of_keywords` int(11) DEFAULT NULL,
`language` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
`is_private` int(11) DEFAULT '0',
`last_modified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`origin_keywords` json DEFAULT NULL,
`version` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
`origin_version` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
*/