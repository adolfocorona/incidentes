import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Ingresa un correo electrónico válido')
      .required('Correo Electrónico es requerido'),
    password: yup
      .string()
      .min(5, 'La contraseña es muy corta')
      .max(1000, 'La contraseña es muy larga')
      .required('Contraseña es requerida'),
});