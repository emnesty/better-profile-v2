import Head from "next/head"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Better Profile</title>
        <meta
          name="description"
          content="Sem perfil do Linkedin pronto para o mercado de trabalho"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container col-span-2 items-center gap-9 py-9 pr-10 pt-48 md:py-24">
        <div className="col-span-2 flex justify-between gap-6 py-9">
          <div className="flex max-w-[625px] flex-col items-start gap-9 py-9">
            <h1 className="max-w-[625px] text-2xl font-extrabold leading-tight tracking-normal sm:text-3xl md:text-3xl lg:text-5xl">
              Seu LinkedIn pronto para o mercado de trabalho.{" "}
            </h1>
            <p className="max-w-[625px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Aprimore seu perfil no LinkedIn com recomendações personalizadas!
              Sugerimos ações específicas para aumentar a visibilidade do seu
              perfil e atrair mais oportunidades profissionais.
            </p>
            <div className="max-w-[625px flex flex-col items-start">
              <h1 className="flex max-w-full flex-col items-start pb-5">
                Antes
              </h1>
              <p className="rounded-3xl border border-gray-200 bg-white px-8 py-5 pb-5 text-lg text-slate-700 dark:border-gray-700 dark:bg-gray-800 dark:text-slate-400 sm:text-sm">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="max-w-[625px flex flex-col items-start">
              <h1 className="flex max-w-full flex-col items-start pb-5">
                Depois
              </h1>
              <p className="rounded-3xl border border-gray-200 bg-white px-8 py-5 pb-5 text-lg text-slate-700 dark:border-gray-700 dark:bg-gray-800 dark:text-slate-400 sm:text-sm">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            {/* <div className="flex col-span-2 gap-20 py-9 justify-between">
              <h2 className="max-w-[225px] text-sm text-slate-700 dark:text-slate-400 sm:text-sm">
                + Visibilidade
              </h2>
              <h2 className="max-w-[225px] text-sm text-slate-700 dark:text-slate-400 sm:text-sm">
                + Resultados
              </h2>
              <h2 className="max-w-[225px] text-sm text-slate-700 dark:text-slate-400 sm:text-sm py-2 px-8 bg-slate-400 rounded-lg">
                + Retenção
              </h2>
            </div> */}
          </div>
          <div className="flex max-w-[520px] flex-col items-end justify-center gap-9 rounded-3xl border border-gray-200 bg-white px-8 dark:border-gray-700 dark:bg-gray-800">
            <h1 className="w-full text-2xl font-bold tracking-normal sm:text-3xl md:text-3xl lg:text-3xl">
              Better Profile{" "}
            </h1>
            <h1 className="w-full text-2xl leading-tight tracking-normal sm:text-3xl md:text-3xl lg:text-2xl">
              Cadastre-se para o beta!{" "}
            </h1>
            <p className="max-w-[440px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Enviaremos em breve convites para os que quiserem testar nossa
              ferramenta.
            </p>
            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Input type="email" id="email-2" placeholder="Email" />
              <p className="pb-5 text-sm text-slate-500">
                Não se preocupe, não enviaremos nenhum spam.
              </p>
              <Button size="lg" type="submit">
                Enviar
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div> */}
      </section>
    </Layout>
  )
}
