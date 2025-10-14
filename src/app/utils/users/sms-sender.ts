import twilio, { Twilio } from "twilio";
import NotificationSelector from "./notification-selector";
import { Sms } from "twilio/lib/twiml/VoiceResponse";



export class SMSsender implements NotificationSelector {

    accountSid: string;
    authToken: string;
    client: Twilio;
    message: string;


    constructor() {
        this.accountSid = "";
        this.authToken = "";
        this.client = twilio(this.accountSid, this.authToken);
        this.message = "verifica su numero"
    }



    public async getSender(to: string) {
        const body = this.message

        try {
            const message = await this.client.messages.create({
                from: "+15673646993",
                to,
                body
            });

            console.log("mensaje correctamente enviado");
        } catch (err) {
            console.error("ocurrio un error");
        }
    }


}


