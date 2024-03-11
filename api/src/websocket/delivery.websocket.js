const WebSocket = require('ws');
const deliveryService = require('../services/delivery.service')

const server = new WebSocket.WebSocketServer({ port: 9008 });

server.on('connection', (socket) => {
    console.log(`Je suis rentrer looo .................`);

    socket.on('message', async (message) => {
        let broadcastMessage = '';
        const data = JSON.parse(message);
        if (data['event'] === 'location_changed') {
            broadcastMessage = await deliveryService.locationChanged(data['delivery_id'], data['location']);
        } else if (data['event'] === 'status_changed') {
            broadcastMessage = await deliveryService.statusChanged(data['delivery_id'], data['status']);
        }
        console.log(`data['delivery_id'] : ${data['delivery_id']}`);
        console.log(`data['location'] : ${data['location']}`);
        console.log(`broadcastMessage : ${broadcastMessage}`);

        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(broadcastMessage);
            }
        });
    });

    socket.on('close', () => {
        console.log('Connexion WebSocket fermée');
    });
});
