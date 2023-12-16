const bcrypt = require("bcrypt");

(
    async () => {
        try {
            const password = await bcrypt.hash("sahith" , 10);
            console.log(password);
        }
        catch (error) {

            console.log(error);

        };
    }
)();