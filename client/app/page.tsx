import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <Button href="/products">Go to the Products Page</Button>
      </div>
    </main>
  );
}
