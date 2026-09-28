import Link from "next/link";

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
        <Link 
        href={"/product"} 
        style={{ fontSize: "1.2rem", color: "white" }}> Go to the Product Page</Link>
      </div>
    </main>
  );
}
