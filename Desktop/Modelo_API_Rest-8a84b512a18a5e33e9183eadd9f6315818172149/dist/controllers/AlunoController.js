"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Picture = require('../models/Picture'); var _Picture2 = _interopRequireDefault(_Picture);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Picture2.default, 'id', 'DESC']],
      include: {
        model: _Picture2.default,
        attributes: ['filename', 'url'],
      },
    });
    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Picture2.default, 'id', 'DESC']],
        include: {
          model: _Picture2.default,
          attributes: ['filename', 'url'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno not found.'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(((err) => err.messages)),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = _Aluno2.default.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(((err) => err.messages)),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno not found.'],
        });
      }

      const alunoAtualizado = aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(((err) => err.messages)),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno not found.'],
        });
      }
      await aluno.destroy();

      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(((err) => err.messages)),
      });
    }
  }
}
exports. default = new AlunoController();
