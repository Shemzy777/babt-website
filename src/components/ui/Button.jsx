import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const variants = {
  primary:       'bg-[var(--blue)] text-white border-transparent hover:bg-[var(--blue-mid)]',
  secondary:     'bg-transparent text-[var(--navy)] border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white',
  outline:       'bg-transparent text-[var(--blue)] border-[var(--blue)] hover:bg-[var(--blue)] hover:text-white',
  white:         'bg-white text-[var(--navy)] border-transparent hover:bg-white/90',
  'white-outline':'bg-transparent text-white border-white/60 hover:bg-white hover:text-[var(--navy)]',
  ghost:         'bg-transparent text-[var(--text-body)] border-[var(--border)] hover:border-[var(--blue)] hover:text-[var(--blue)]',
  dark:          'bg-[var(--navy)] text-white border-transparent hover:bg-[var(--navy-dark)]',
}

const sizes = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-sm gap-2',
  xl: 'px-8 py-4 text-base gap-2',
}

export default function Button({
  children, href, to, variant = 'primary', size = 'md',
  arrow = false, external = false, className = '', ...props
}) {
  const cls = clsx(
    'inline-flex items-center font-semibold border rounded transition-colors duration-150 cursor-pointer',
    variants[variant], sizes[size], className
  )
  const content = <>{children}{arrow && <ArrowRightIcon className="w-3.5 h-3.5 flex-shrink-0" />}</>

  if (to) return <Link to={to} className={cls} {...props}>{content}</Link>
  if (href) return (
    <a href={href} className={cls}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}>{content}</a>
  )
  return <button className={cls} {...props}>{content}</button>
}
