// port the server listens on
const PORT = process.env.PORT || 3000;
const server = require("fastify")();

server.get("/", async (req, repl) => {
    return "Hi!";
});

const start = async () => {
    try {
        await server.listen({ host: "0.0.0.0", port: PORT });

        console.log(`Listening at http://0.0.0.0:${PORT}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();