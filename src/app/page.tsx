import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/facebook"}>Facebook</Link> <hr />
      <Link href={"/tiktok"}>Tiktok</Link>
    </div>
  );
}
