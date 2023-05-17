import Aluno from '../models/Aluno';
import Picture from '../models/Picture';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Picture, 'id', 'DESC']],
      include: {
        model: Picture,
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

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Picture, 'id', 'DESC']],
        include: {
          model: Picture,
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
      const aluno = Aluno.create(req.body);

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

      const aluno = await Aluno.findByPk(id);

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

      const aluno = await Aluno.findByPk(id);

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
export default new AlunoController();
