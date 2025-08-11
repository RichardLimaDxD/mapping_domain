export class EmailNotifier {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(
      `📧 Email enviado para ${to} | Assunto: ${subject} | Mensagem: ${body}`
    );
  }
}
