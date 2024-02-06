import Banner from "./components/Banner";
import NavHeader from "./components/NavHeader";

export default function App() {
    const NavItems = ["About", "Services", "Contact"];

    return (<>
        <NavHeader items={NavItems} />

        <Banner />
        
        <section className="flex flex-col items-center justify-center h-svh border-cyan-400 border-4">
            <h1 className="text-4xl font-bold text-center">Hola, Soy Werlyn</h1>
            <p className="text-neutral">
                Y seré tu próximo desarrollador web
            </p>
        </section>
    </>)
}