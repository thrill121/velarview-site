export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-6 md:p-12">
      <section className="max-w-5xl mx-auto grid gap-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Velar View</h1>
          <p className="text-lg md:text-2xl">Aerial Imagery with Perspective</p>
        </header>

        <div className="p-6 shadow-xl rounded-2xl border">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p>
            Velar View is a veteran-owned drone videography company specializing in dynamic FPV interior shots, high-resolution exterior photography, and promotional video content for real estate and local businesses.
          </p>
        </div>

        <div className="p-6 shadow-xl rounded-2xl border">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>FPV Fly-Throughs for Real Estate & Businesses</li>
            <li>Interior & Exterior Real Estate Photography</li>
            <li>Custom Aerial Promotional Videos</li>
          </ul>
        </div>

        <div className="p-6 shadow-xl rounded-2xl border">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: <a href="mailto:william@velarview.org" className="text-blue-600 underline">william@velarview.org</a></p>
          <p>Phone: <a href="tel:6366889231" className="text-blue-600 underline">XXX-XX-XXXX</a></p>
        </div>

        <div className="text-center">
          <button className="text-lg px-8 py-4 rounded-2xl shadow-lg bg-black text-white hover:bg-gray-800 transition">
            Book a Free Interior Shoot
          </button>
        </div>
      </section>
    </main>
  );
}
