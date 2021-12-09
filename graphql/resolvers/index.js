const authResolver = require("./auth");
const bookingsResolver = require("./bookings");
const eventsResolver = require("./events");

const rootResolver = {
  ...authResolver,
  ...bookingsResolver,
  ...eventsResolver,
};

module.exports = rootResolver;
