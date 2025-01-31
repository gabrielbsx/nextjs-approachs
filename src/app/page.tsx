import { Input } from "@/examples/atoms/input.atom";

export default function Home() {
  return (
    <section className="bg-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <Input variant="primary" placeholder="Digite seu nome" />
        <Input variant="secondary" placeholder="Digite seu nome" />
      </div>
    </section>
  );
}
