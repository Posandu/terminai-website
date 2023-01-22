import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terminai - Generate CLI commands for your terminal</title>
        <meta
          name="description"
          content="Terminai - Generate CLI commands for your terminal with natural language"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-[#030307] font-mono">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Image
            src="/logo.png"
            width="200"
            height="200"
            alt="Logo"
            className="animate-pulse rounded-full shadow-2xl shadow-purple-600"
          />
          <h1 className="text-4xl font-bold text-white">Terminai</h1>
          <h2 className="text-xl text-white">
            Generate CLI commands for your terminal with natural language
          </h2>

          <p className="text-center">
            <a
              href="https://www.buymeacoffee.com/posandu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style={{ height: "50px", width: "190px" }}
              />
            </a>
          </p>

          <p className="text-lg text-gray-500">See it in action</p>

          <section>
            <h2 className="text-2xl text-white">
              <span className="inline-block rounded-full bg-blue-600 p-1 px-4 text-xs text-white">
                Step 1
              </span>{" "}
              Install the CLI
            </h2>

            <code className="mt-8 block rounded bg-slate-900 p-4 text-gray-300">
              <span className="text-green-400">npm</span> i -g terminai
            </code>
          </section>

          <section>
            <h2 className="text-2xl text-white">
              <span className="inline-block rounded-full bg-blue-600 p-1 px-4 text-xs text-white">
                Step 2
              </span>{" "}
              Run the config command
            </h2>

            <code className="mt-8 block rounded bg-slate-900 p-4 text-gray-300">
              <span className="text-green-400">terminai</span> config
              <pre>{`Terminai Configuration
√ API Key ... **************
? Shell » - Use arrow-keys. Return to submit.
    Bash
>   PowerShell
    CMD`}</pre>
            </code>
          </section>

          <section className="rounded p-10 shadow-xl shadow-purple-900">
            <h2 className="text-2xl text-white">
              <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 px-4 text-xs text-white">
                Final Step
              </span>{" "}
              <span className="bg-gradient-to-tr from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Generate
              </span>{" "}
            </h2>
            <code className="mt-8 block rounded bg-slate-900 p-4 text-gray-300">
              <span className="text-green-400">terminai</span>{" "}
              <span className="text-yellow-600">{`"Get all content inside .txt files and add it to yoyo.txt"`}</span>
              <pre>{`      Generating command... Hang tight!
      Generated command:
       (Get-Content *.txt) | Set-Content yoyo.txt
      Copied to clipboard!`}</pre>
            </code>
            *
          </section>

          <p className="mt-20 font-sans text-xs text-gray-200">
            *The generated command may be different and sometimes it may not
            work. Regenerate the command if it doesn{`'`}t work.
          </p>

          <p className="mt-20 font-sans text-gray-200">
            Created by{" "}
            <a className="text-blue-600 underline" href="https://posandu.me">
              @posandu
            </a>{" "}
            - Open source on{" "}
            <a
              className="text-blue-600 underline"
              href="https://github.com/Tronic247/terminai"
            >
              Github
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
