import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default class EmailService{
    static async sendMail(to, from, subject, text, html){
        const msg = { to, from, subject, text, html };
        try {
            await sgMail.send(msg);
            return true;
        } catch (error) {
            return false;
        }
    }

    static async sendMailByTemplate(to, from, templateId, dynamic_template_data){
        const msg = { to, from, templateId,dynamic_template_data };
        
        try {
            await sgMail.send(msg);
            return true;
        } catch (error) {
            return false;
        }
    }

}