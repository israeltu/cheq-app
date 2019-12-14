const Sequelize = require("sequelize");
const db = require("../dao/db");

module.exports = db.sequelize.define(
  "vast",
  {
    id: {
      type: Sequelize.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(200),
      allowNull: false,
      defaultValue: null
    },
    date_created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },

    description: {
      type: Sequelize.STRING(200),
      allowNull: true,
      defaultValue: null
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    continue_on_click: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    language: {
      type: Sequelize.STRING(3),
      allowNull: true,
      defaultValue: "eng"
    },
    hide_timer: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    timer_location: {
      type: Sequelize.STRING(13),
      allowNull: true,
      defaultValue: "bottom"
    },
    skip_button_location: {
      type: Sequelize.STRING(13),
      allowNull: true,
      defaultValue: "middle_right"
    },
    hide_all_ui: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    hide_play_button: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    hide_skip_button: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    fraud: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    brand_safety: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    network_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      defaultValue: null
    },
    ad_tag_url: {
      type: Sequelize.STRING(500),
      allowNull: true,
      defaultValue: null
    },
    width: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      defaultValue: null
    },
    height: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      defaultValue: null
    },
    duration: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
      defaultValue: null
    },
    whitelist_keywords: {
      type: Sequelize.STRING(600),
      allowNull: true,
      defaultValue: null
    },
    serve_on_unmeasurable: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_branded: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    private_brand_safety: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  },
  { timestamps: false }
);

//Table structure
/*
`id` int(10) NOT NULL AUTO_INCREMENT,
`name` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
`date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
`description` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
`active` tinyint(1) DEFAULT '0',
`continue_on_click` tinyint(1) DEFAULT '0',
`language` varchar(3) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'eng',
`hide_timer` tinyint(1) DEFAULT '0',
`timer_location` varchar(13) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'bottom',
`skip_button_location` varchar(13) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT 'middle_right',
`hide_all_ui` tinyint(1) DEFAULT '0',
`hide_play_button` tinyint(1) DEFAULT '0',
`hide_skip_button` tinyint(1) DEFAULT '0',
`fraud` tinyint(1) DEFAULT '0',
`brand_safety` tinyint(1) DEFAULT '0',
`network_id` int(10) NOT NULL,
`ad_tag_url` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
`width` smallint(6) NOT NULL,
`height` smallint(6) NOT NULL,
`duration` smallint(6) NOT NULL,
`whitelist_keywords` varchar(600) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
`serve_on_unmeasurable` tinyint(1) NOT NULL DEFAULT '1',
`is_branded` tinyint(1) DEFAULT '1',
`private_brand_safety` tinyint(1) DEFAULT '1',
*/
