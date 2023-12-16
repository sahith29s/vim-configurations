const bcryptjs = require("bcryptjs");
(
    async () => {
        const password = await bcryptjs.hash("sahith", 20);
        console.log(password);
    }
)();