'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users',{
      user_id:{
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
        },
      role_id:{
        allownull:false,
        type:Sequelize.INTEGER,
        onDelete:"CASCADE",
        onUpdate:"RESTRICT",
        reference:{
          model:"roles",
          key:"role_id"
        }
        },
      user_name:{
        type:Sequelize.STRING,
        },
      user_email:{
        type:Sequelize.STRING
        },
      user_password:{
        type:Sequelize.STRING
        },
      user_mobile_no:{
        type:Sequelize.STRING
        },
      user_address:{
        type:Sequelize.STRING
        },
      profile_picture:{
        type:Sequelize.STRING
        }    
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
