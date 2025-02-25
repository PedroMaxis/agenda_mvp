import Image from "next/image";

export default function Signin() {
 return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-5xl text-center">Entrar no Sistema</h1>
    <div className=" min-h-[560px] min-w-[400px] mt-10 font-[family-name:var(--font-geist-sans)] border-zinc-100 border-2 rounded-lg">
      <form className="p-10 flex flex-col items-center justify-start" action="">
        <label htmlFor="email">Email</label>
        <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input className="peer w-full bg-transparent placeholder:text-slate-100 text-slate-100 text-sm border-b-2 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-300 shadow-sm focus:shadow"/>
          <label className="absolute cursor-text bg-transparent px-1 left-2.5 top-2.5 text-slate-200 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-200 peer-focus:scale-90">
            Seu Email
          </label>
        </div>
        </div>
        <label htmlFor="password">Senha</label>
        <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative">
          <input className="peer w-full bg-transparent placeholder:text-slate-100 text-slate-100 text-sm border-b-2 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-100 hover:border-slate-300 shadow-sm focus:shadow"/>
          <label className="absolute cursor-text bg-transparent px-1 left-2.5 top-2.5 text-slate-200 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-200 peer-focus:scale-90">
            Sua Senha
          </label>
        </div>
      </div>
      <button type="submit" className="mt-10 w-[200px] text-center py-1 bg-purple-500 rounded-md h-8">Entrar</button>
      <a className="mt-4 text-slate-400 " href="/signin">Não tem uma conta?</a>
      </form>
      </div>

   </main>
   </>
 )
}
