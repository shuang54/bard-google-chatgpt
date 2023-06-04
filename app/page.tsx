import ClientOnly from "./components/ClientOnly";
import DialogBox from "./components/DialogBox/DialogBox";
import NavMenu from "./components/NavMenu/NavMenu";

export default function Home() {
  return (
    <ClientOnly>
      <main className="flex flex-wrap h-screen w-screen pt-16">
          <NavMenu/>
          <DialogBox/>
      </main>
    </ClientOnly>
  )
}
