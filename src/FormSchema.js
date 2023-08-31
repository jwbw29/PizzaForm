import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required().min(2, "name must be at least 2 characters"),
  size: yup.string().required("Please select a size"),
  sauce: yup
    .string()
    .required()
    .oneOf(["red", "bbq", "alfredo"], "Please choose at least one option"),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  spicy: yup.boolean(),
  chicken: yup.boolean(),
  peppers: yup.boolean(),
  olives: yup.boolean(),
  pineapple: yup.boolean(),
  special: yup.string().max(50, "Instructions must be less than 50 characters"),
});

export default formSchema;
