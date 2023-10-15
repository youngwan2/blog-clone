import Image from "next/image";
import Link from "next/link";
export default function Profile() {
  return (
    <section className="flex justify-center text-center flex-col">
      <Image
        className=" rounded-full bg-black mx-auto m-5"
        src={"/profile.img"}
        alt="profileImage"
        width={200}
        height={200}
      />
      <h2 className="text-2xl font-bold">안녕하세요. 김영완입니다.</h2>
      <h3 className="text-xl">프론트엔드 엔지니어</h3>
      <p>끈질긴 개발자, 안 되면 될 때 까지</p>
      <Link
        className="rounded-3xl bg-yellow-500 w-28 inline-block mx-auto m-2 hover:bg-yellow-300 ease-in-out duration-300 transition"
        href="/contact"
      >
        <button>Contact me!</button>
      </Link>
    </section>
  );
}
