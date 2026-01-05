export default function Footer() {
  return (
    <footer className="relative mt-20 pt-20 bg-[#F0F0F0]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-black px-8 py-10 lg:px-16 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-black text-white lg:max-w-md">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="mt-8 lg:mt-0 lg:w-80 space-y-3">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full rounded-full py-3 px-12 text-sm outline-none"
              />
              <span className="absolute left-4 top-3.5 opacity-30">✉</span>
            </div>
            <button className="w-full rounded-full bg-white py-3 text-sm font-bold text-black hover:bg-white/90">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4 space-y-6">
            <span className="text-3xl font-black font-display tracking-tighter">djangoun</span>
            <p className="text-[11px] leading-relaxed text-black/60 uppercase tracking-widest">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-4 opacity-60">
              <span className="h-8 w-8 rounded-full border border-black/20 flex items-center justify-center cursor-pointer">𝕏</span>
              <span className="h-8 w-8 rounded-full border border-black/20 flex items-center justify-center cursor-pointer">f</span>
              <span className="h-8 w-8 rounded-full border border-black/20 flex items-center justify-center cursor-pointer">ig</span>
              <span className="h-8 w-8 rounded-full border border-black/20 flex items-center justify-center cursor-pointer">in</span>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
              { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
              { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
              { title: "RESOURCES", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] },
            ].map((group) => (
              <div key={group.title} className="space-y-6">
                <h4 className="text-[10px] font-bold tracking-[0.4em] text-black uppercase">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[10px] tracking-widest text-black/60 hover:text-black uppercase">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-12 border-black/5" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-[9px] uppercase tracking-[0.4em] text-black/40">© 2000-2026 djangoun, All Rights Reserved</p>
          <div className="flex gap-3 opacity-40">
            <span className="px-2 py-1 border border-black/10 rounded-sm text-[8px] font-bold">VISA</span>
            <span className="px-2 py-1 border border-black/10 rounded-sm text-[8px] font-bold">MC</span>
            <span className="px-2 py-1 border border-black/10 rounded-sm text-[8px] font-bold">PAYPAL</span>
            <span className="px-2 py-1 border border-black/10 rounded-sm text-[8px] font-bold">APPLE</span>
            <span className="px-2 py-1 border border-black/10 rounded-sm text-[8px] font-bold">GPAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
