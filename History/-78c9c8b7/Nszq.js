const bcryptjs = require("bcryptjs");
console.log("sahith");
(
    async () => {
        try {
            const password = await bcryptjs.hash("sahith", 20);
            console.log(password);
        }
        catch (error) {

            console.log(error);

        };
    }
)();