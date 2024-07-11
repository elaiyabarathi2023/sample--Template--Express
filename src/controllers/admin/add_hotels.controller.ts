import { Request, Response } from "express";
import HotelModel from "../../models/admin/hotel.model";

export default class HotelController {
  async create(req: Request, res: Response) {
    console.log("files",req.files);

    const { hotelname, image1, image2, image3, bedrooms, adults, kids, price,fileName } = req.body;

    // Validation checks for required fields
    if (!hotelname || !image1 || !image2 || !image3 || !bedrooms || !adults || !kids || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const createHotel = await HotelModel.create({
        hotelname,
        image1,
        image2,
        image3,
        bedrooms,
        adults,
        kids,
        price,
      });

      res.status(201).json({
        message: "Hotel created successfully",
        hotel: createHotel,
      });
    } catch (err) {
      console.error('Error creating Hotel:', err);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}
