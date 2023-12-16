const getJwtToken = require("../../helpers/getJwtToken");

const cookieToken = (user , res) => {
    const token = getJwtToken(user.id);
    const 
}