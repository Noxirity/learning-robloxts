import { Service, OnStart } from "@flamework/core";
import { Events } from "server/network";

const Players = game.GetService("Players");

@Service()
export class TestingService implements OnStart {
	onStart() {
		Players.PlayerAdded.Connect((player) => {
			task.wait(2);
			Events.AnotherEvent.fire(player, `Welcome to the server, ${player.Name}!`);
		});
	}
}
