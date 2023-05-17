/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login Requerido.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuario inválido.'],
      });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
