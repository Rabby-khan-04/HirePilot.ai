export default function ContactForm() {
  return (
    <div className="lg:w-2/3">
      <div className="glass-card p-gutter md:p-12 rounded-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="font-mono-label text-mono-label text-on-surface-variant block mb-2">
              FULL NAME
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 font-body-md focus:border-primary transition-colors outline-none"
            />
          </div>

          <div>
            <label className="font-mono-label text-mono-label text-on-surface-variant block mb-2">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 font-body-md focus:border-primary transition-colors outline-none"
            />
          </div>

          <div>
            <label className="font-mono-label text-mono-label text-on-surface-variant block mb-2">
              INQUIRY TYPE
            </label>

            <select className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 font-body-md outline-none">
              <option>Support</option>
              <option>Feedback</option>
              <option>Feature Request</option>
              <option>Bug Report</option>
              <option>Business Inquiry</option>
            </select>
          </div>

          <div>
            <label className="font-mono-label text-mono-label text-on-surface-variant block mb-2">
              SUBJECT
            </label>

            <input
              type="text"
              placeholder="How can we help?"
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 font-body-md focus:border-primary transition-colors outline-none"
            />
          </div>

          <div className="col-span-2">
            <label className="font-mono-label text-mono-label text-on-surface-variant block mb-2">
              MESSAGE
            </label>

            <textarea
              rows={4}
              placeholder="Tell us more about your request..."
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant py-3 font-body-md focus:border-primary transition-colors resize-none outline-none"
            />
          </div>

          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="bg-primary text-on-primary px-12 py-4 font-mono rounded hover:bg-opacity-90 transition-all active:scale-[0.98] w-full md:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
