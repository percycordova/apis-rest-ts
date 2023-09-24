import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

// timestamps: cuando se guarde un documento en la coleccion automaticamente se crean dos propiedades: una es la fecha de creacion y la otra es la fecha de actualizacion
// versionKey: mongoose guarda como una dato por version
const ItemSchema = new Schema<Car>(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    gas: { type: String, emun: ["gasoline", "electric"], required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);

export default ItemModel;
