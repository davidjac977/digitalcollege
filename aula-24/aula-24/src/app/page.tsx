import { Button } from "@/components/button";

export default function Home() {
  const name = 'David Serra'

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      {/*title.tsx => Title()*/}
      <h1 className="text-6xl">{name}</h1>
      {/*subtitle.tsx => SubTitle()*/}
      <div className="flex flex-col mt-6 gap-6">
        <Button title="Adicionar" variant="" />
        <Button title="Sair" variant="danger" />
        <Button title="Entrar" variant="success" />
      </div>
    </div>
  );
}
