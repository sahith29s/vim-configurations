import React, { useState, useEffect } from 'react';
import WebSocket from 'websocket';

const WebSocketComponent = () => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://your-websocket-server-url');
        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    useEffect(() => {
        if (socket) {
            socket.onopen = () => {
                console.log('WebSocket connection is open');
            };

            socket.onmessage = (event) => {
                console.log('Received message:', event.data);
                // Handle incoming data from the WebSocket server
            };

            socket.onclose = () => {
                console.log('WebSocket connection is closed');
            };
        }
    }, [socket]);

    const sendMessage = () => {
        if (socket) {
            const message = 'Hello, WebSocket server!';
            socket.send(message);
        }
    };

    return (
        <div>
            {/* Your component's JSX */}
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
};

export default WebSocketComponent;
