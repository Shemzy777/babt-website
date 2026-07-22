export default function VisionMissionSection() {
  return (
    <section className="bg-[var(--surface-alt)] section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Vision Section */}
          <div className="bg-white rounded-lg p-8 md:p-12 border border-[var(--border-light)] shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6 tracking-tight">
              Vision
            </h2>
            <div className="w-12 h-1 bg-[var(--blue)] rounded-full mb-6" />
            <p className="text-[var(--text-body)] text-lg leading-relaxed">
              To be a leading business consulting and professional services firm recognized for delivering innovative solutions that empower organizations to achieve excellence and sustainable growth.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg p-8 md:p-12 border border-[var(--border-light)] shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6 tracking-tight">
              Mission
            </h2>
            <div className="w-12 h-1 bg-[var(--blue)] rounded-full mb-6" />
            <p className="text-[var(--text-body)] text-lg leading-relaxed">
              To provide exceptional consulting, advisory, technology, and capacity development services that enhance business performance, strengthen compliance, optimize resources, and create long-term value for our clients.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
