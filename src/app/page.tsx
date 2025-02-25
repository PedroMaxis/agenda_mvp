
export default function Home() {
 return (
   <>
   <main className="flex min-h-screen flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-3xl text-center">Gerenciador de Eventos</h1>
    <p className="w-[500px] mt-6 text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit at eius deserunt alias reprehenderit, recusandae facere pariatur doloremque, corrupti maxime exercitationem cum, odit accusantium nihil officiis mollitia quo aperiam est!</p>
    <section className="flex gap-4 mt-16">
      <a href="/signin" className="text-center py-1 w-[200px] bg-purple-500 rounded-md h-8">Cadastrar</a>
      <a className="w-[200px] text-center py-1 bg-purple-300 rounded-md text-black">Logar</a>
    </section>
   </main>
   </>
 )
}
