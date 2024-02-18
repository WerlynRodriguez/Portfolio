import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import "./app.css"
import InputCopy from "./components/InputCopy";

export default function App() {
    const { t } = useTranslation();

    return (<>
        <Header/>

        <main>
        
            <section id="banner" className="hero min-h-96">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">
                            {t('salute')}
                        </h1>
                        <p className="py-6">
                            {t('saluteDesc')}
                        </p>
                        <a className="btn btn-primary" href="#contact">
                            Let's talk
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center">
                        Contacto
                    </h2>
                    <p className="text-center py-6">
                        Puedes contactarme a través de mi correo electrónico
                    </p>
                    {/* Show the emai inside input, When user click the email, it should be copied to clipboard */}
                    <div className="flex justify-center">
                        <InputCopy label="rdwerlynjose.16@gmail.com" />
                    </div>
                </div>
            </section>

        </main>
    </>)
}