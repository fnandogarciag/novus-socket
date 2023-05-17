import express from 'express';

import Georeferencia from '../models/georeferencia.model.js';
import Usuario from '../models/usuario.model.js';
import Solicitud from '../models/solicitud.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const georeferencias = await Usuario.findAll({
      attributes: ['nameUsuario'],
      where: {
        roleId: 2,
      },
      include: [
        {
          model: Georeferencia,
          attributes: ['lat', 'lng', 'coordenadasRef', 'fechaRegistro'],
          order: [['createdAt', 'DESC']],
          limit: 1,
        },
      ],
    });
    res.json({
      count: georeferencias.length,
      results: georeferencias,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const georeferencias = await Georeferencia.findAll({
      where: {
        userId: id,
      },
      order: [['createdAt', 'ASC']],
      raw: true,
    });
    const solicitudes = await Solicitud.findAll({
      where: {
        userId: id,
      },
      order: [['createdAt', 'DESC']],
      raw: true,
    });
    res.json({
      georefs: {
        count: georeferencias.length,
        results: georeferencias,
      },
      solicitudes: {
        count: solicitudes.length,
        results: solicitudes,
      },
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

export default router;
