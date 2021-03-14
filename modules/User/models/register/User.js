const {DataTypes} = require('sequelize')

const sequelize = require('../../models').sequelize;
module.exports=(sequelize,DataTypes)=>{

    const User = sequelize.define('User',{
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,  
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false
        },
        Phone:{
            type: DataTypes.STRING,
            allowNull:true
        },
       
        
    },{
        Timestame: true
    })
    return User
}