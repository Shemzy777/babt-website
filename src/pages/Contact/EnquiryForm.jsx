import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'

const services = ['Accounting and Financial Advisory', 'Business Performance Management', 'Payroll Management', 'IT and Technical Support', 'Tax Advisory', 'Fixed Asset Management', 'Internal Audit and Risk Management', 'Other']

const inputCls = err => `w-full px-4 py-3 text-sm border rounded focus:outline-none focus:border-[var(--blue)] bg-white transition-colors ${err ? 'border-red-400' : 'border-[var(--border)]'}`

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()
  const onSubmit = async data => { await new Promise(r => setTimeout(r, 1000)); console.log(data); setSubmitted(true) }

  return (
    <>
      <Helmet><title>Enquiry Form | BABT Business Support Solutions</title></Helmet>
      <PageBanner title="Enquiry form" subtitle="Fill in the form below and one of our specialists will be in touch." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Contact us', href: '/ng/en/contact-us' }, { label: 'Enquiry form' }]} />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-16 bg-[var(--blue-50)] border border-[var(--blue-100)] rounded px-8">
                <CheckCircleIcon className="w-12 h-12 text-[var(--blue)] mx-auto mb-4" />
                <h2 className="font-bold text-[var(--text)] text-2xl mb-2 tracking-tight">Thank you for your enquiry</h2>
                <p className="text-[var(--text-body)] text-sm">A member of our team will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-2">First name <span className="text-red-400">*</span></label><input type="text" {...register('firstName', { required: 'Required' })} className={inputCls(errors.firstName)} />{errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}</div>
                  <div><label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-2">Last name <span className="text-red-400">*</span></label><input type="text" {...register('lastName', { required: 'Required' })} className={inputCls(errors.lastName)} />{errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}</div>
                </div>
                <div><label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-2">Email address <span className="text-red-400">*</span></label><input type="email" {...register('email', { required: 'Required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} className={inputCls(errors.email)} />{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}</div>
                <div><label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-2">Phone number</label><input type="tel" {...register('phone')} className={inputCls(false)} /></div>
                <div><label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-2">Company / Organisation</label><input type="text" {...register('company')} className={inputCls(false)} /></div>
                <div><label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-2">Service of interest <span className="text-red-400">*</span></label><select {...register('service', { required: 'Required' })} className={inputCls(errors.service)}><option value="">Select a service...</option>{services.map(s => <option key={s} value={s}>{s}</option>)}</select>{errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}</div>
                <div><label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-2">Your message <span className="text-red-400">*</span></label><textarea rows={5} {...register('message', { required: 'Required', minLength: { value: 20, message: 'Min 20 characters' } })} className={`${inputCls(errors.message)} resize-none`} />{errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}</div>
                <div className="flex items-start gap-3 p-4 bg-[var(--surface-alt)] border border-[var(--border-light)] rounded">
                  <input type="checkbox" id="consent" {...register('consent', { required: 'Required' })} className="mt-0.5 w-4 h-4 accent-[var(--blue)]" />
                  <label htmlFor="consent" className="text-sm text-[var(--text-body)] leading-relaxed">I agree to the <a href="/ng/en/legals/legal-and-privacy" className="text-[var(--blue)] hover:underline font-medium">Privacy Policy</a> and consent to BABT Business Support Solutions processing my personal data. <span className="text-red-400">*</span></label>
                </div>
                {errors.consent && <p className="text-xs text-red-500">{errors.consent.message}</p>}
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3.5 bg-[var(--blue)] text-white font-semibold text-sm rounded hover:bg-[var(--blue-mid)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
