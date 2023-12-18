function Main(){
  return(
    <main className="lg:mr-80 p-5 text-blue-600 dark:text-blue-300">
        <section>
          <div className="h-full p-12 text-center flex flex-col lg:flex-row gap-y-20 items-center justify-between border-4 border-gray-400 dark:border-gray-200 border-dashed rounded">
            <div className="w-60 mx-4 p-12 break-words border-2 border-dashed rounded">
              <p>اعلانی موجود نیست</p>
            </div>
            <table className="border-gray-400 border-2">
              <thead>
                <tr className="text-blue-800 dark:text-blue-500">
                  <th className="border-gray-400 border-b-2 px-8 py-4">عنوان پروژه</th>
                  <th className="border-gray-400 border-b-2 px-8 py-4">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-8 py-4">آپولو یازده</td>
                  <td className="px-8 py-4">تایید استاد</td>
                </tr>
                <tr>
                  <td className="px-8 py-4">کاغذ دیواری</td>
                  <td className="px-8 py-4">رد استاد</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
  )
}

export default Main