import { Form } from "@/examples/components/form";
import { Input } from "@/examples/components/input";

export default function Home() {
  return (
    <section className="bg-white min-h-screen flex justify-center items-center">
      <Form.Root>
        <Form.Group>
          <Input variant="primary" placeholder="Digite seu nome" />
          <Input variant="secondary" placeholder="Digite seu nome" />
        </Form.Group>
      </Form.Root>
    </section>
  );
}
