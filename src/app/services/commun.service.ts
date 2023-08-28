import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommunService {

  /*userDetailsId;

  constructor(private webSocketService: WebSocketService, private toastService: ToastrService) {
  }*/
  constructor() {
  }

  /*getWebSocket(): any {
    return this.webSocketService.connect();
  }
  getToastService(): ToastrService {
    return this.toastService;
  }*/

  playNotificationAudio(): void {
    const audio = new Audio();
    audio.src = '../../../assets/audio/success.mp3';
    audio.load();
    audio.play();
  }
}
