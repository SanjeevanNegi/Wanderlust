const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        type : String,
        default :
        "https://cdn.stocksnap.io/img-thumbs/960w/ocean-beach_ZJXS6NHIC1.jpg",
        set : (v)=> v === "" ? "https://cdn.stocksnap.io/img-thumbs/960w/ocean-beach_ZJXS6NHIC1.jpg" : v,
    },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review",
        }
    ],
});

listingSchema.post("findOneAndDelete",async (listing)=> {
    if(listing){
    await Review.deleteMany({ _id: {$in : listing.reviews}});
    }
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;