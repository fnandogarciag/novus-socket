import { validationResult, check } from "express-validator";

const validateData = () => {
  return [
    check("nombre").notEmpty().isString(),
    check("edad").notEmpty().isInt({ min: 18, max: 99 }),
    check("correo").isEmail()
  ];
};
const data = {
  nombre: null,
  edad: 4,
  correo: "hola"
};
const errors = validationResult({ body: data }, validateData());
if (!errors.isEmpty()) {
  console.log(errors.array());
} else {
  console.log("todo bien");
}
