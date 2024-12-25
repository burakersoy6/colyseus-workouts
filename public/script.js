const Colyseus = window.Colyseus;
const client = new Colyseus.Client('ws://localhost:2567');

const userList = document.getElementById("userList");

let lobbyRoom;

async function joinLobby() {
    try {
        lobbyRoom = await client.joinOrCreate("lobby");
        console.log("Joined Lobby");

        lobbyRoom.state.users.onAdd((user) => {
            addUserToList(user);
        });

        lobbyRoom.state.users.onRemove((user) => {
            removeUserFromList(user);
        });
    } catch (error) {
        console.error("Failed to join lobby:", error);
    }
}

function addUserToList(user) {
    const li = document.createElement("li");
    li.textContent = `User: ${user}`;
    li.id = user;
    userList.appendChild(li);
}

function removeUserFromList(user) {
    const li = document.getElementById(user);
    if (li) li.remove();
}

joinLobby();
