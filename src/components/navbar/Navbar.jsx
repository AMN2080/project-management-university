function Navbar(){
  return(
    <nav className="flex dark:bg-slate-700 dark:text-gray-50 items-center h-14 lg:mr-80 px-5 shadow-md">
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" id="showOffcanvas" className="text-white dark:hover:text-white bg-indigo-700 hover:bg-transparent hover:text-indigo-700 transition border border-indigo-700 dark:hover:border-white rounded w-10 ml-5 p-1 cursor-pointer lg:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      {/* dark mode */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" id="darkBtn" className="h-6 dark:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
      {/* light mode */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" id="lightBtn" className="h-6 hidden dark:block">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      <img className="w-10 mr-5 border-2 border-green-500 rounded-full" src="./src/assets/img/profile.jpg" alt="" /> 
    </nav>
  )
}

export default Navbar