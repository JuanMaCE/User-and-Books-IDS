import * as nodemailer from "nodemailer";

class EmailSender {
    private transporter: nodemailer.Transporter;
    private from: string;
    private subject: string;
    private message: string;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "jk120365@gmail.com", // tu correo
                pass: "", // usa contraseña de aplicación
            },
        });

        this.from = "120365@gmail.com";
        this.subject = "Notificación automática";
        this.message = "Este es un mensaje enviado desde Node.js con TypeScript ";
    }

    public async sendEmail(to: string) {
        try {
            const info = await this.transporter.sendMail({
                from: this.from,
                to,
                subject: this.subject,
                text: this.message,
            });

            console.log("Correo enviado correctamente:");
        } catch (err) {
            console.error("Error al enviar el correo");
        }
    }
}

const emailSender = new EmailSender();
emailSender.sendEmail("jk1203651@gmail.com");
