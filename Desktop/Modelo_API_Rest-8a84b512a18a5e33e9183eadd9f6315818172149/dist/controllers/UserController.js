"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async create(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const user = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      const { idUser, nome, email } = user;
      return res.json({ idUser, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        console.log(user);
        return res.status(400).json({
          errors: ['Úsuario não encontrado'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        console.log(user);
        return res.status(400).json({
          errors: ['Úsuario não encontrado'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}
exports. default = new UserController();
