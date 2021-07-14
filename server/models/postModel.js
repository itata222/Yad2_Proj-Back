const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        propType: {
            type:String,
            required:true,
            trim:true
        },
        condition: {
            type:String,
            required:true,
            trim:true
        },
        city: {
            type:String,
            required:true,
            trim:true
        },
        street: {
            type:String,
            required:true,
            trim:true
        },
        houseNumber: {
            type:Number,
            min:[0,'House Number cant be negative']
        },
        floor: {
            type:Number,
            required:true,
            min:[0,'Floor level cant be negative']
        },
        floorsInBuilding: {
            type:Number,
            required:true,
            min:[0,'Floor level in the building cant be negative']
        },
        onBars: {
            type:Boolean,
        },
        neighborhood: {
            type:String,
            trim:true
        },
        area: {
            type:String,
            trim:true
        },
        rooms: {
            type:Number,
            required:true,
            min:[0,'Numbers of rooms cant be negative']
        },
        parking: {
            type:Number,
            min:0,
            max:3
        },
        balcony: {
            type:Number,
            min:0,
            max:3
        },
        airCondition: {
            type:Boolean,
        },
        mamad: {
            type:Boolean,
        },
        warehouse: {
            type:Boolean,
        },
        pandor: {
            type:Boolean,
        },
        furnished: {
            type:Boolean,
        },
        accessible: {
            type:Boolean,
        },
        elevator: {
            type:Boolean,
        },
        tadiran: {
            type:Boolean,
        },
        remaked: {
            type:Boolean,
        },
        kasher: {
            type:Boolean,
        },
        sunEnergy: {
            type:Boolean,
        },
        bars: {
            type:Boolean,
        },
        description: {
            type:String,
            trim:true
        },
        buildMr: {
            type:Number,
            min:[0,'buildMr cant be negative']
        },
        totalMr: {
            type:Number,
            required:true,
        },
        price: {
            type:Number,
        },
        entryDate: {
            type:Date,
            required:true,

        },
        immidiate: {
            type:Boolean,
        },
        photos: [
            {
                photos: {
                    type: Buffer
                }
            }
        ],
        video: {
            type: Buffer
        },
        contactName: {
            type:String,
            required:true,
            trim:true
        },
        contactPhone: {
            type:String,
            required:true,
            trim:true
        },
        contactEmail: {
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;