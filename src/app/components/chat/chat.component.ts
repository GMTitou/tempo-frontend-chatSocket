import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from '@angular/common';
import {Socket} from "ngx-socket-io";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{
  userId!: number;
  message = '';
  messages: any[] = [];
  recipientId!: number;

  constructor(private chatService: ChatService, private socket: Socket) {}

  ngOnInit() {
    this.chatService.receiveMessage().subscribe((message) => {
      this.messages.push(message)
    })
    // if(typeof window !== 'undefined') {
      this.userId = Number(prompt('Enter your user ID'));
      this.chatService.joinRoom(this.userId);
      this.socket.connect()
    // }
  }

  sendMessage() {
    if(this.message.trim()) {
      this.chatService.sendMessage(this.userId, this.recipientId, this.message);
      this.message = '';
    }
  }
}
