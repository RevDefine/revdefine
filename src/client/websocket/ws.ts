import EventBus, { REvent } from './eventBus';

const NORMALCLOSECODE = 1000;

export default class RnodeWebsocket {
  public ws!: WebSocket;
  public url: string;
  public constructor(url: string) {
    this.url = url;
  }

  public connect () {
    if (this.ws === undefined || this.ws.readyState === WebSocket.CLOSED) {
      this.ws = new WebSocket(this.url);
      this.onEvents();
    } else {
      throw Error('connection not closed');
    }
  }

  public close () {
    if (this.ws === undefined) {
      return
    } else {
      if (this.ws.OPEN || this.ws.CONNECTING) {
        this.ws.close()
      } else {
        return
      }
    }
  }

  public reconnect () {
    if (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) {
      this.ws.close(NORMALCLOSECODE);
    }
    this.connect();
  }

  private onMessage (event: MessageEvent) {
    const data = JSON.parse(event.data);
    const eventType = data.event;
    const payload = data.payload;
    if (eventType == 'block-added') {
      EventBus.triggerEvent(REvent.BlockAdded, payload);
    }
  }

  public onEvents () {
    this.ws.onopen = function (event: Event) {
      EventBus.triggerEvent(REvent.Open, {});
    };

    this.ws.onclose = function (event: Event) {
      EventBus.triggerEvent(REvent.Close, {});
    };

    this.ws.onerror = function (event: Event) {
      EventBus.triggerEvent(REvent.Error, {});
    };

    this.ws.onmessage = this.onMessage;
  }
}
