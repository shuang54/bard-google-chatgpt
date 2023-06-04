import ClientOnly from "./components/ClientOnly";
import NavMenu from "./components/NavMenu/NavMenu";

export default function Home() {
  return (
    <ClientOnly>
      <main className="flex flex-wrap h-screen w-screen pt-16">
          <NavMenu/>
        <div className="bg-blue-300 w-full md:w-3/4">右边</div>
      </main>
    </ClientOnly>
  )
}
