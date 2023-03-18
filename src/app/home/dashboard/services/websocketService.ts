import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const CHAT_URL = 'wss://localhost:7078/dashboard';

export interface Message {
  source: string;
  content: string;
}

@Injectable()
export class WebsocketService {
  private _ws: WebSocket;
  private subject: AnonymousSubject<MessageEvent>;
  public messages: Subject<Message>;

  constructor() {
    this.messages = <Subject<Message>>this.connect(CHAT_URL).pipe(
      map((response: MessageEvent): Message => {
        console.log(response.data.trim());
        let data = JSON.parse(response.data.trim());
        return data;
      })
    );
  }

  public connect(url): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): AnonymousSubject<MessageEvent> {
    this._ws = new WebSocket(url);
    let observable = new Observable((obs: Observer<MessageEvent>) => {
      this._ws.onmessage = obs.next.bind(obs);
      this._ws.onerror = obs.error.bind(obs);
      this._ws.onclose = obs.complete.bind(obs);
      return this._ws.close.bind(this._ws);
    });
    let observer = {
      error: null,
      onclose: (data: any) => {
        console.log('onclose', data);
      },
      complete: null,
      next: (data: Object) => {
        console.log('Message sent to websocket: ', data);
        if (this._ws.readyState === WebSocket.OPEN) {
          this._ws.send(JSON.stringify(data));
        }
      },
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }

  public close() {
    this._ws.close(1000, 'user diconnect');
  }
}
