import { Controller, OnStart } from "@flamework/core";
import { Events } from "client/network";

@Controller()
export class MyController implements OnStart {
	onStart() {
		Events.AnotherEvent.connect((message: string) => {
			print(message);
		});
	}
}
