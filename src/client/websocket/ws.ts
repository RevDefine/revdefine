import EventBus, { REvent } from './eventBus';

const NORMALCLOSECODE = 1000;

export default class RnodeWebsocket {
  public ws!: WebSocket;
  public url: string;
  public constructor(url: string) {
    this.url = url;
    this.connect(url);
  }

  public connect(url: string) {
    if (this.ws === undefined || this.ws.readyState === WebSocket.CLOSED ) {
      this.ws = new WebSocket(url);
      this.onEvents()
    } else {
      throw Error('connection not closed');
    }
  }

  public reconnect() {
    if (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) {
      this.ws.close(NORMALCLOSECODE);
    }
    this.connect(this.url);
  }

  private onMessage(event: Event) {}

  public onEvents() {
    this.ws.onopen = function(event: Event) {
      EventBus.triggerEvent(REvent.Open);
    };

    this.ws.onclose = function(event: Event) {
      EventBus.triggerEvent(REvent.Close);
    };

    this.ws.onerror = function(event: Event) {
      EventBus.triggerEvent(REvent.Error);
    };

    this.ws.onmessage = this.onMessage;
  }
}
