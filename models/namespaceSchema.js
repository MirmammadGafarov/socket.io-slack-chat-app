const { Schema, model } = require("mongoose");

const namespaceSchema = new Schema({
  name: String,
  path: String,
  logo: String,
  rooms: [
    {
      name: String,
      messages: [],
    },
  ],
});

module.exports = model("Namespace", namespaceSchema);
