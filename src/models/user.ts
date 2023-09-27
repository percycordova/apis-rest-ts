import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

// timestamps: cuando se guarde un documento en la coleccion automaticamente se crean dos propiedades: una es la fecha de creacion y la otra es la fecha de actualizacion
// versionKey: mongoose guarda como una dato por version
const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    description: { type: String, default: " Ingrese una descripción " },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);

export default UserModel;
