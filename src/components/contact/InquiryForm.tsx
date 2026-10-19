import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
const EMAILJS_SERVICE_ID = env?.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = env?.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = env?.VITE_EMAILJS_PUBLIC_KEY;

const inquiryTypes = [
'General Corporate Inquiry',
'Partnership-Related Inquiry',
'Company Information',
'Project or Historical Information',
'Other'];

type FormState = {name: string;organization: string;email: string;type: string;message: string;};
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: '', organization: '', email: '', type: inquiryTypes[0], message: '' };

export function InquiryForm() {
  const [params] = useSearchParams();
  const [values, setValues] = useState<FormState>(() =>
  params.get('type') === 'partnership' ? { ...initial, type: 'Partnership-Related Inquiry' } : initial
  );
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [sendError, setSendError] = useState('');

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (values.message.trim().length < 10) next.message = 'Please enter a message of at least 10 characters.';
    setErrors(next);
    if (Object.keys(next).length) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSendError('The contact form is not configured yet. Please email us directly.');
      setStatus('error');
      return;
    }

    setSendError('');
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name.trim(),
          organization: values.organization.trim() || 'Not provided',
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          inquiry_type: values.type,
          message: values.message.trim()
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('sent');
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendError('Sorry, your inquiry could not be sent. Please try again or email us directly.');
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-sm border border-line bg-white p-8">
        <CheckCircle2Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">Inquiry sent</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
          Thank you, {values.name.split(' ')[0]}. Your inquiry has been received and will be directed to the
          appropriate member of the Cybertec team.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setSendError('');
            setStatus('idle');
          }}
          className="mt-6 text-sm font-semibold text-brand-700 hover:text-navy-900">
          
          Send another inquiry
        </button>
      </div>);

  }

  const field =
  'mt-1.5 block w-full rounded-sm border bg-white px-3.5 py-2.5 text-[15px] text-ink transition-colors duration-150 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100';

  return (
    <form onSubmit={submit} noValidate className="rounded-sm border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" error={errors.name} required>
          <input id="name" autoComplete="name" value={values.name} onChange={update('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={`${field} ${errors.name ? 'border-red-600' : 'border-line'}`} />
        </Field>
        <Field label="Organization" id="organization">
          <input id="organization" autoComplete="organization" value={values.organization} onChange={update('organization')} className={`${field} border-line`} />
        </Field>
        <Field label="Email" id="email" error={errors.email} required>
          <input id="email" type="email" autoComplete="email" value={values.email} onChange={update('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={`${field} ${errors.email ? 'border-red-600' : 'border-line'}`} />
        </Field>
        <Field label="Inquiry type" id="type">
          <select id="type" value={values.type} onChange={update('type')} className={`${field} border-line`}>
            {inquiryTypes.map((t) =>
            <option key={t}>{t}</option>
            )}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" id="message" error={errors.message} required>
            <textarea id="message" rows={5} value={values.message} onChange={update('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className={`${field} resize-y ${errors.message ? 'border-red-600' : 'border-line'}`} />
          </Field>
        </div>
      </div>
      {status === 'error' && sendError &&
      <p role="alert" className="mt-5 rounded-sm border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
          {sendError}
        </p>
      }
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted">Fields marked * are required.</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex min-h-[46px] items-center gap-2 rounded-sm bg-navy-900 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-700 disabled:opacity-70">
          
          {status === 'sending' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
          {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
        </button>
      </div>
    </form>);

}

interface FieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, id, error, required, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy-900">
        {label}
        {required && <span className="text-muted"> *</span>}
      </label>
      {children}
      {error &&
      <p id={`${id}-error`} className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      }
    </div>);

}