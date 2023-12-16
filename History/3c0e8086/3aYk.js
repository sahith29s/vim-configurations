const getJwtToken = require("../../helpers/getJwtToken");

const cookieToken = (user , res) => {
    const token = getJwtToken(user.id);
    const options = {
        expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    }
}