const mongoose = require ("mongoose");

const ListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content:[{
      name:{
          type: String
      },
      url:{
          type:String
      }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("List", ListSchema);