import { measureMemory } from "vm";
import { NotificationStrategy } from "./notification.strategy.interface";

export class PushNotificaton implements NotificationStrategy {
    send(message: string): void {
        console.log(`Push enviado: ${message}`)
    }
}