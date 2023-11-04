import { useState } from "react"

export default function HeaderComponent() {
  const [darkTheme, setDarkMode] = useState(false)

  const switchTheme = () => {
    const body = document.querySelector("body")

    if (darkTheme) {
      body.classList.add("dark")
    } else {
      body.classList.remove("dark")
    }

    setDarkMode(!darkTheme)
  }

  return (
    <>
      <header className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl text-slate-800 dark:text-white">
            Social Media Dashboard
          </h1>
          <p className="text-slate-600 font-bold dark:text-slate-400">
            Total Followers: 23,004
          </p>
        </div>

        
        <div className="switch">
          <label
            htmlFor="checkbox"
            className="font-bold text-slate-600 dark:text-slate-400 text-sm cursor-pointer"
          >
            Dark Mode
          </label>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={!darkTheme}
            onChange={switchTheme}
          />
          <label for="checkbox" className="label">
            <div className="circle"></div>
          </label>
        </div>
      </header>
    </>
  )
}