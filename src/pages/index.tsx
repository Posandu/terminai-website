import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Typist from "react-typist-component";

function GenerateCommand() {
  return (
    <code className="mt-8 block rounded bg-slate-900 p-4 text-gray-300">
      <Typist>
        <span className="text-green-400">terminai</span>{" "}
        <span className="text-yellow-600">
          &quot;Get all content inside .txt files and add it to yoyo.txt&quot;
        </span>
        <Typist.Delay ms={1000} />
        <br />
        <span className="text-yellow-600">
          Generating command... Hang tight!
        </span>
        <br />
        <Typist.Delay ms={1000} />
        <br />
        <span className="text-green-400">Generated command:</span>
        <br />
        <span className="text-slate-300">cat *.txt &gt;&gt; yoyo.txt</span>
        <br />
        <span className="text-blue-400">Copied to clipboard!</span>
      </Typist>
    </code>
  );
}

function ConfigCommand() {
  return (
    <code className="mt-8 block rounded bg-slate-900 p-4 text-gray-300">
      <Typist>
        <span className="text-green-400">terminai</span> config
        <Typist.Delay ms={1000} />
        <br />
        <span className="text-yellow-600">Terminai Configuration</span>
        <br />
        API Key: <span className="text-slate-300">*******************</span>
        <br />
        Shell: <span className="text-slate-300">bash</span>
        <br />
        Use Cache?: <span className="text-blue-400 underline">yes</span>
        <br />
        <span className="text-green-400">Config saved!</span>
      </Typist>
    </code>
  );
}

function InstallCommand() {
  return (
    <code className="mt-8 block rounded bg-slate-900 p-4 text-gray-300">
      <Typist>
        <span className="text-green-400">npm</span> i -g terminai
        <Typist.Delay ms={1000} />
        <br />
        <span className="text-green-400">Installing...</span>
        <Typist.Delay ms={1000} />
        <br />
        <span className="text-green-400">Installed successfully!</span> 🎉{" "}
        <br />
        <span className="text-slate-300">
          Run terminai config to get started
        </span>
      </Typist>
    </code>
  );
}

const Home: NextPage = () => {
  const [step, setStep] = useState(1);

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-[#030307]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Image
            src="/logo.png"
            width="100"
            height="100"
            alt="Logo"
            className="animate-pulse rounded-full shadow-2xl shadow-purple-600"
          />
          <h1 className="text-4xl font-light text-white">Terminai</h1>
          <h2 className="text-white">
            <Typist>
              Generate CLI commands for your terminal{" "}
              <span className="text-red-500 underline">manually</span>{" "}
              <Typist.Backspace count={9} />{" "}
              <span className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
                with AI
              </span>
            </Typist>
          </h2>

          <p className="text-lg text-gray-500">See it in action</p>

          {step === 1 && (
            <div>
              <h2 className="mb-4 text-xl text-white">
                <span className="mr-2 rounded-xl bg-gradient-to-tr from-black to-purple-800 px-3 py-1 text-sm">
                  STEP 1
                </span>
                Install terminai
              </h2>

              <InstallCommand />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="mb-4 text-xl text-white">
                <span className="mr-2 rounded-xl bg-gradient-to-tr from-purple-900 to-purple-600 px-3 py-1 text-sm">
                  STEP 2
                </span>
                Configure terminai
              </h2>

              <ConfigCommand />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="mb-4 text-xl text-white">
                <span className="mr-2 rounded-xl bg-gradient-to-tr from-blue-900 to-purple-600 px-3 py-1 text-sm">
                  Final Step
                </span>
                Generate commands
              </h2>

              <GenerateCommand />
            </div>
          )}

          <button
            onClick={() => step < 3 ? setStep(step + 1) : setStep(1)}
            className="mt-8 rounded-md bg-gradient-to-r from-purple-600 to-purple-900 px-4 py-2 text-white font-semibold transition-all hover:shadow-lg hover:shadow-purple-600"
          >
            Next Step
          </button>

          <p className="mt-20 font-sans text-xs text-gray-200">
            *The generated command may be different and sometimes it may not
            work. Regenerate the command if it doesn{`'`}t work.
          </p>


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

          <p className="mt-10 font-sans text-gray-200">
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
