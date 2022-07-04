export interface SendMessageResponseInterface {
  conversationId: string;
  message: any[];
  receiver: string;
  sender: string;
}


export interface ChatMessage {
  body: string;
  createdAt: Date;
  isRead: false
  receiverId: string;
  receiverName: string;
  senderId: string;
  senderName: string;
  _id: string;
}
