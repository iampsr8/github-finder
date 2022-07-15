function Footer() {
    const footerYear=new Date().getFullYear()
  return (
      <footer className="footer p-10 bg-gray-700 text-primary-content footer-center ">
          <div>
              <p className="text-xs text-slate-200">&copy;{ footerYear} Prateek Rath</p>
          </div>
    </footer>
  )
}

export default Footer