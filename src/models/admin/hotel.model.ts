import mongoose, { Document, Model, Schema } from 'mongoose';

export interface HotelDoc extends Document {
  hotelname: string;
  image1: string;
  image2:string;
  image3:string;
  location:string;
  bedrooms:number;
  adults:number;
  kids:number;
  price:number;
 
}

const hotelSchema = new Schema<HotelDoc>({
  hotelname: {
    type: String,
    required:true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  image3: {
    type: String,
    required: true,
  },
  bedrooms:{
    type:Number,
    required:true,
  },
  kids:{
    type:Number,
    required:true,
  },
  adults:{
    type:Number,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  location:{
    type:String,
    required:true,
  }

});

const HotelModel: Model<HotelDoc> = mongoose.model('Hotel', hotelSchema);

export default HotelModel;