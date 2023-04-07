import { DEBUG } from "./constants";

export const websocket = DEBUG
    ? new WebSocket((location.protocol == "https:" ? "wss" : "ws") + "://" + location.host)
    : null;
