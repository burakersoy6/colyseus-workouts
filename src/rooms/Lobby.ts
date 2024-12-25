import { Room, Client } from "colyseus";
import { LobbyState } from "../schema/Lobby";

export class LobbyRoom extends Room<LobbyState> {
  onCreate() {
    console.log("Lobby Room Created!");
    this.setState(new LobbyState());
  }

  onJoin(client: Client) {
    console.log(`${client.sessionId} joined Lobby`);
    this.state.addUser(client.sessionId);
  }

  onLeave(client: Client) {
    console.log(`${client.sessionId} left Lobby`);
    this.state.removeUser(client.sessionId);
  }
}
