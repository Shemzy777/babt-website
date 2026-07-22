import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import {
  BriefcaseIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  HandRaisedIcon,
  ShieldCheckIcon,
  StarIcon,
  UsersIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  ArrowRightCircleIcon,
  CheckCircleIcon,
  DocumentArrowUpIcon
} from '@heroicons/react/24/outline'
import Button from '../../components/ui/Button'

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Careers() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    console.log('Form submitted:', data)
    alert('Thank you for your application! We will be in touch soon.')
    reset()
  }

  const whyJoinItems = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Professional Growth',
      description: 'Clear career paths and regular performance reviews to help you advance.'
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: 'Continuous Learning',
      description: 'Access to training programs, certifications, and professional development.'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Collaborative Environment',
      description: 'Work alongside talented professionals in a supportive team atmosphere.'
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: 'Career Advancement',
      description: 'Internal promotion opportunities and leadership development programs.'
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Innovation & Technology',
      description: 'Work with cutting-edge tools and technologies to deliver solutions.'
    },
    {
      icon: <HandRaisedIcon className="w-8 h-8" />,
      title: 'Meaningful Impact',
      description: 'Help clients achieve their business goals and make a real difference.'
    }
  ]

  const cultureValues = [
    { icon: <ShieldCheckIcon className="w-7 h-7" />, title: 'Integrity' },
    { icon: <StarIcon className="w-7 h-7" />, title: 'Professionalism' },
    { icon: <ChartBarIcon className="w-7 h-7" />, title: 'Excellence' },
    { icon: <UsersIcon className="w-7 h-7" />, title: 'Teamwork' },
    { icon: <SparklesIcon className="w-7 h-7" />, title: 'Innovation' },
    { icon: <BuildingOfficeIcon className="w-7 h-7" />, title: 'Client Focus' }
  ]

  const jobOpenings = [
    {
      title: 'Senior Financial Analyst',
      department: 'Finance & Accounting',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      description: 'Analyze financial data, prepare reports, and support strategic decision-making.'
    },
    {
      title: 'Business Consultant',
      department: 'Business Advisory',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      description: 'Provide strategic advisory services to clients across various industries.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Technology Services',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and maintain web applications for our clients and internal systems.'
    }
  ]

  const careerAreas = [
    {
      title: 'Finance & Accounting',
      roles: ['Accountants', 'Financial Analysts', 'Auditors'],
      color: 'bg-blue-50 text-blue-700'
    },
    {
      title: 'Business Advisory',
      roles: ['Consultants', 'Risk Advisors', 'Strategy Specialists'],
      color: 'bg-navy-50 text-navy-700'
    },
    {
      title: 'Technology Services',
      roles: ['Developers', 'IT Support Specialists', 'Systems Analysts'],
      color: 'bg-cyan-50 text-cyan-700'
    },
    {
      title: 'Business Support Services',
      roles: ['Operations Officers', 'Project Coordinators', 'Administrative Professionals'],
      color: 'bg-slate-50 text-slate-700'
    }
  ]

  const recruitmentSteps = [
    { step: 1, title: 'Application Submission', icon: <ArrowRightCircleIcon className="w-8 h-8" /> },
    { step: 2, title: 'Application Review', icon: <CheckCircleIcon className="w-8 h-8" /> },
    { step: 3, title: 'Assessment', icon: <ChartBarIcon className="w-8 h-8" /> },
    { step: 4, title: 'Interview', icon: <UsersIcon className="w-8 h-8" /> },
    { step: 5, title: 'Selection', icon: <StarIcon className="w-8 h-8" /> },
    { step: 6, title: 'Offer & Onboarding', icon: <BriefcaseIcon className="w-8 h-8" /> }
  ]

  return (
    <>
      <Helmet>
        <title>Careers | BABT Business Support Solutions</title>
        <meta
          name="description"
          content="Build your career with BABT. Join a team of professionals committed to excellence, innovation, and value-driven business solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--navy-dark)]" style={{ minHeight: '85vh' }}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=85"
          alt="Professional team collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(100deg, rgba(0,24,64,0.95) 0%, rgba(0,42,92,0.85) 50%, rgba(0,42,92,0.55) 100%)' }}
        />
        <div className="relative container py-24 md:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <h1
                className="text-white font-extrabold leading-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                Build Your Career With BABT
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10">
                Join a team of professionals committed to delivering excellence, innovation, and value-driven business solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="#opportunities" variant="primary" size="lg" arrow>
                  View Opportunities
                </Button>
                <Button to="#submit-cv" variant="white-outline" size="lg">
                  Submit Your CV
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Join BABT */}
      <section className="py-20 bg-white">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[var(--navy)] font-bold text-3xl md:text-4xl mb-4">Why Join BABT?</h2>
              <p className="text-[var(--text-body)] text-lg">
                Discover what makes BABT an exceptional place to grow your career and make an impact.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-white border border-[var(--border-light)] rounded-xl hover:border-[var(--blue)] hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg bg-[var(--blue-50)] flex items-center justify-center text-[var(--blue)] mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-[var(--navy)] font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-[var(--text-body)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-[var(--navy-50)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-[var(--navy)] font-bold text-3xl md:text-4xl mb-6">Our Culture</h2>
                <p className="text-[var(--text-body)] text-lg mb-8">
                  At BABT, our culture is built on a foundation of core values that guide everything we do. These values shape how we work with each other and with our clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {cultureValues.map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[var(--border-light)]">
                      <div className="text-[var(--blue)]">{value.icon}</div>
                      <span className="text-[var(--navy)] font-semibold">{value.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=85"
                  alt="Company culture"
                  className="w-full rounded-xl shadow-xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[var(--navy)] font-bold text-3xl md:text-4xl mb-4">Career Opportunities</h2>
              <p className="text-[var(--text-body)] text-lg">
                Explore our current open positions and find the perfect role for you.
              </p>
            </div>
          </Reveal>
          {jobOpenings.length > 0 ? (
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="p-8 bg-white border border-[var(--border-light)] rounded-xl hover:border-[var(--blue)] hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-[var(--navy)] font-bold text-2xl mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-4">
                          <span className="flex items-center gap-1">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <UserGroupIcon className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <BriefcaseIcon className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                        <p className="text-[var(--text-body)]">{job.description}</p>
                      </div>
                      <Button to="#submit-cv" variant="primary" size="md" arrow>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-16 bg-white border border-[var(--border-light)] rounded-xl">
                <BriefcaseIcon className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-6" />
                <h3 className="text-[var(--navy)] font-bold text-2xl mb-4">No Current Openings</h3>
                <p className="text-[var(--text-body)] max-w-xl mx-auto">
                  There are currently no open positions. However, we welcome talented professionals to submit their CVs for future opportunities.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Career Areas */}
      <section className="py-20 bg-[var(--navy-50)]">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[var(--navy)] font-bold text-3xl md:text-4xl mb-4">Career Areas</h2>
              <p className="text-[var(--text-body)] text-lg">
                Explore the different career paths available at BABT and find where you belong.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {careerAreas.map((area, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="p-8 bg-white border border-[var(--border-light)] rounded-xl hover:border-[var(--blue)] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-[var(--navy)] font-bold text-2xl mb-4">{area.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.roles.map((role, i) => (
                      <span key={i} className={`px-4 py-2 rounded-full text-sm font-semibold ${area.color}`}>
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[var(--navy)] font-bold text-3xl md:text-4xl mb-4">Our Recruitment Process</h2>
              <p className="text-[var(--text-body)] text-lg">
                Learn about the steps you'll take to join our team.
              </p>
            </div>
          </Reveal>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-light)] -translate-x-1/2" />
            <div className="space-y-12">
              {recruitmentSteps.map((step, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-1" />
                    <div className="relative z-10 w-20 h-20 rounded-full bg-[var(--blue)] text-white flex items-center justify-center font-bold text-2xl">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="bg-white p-6 rounded-xl border border-[var(--border-light)]">
                        <h3 className="text-[var(--navy)] font-bold text-xl mb-2">
                          {step.step}. {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning & Development */}
      <section className="py-20 bg-[var(--navy)] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="font-bold text-3xl md:text-4xl mb-6">Learning & Development</h2>
                <p className="text-white/70 text-lg mb-8">
                  We invest heavily in our employees' growth and development to ensure they reach their full potential.
                </p>
                <ul className="space-y-4">
                  {[
                    'Employee development programs',
                    'Mentorship opportunities',
                    'Professional certifications',
                    'Continuous learning initiatives',
                    'Leadership development'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-[var(--blue)] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85"
                alt="Learning and development"
                className="w-full rounded-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internship & Graduate Opportunities */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85"
                alt="Graduate opportunities"
                className="w-full rounded-xl"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-[var(--navy)] font-bold text-3xl md:text-4xl mb-6">Internship & Graduate Opportunities</h2>
                <p className="text-[var(--text-body)] text-lg mb-8">
                  Kickstart your career with our structured internship and graduate programs designed to nurture the next generation of business professionals.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-[var(--blue-50)] rounded-lg">
                    <AcademicCapIcon className="w-8 h-8 text-[var(--blue)] flex-shrink-0" />
                    <div>
                      <h4 className="text-[var(--navy)] font-bold mb-1">Graduate Programs</h4>
                      <p className="text-[var(--text-body)] text-sm">Comprehensive programs for recent graduates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[var(--blue-50)] rounded-lg">
                    <BriefcaseIcon className="w-8 h-8 text-[var(--blue)] flex-shrink-0" />
                    <div>
                      <h4 className="text-[var(--navy)] font-bold mb-1">Internship Opportunities</h4>
                      <p className="text-[var(--text-body)] text-sm">Hands-on experience for students and young professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-[var(--blue-50)] rounded-lg">
                    <ChartBarIcon className="w-8 h-8 text-[var(--blue)] flex-shrink-0" />
                    <div>
                      <h4 className="text-[var(--navy)] font-bold mb-1">Entry-level Career Paths</h4>
                      <p className="text-[var(--text-body)] text-sm">Build a strong foundation for your career</p>
                    </div>
                  </div>
                </div>
                <Button to="#submit-cv" variant="primary" size="lg" arrow>
                  Apply Now
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Submit Your CV */}
      <section id="submit-cv" className="py-20 bg-[var(--navy-50)]">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[var(--navy)] font-bold text-3xl md:text-4xl mb-4">Submit Your CV</h2>
              <p className="text-[var(--text-body)] text-lg">
                We'd love to hear from you. Fill out the form below and we'll be in touch.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl border border-[var(--border-light)] shadow-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[var(--navy)] font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[var(--navy)] font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[var(--navy)] font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                      placeholder="+234 800 000 0000"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[var(--navy)] font-semibold mb-2">Position of Interest</label>
                    <select
                      {...register('position')}
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                    >
                      <option value="">Select a position</option>
                      <option value="senior-financial-analyst">Senior Financial Analyst</option>
                      <option value="business-consultant">Business Consultant</option>
                      <option value="full-stack-developer">Full Stack Developer</option>
                      <option value="other">Other / General Application</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[var(--navy)] font-semibold mb-2">Cover Letter / Message</label>
                  <textarea
                    {...register('coverLetter')}
                    rows={5}
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent"
                    placeholder="Tell us about yourself and why you'd like to join BABT..."
                  />
                </div>
                <div>
                  <label className="block text-[var(--navy)] font-semibold mb-2">CV Upload *</label>
                  <div className="border-2 border-dashed border-[var(--border)] rounded-lg p-8 text-center hover:border-[var(--blue)] transition-colors cursor-pointer">
                    <DocumentArrowUpIcon className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
                    <p className="text-[var(--text-body)] mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-[var(--text-muted)]">PDF, DOC, DOCX (Max 5MB)</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      {...register('cv', { required: 'Please upload your CV' })}
                      className="hidden"
                      id="cv-upload"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <Button variant="outline" size="md" className="mt-4">
                        Choose File
                      </Button>
                    </label>
                  </div>
                  {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>}
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    arrow
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--navy-dark)]">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-white font-bold text-3xl md:text-4xl mb-6">
                Ready to Build Your Future With BABT?
              </h2>
              <p className="text-white/70 text-lg mb-10">
                Join a team committed to excellence, innovation, and helping businesses achieve sustainable success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button to="#submit-cv" variant="primary" size="lg" arrow>
                  Apply Now
                </Button>
                <Button to="/ng/en/contact-us" variant="white-outline" size="lg">
                  Contact HR
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
