import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 NotFound",
  description: "Esta página não foi encontrada.",
}


export default function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-10 text-5xl">
                Página 404 não encontrada!
            </h1>
            <p>Essa página que você tentou acessar não existe!</p>
        </div>
    )
}