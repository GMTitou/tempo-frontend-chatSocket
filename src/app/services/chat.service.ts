import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) {}

  sendMessage(fromId: number, toId: number, message: string) {
    this.socket.emit('send_message', { fromId, toId, message });
  }

  receiveMessage(): Observable<any> {
    return this.socket.fromEvent('receive_message');
  }

  joinRoom(userId: number) {
    this.socket.emit('join_room', userId);
  }
}
