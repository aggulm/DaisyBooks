import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { contactPageStyles as styles } from '../assets/dummystyles'
import { MessageSquare, Send, User } from 'lucide-react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xykzqvgv");

    if (state.succeeded) {
        return <p className="success">Mesajınız uğurla göndərildi!</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form space-y-6">

            <div className='space-y-2'>
                <label className={styles.labelStyle}>Email<span className='text-red-500'>*</span></label>
                <div className={styles.inputWrapperStyle}>
                    <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                    <input type="email" name="email" required className={styles.inputStyle} />
                </div>

                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className='space-y-2'>
                <label className={styles.labelStyle}>Mesaj<span className='text-red-500'>*</span></label>
                <div className={styles.inputWrapperStyle}>
                    <MessageSquare className='absolute left-3 top-3 text-gray-400 h-5 w-5' />
                    <textarea name="message" required className={styles.textareaStyle} rows={4} />
                </div>

                <ValidationError prefix="Mesaj" field="message" errors={state.errors} />
            </div>

            <button type="submit" disabled={state.submitting} className={`${styles.submitButtonStyle} md:col-span-2`}>
                <div className={styles.sendIconWrapperStyle}>
                    <Send className='w-5 h-5 mr-2' />
                    Göndər
                </div>
            </button>
        </form>
    );
}

export default ContactForm;