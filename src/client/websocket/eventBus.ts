import Vue from 'vue';

export enum REvent {
  Open = 'OPEN',
  Close = 'CLOSE',
  Error = 'ERROR'
}

export type EventCallback = (event: REvent, vm: Vue) => void;

export interface EventListener {
  callback: EventCallback;
  vm: Vue;
}

class EventBus {
  private listeners: Map<REvent, EventListener[]>;
  public constructor() {
    this.listeners = new Map();
  }

  public addListener(event: REvent, callback: EventCallback, vm: Vue) {
    this.listeners.has(event) || this.listeners.set(event, []);
    const listeners = this.listeners.get(event) as EventListener[];
    listeners.push({ callback: callback, vm: vm });
  }

  public removeListener(event: REvent, callback: EventCallback, vm: Vue) {
    let listeners = this.listeners.get(event);
    let index;

    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, index) => {
        if (typeof listener.callback === 'function' && listener.callback === callback && listener.vm === vm) {
          i = index;
        }
        return i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(event, listeners);
        return true;
      }
    }
    return false;
  }

  public triggerEvent(event: REvent) {
    const listeners = this.listeners.get(event);
    if (listeners && listeners.length) {
      listeners.forEach(callback => {
        callback.callback(event, callback.vm);
      });
    }
  }
}

export default new EventBus();
