import { LoginForm } from "@/auth";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full">
                <h1 className="text-center font-extrabold">Iniciar Sesion</h1>
                {/* FORMULARIO DE LOGUEO */}
                <LoginForm/>
            </div>
        </div>
    );
}