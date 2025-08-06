const GREETINGS = [
    'Hello world!',
    "Hi",
    'terraqueos',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
