import { Schema, type, ArraySchema } from "@colyseus/schema";

export class LobbyState extends Schema {
    @type(["string"])
    users = new ArraySchema<string>();

    addUser(sessionId: string) {
        this.users.push(sessionId);
    }

    removeUser(sessionId: string) {
        const index = this.users.indexOf(sessionId);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }
}
