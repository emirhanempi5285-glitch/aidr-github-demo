module.exports = {

    jwt: {

        secret: process.env.JWT_SECRET || "change-this-secret",

        expiresIn: "8h"

    },

    passwordPolicy: {

        minimumLength: 12,

        requireNumbers: true,

        requireUppercase: true,

        requireSpecialCharacters: true

    }

};