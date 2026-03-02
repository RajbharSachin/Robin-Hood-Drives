export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Robin Hood Army</h3>
              <p className="text-gray-400 text-sm">Zero-funds volunteer organization</p>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Robin Hood Army. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }