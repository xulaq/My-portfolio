import React, { useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { emailjsConfig } from '../../config/emailjs';
export default function FormModal() {
  const intl = useIntl();
  const ctaButton = intl.formatMessage({ id: 'cta.button' });
  const { locale } = useRouter();
  let notif = {
    success:
      locale === 'fr'
        ? 'Message envoyé avec succès'
        : 'Message sent successfully',
    error: locale === 'fr' ? 'Une erreur est survenue' : 'An error has occured',
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      let errorMessage =
        locale === 'fr'
          ? 'Veuillez remplir tous les champs'
          : 'Please fill all the fields';
      return toast.error(errorMessage, { position: toast.POSITION.TOP_RIGHT });
    }
    setLoading(true);
    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.info(notif.success, { position: toast.POSITION.TOP_RIGHT });
          setEmail('');
          setName('');
          setMessage('');
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error(notif.error, { position: toast.POSITION.TOP_RIGHT });
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <form ref={form} action="" onSubmit={submitHandle}>
        <div className="p-4 overflow-y-auto">
          <label
            htmlFor="input-label-email"
            className="block text-sm font-medium mb-2 text-left dark:text-white"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="user_email"
            placeholder={locale === 'fr' ? 'Exemple@domaine.com' : 'Example@domain.com'}
            id="input-label-email"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-600"
          />
        </div>
        <div className="p-4 overflow-y-auto">
          <label
            htmlFor="input-label-name"
            className="block text-sm font-medium mb-2 text-left dark:text-white"
          >
            {locale === 'fr' ? 'Nom' : 'Name'}
          </label>
          <input
            value={name}
            name="user_name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder={locale === 'fr' ? 'Votre nom' : 'Your name'}
            id="input-label-name"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-600"
          />
        </div>
        <div className="p-4 overflow-y-auto">
          <label
            htmlFor="input-label-message"
            className="block text-sm font-medium mb-2 text-left dark:text-white"
          >
            Message
          </label>
          <textarea
            name="message"
            value={message}
            placeholder={locale === 'fr' ? 'Votre message' : 'Your message'}
            onChange={(e) => setMessage(e.target.value)}
            id="input-label-message"
            className="py-3 px-4 h-32 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-blue- dark:border-gray-700 dark:text-gray-600"
          />
        </div>
        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
          <button
            type="submit"
            className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3  border-2 rounded-full dark:text-white text-black border-2 hover:bg-fun-pink hover:text-white hover:border-fun-pink  transition-colors"
          >
            {loading ? (
              <div className="border-gray-300 h-7 w-7 animate-spin rounded-full border-4 border-t-fun-pink"></div>
            ) : (
              <span>{locale === 'fr' ? 'Envoyer' : 'Send'}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <button
        type="button"
        className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3  border-2 rounded-full dark:text-white text-black border-2 hover:bg-fun-pink hover:text-white hover:border-fun-pink  transition-colors"
        data-="#hs-focus-management-modal"
      >
        {ctaButton}
      </button> */
}
