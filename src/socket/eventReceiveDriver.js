import EVENTS from './events.js';

import Georeferencia from '../models/georeferencia.model.js';

const middlewareReceiveDriver = (socket) => {
  socket.use((data, next) => {
    next();
  });
};

const eventReceiveDriver = (io, socket) => {
  socket.on(EVENTS.LISTENDRIVER, async (data) => {
    middlewareReceiveDriver(socket);
    try {
      const geo = await Georeferencia.create({
        latRef: data.lat,
        longRef: data.long,
        coordenadasRef: data.description,
        fechaRegistro: data.time,
        userId: socket.data.id,
      });
      io.in('admin').emit(EVENTS.SENDTOADMIN, {
        id: socket.data.id,
        nameUsuario: socket.data.nameUsuario,
        ...geo.dataValues,
      });
    } catch (error) {
      console.log(error);
    }
  });
};

export default eventReceiveDriver;
