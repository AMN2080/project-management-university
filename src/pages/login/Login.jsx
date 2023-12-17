function Login() {
  return (
    <section className="h-[100vh] flex items-center justify-center bg-[url(./assets/img/login-background.svg)] bg-center">
      <div className="w-96 py-10 rounded-3xl flex items-center flex-col gap-y-4 justify-center bg-rgba-blue">
        <input className="h-10 rounded px-3 py-4 outline-0 text-center" type="text" placeholder="نام کاربری" />
        <input className="h-10 rounded px-3 py-4 outline-0 text-center" type="password" placeholder="رمز عبور" />
        <button className="w-80 text-white py-2 px-5 transition-all duration-500 rounded-md hover:rounded-xl mt-5 bg-sky-700 hover:bg-sky-500">ورود</button>
      </div>
    </section>
  )
}

export default Login;