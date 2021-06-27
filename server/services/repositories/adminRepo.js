const Admin = require('../../models/adminModel');

const createAdmin = async (adminObj) => {
    return new Promise((resolve, reject) => {
        try {
            const admin = new Admin(adminObj);
            const token = await admin.generateAuthToken();
            resolve({ admin, token });
        } catch (e) {
            reject(e.message)
        }
    })

}

module.exports = { createAdmin };