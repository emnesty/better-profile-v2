import Head from "next/head"
import Link from "next/link"
import { Label } from "@radix-ui/react-dropdown-menu"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { Button, buttonVariants } from "@/components/ui/button"
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
      <section className="container col-span-2 items-center gap-9 pt-48 pb-9 pr-10 md:py-24">
        <div className="flex col-span-2 gap-6 py-9 justify-between">
          <div className="flex max-w-[625px] flex-col items-start gap-9 pb-9 py-9">
            <h1 className="text-2xl max-w-[625px] font-extrabold leading-tight tracking-normal sm:text-3xl md:text-3xl lg:text-5xl">
              Seu LinkedIn pronto para o mercado de trabalho.{" "}
            </h1>
            <p className="max-w-[625px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Aprimore seu perfil no LinkedIn com recomendações personalizadas!
              Sugerimos ações específicas para aumentar a visibilidade do seu
              perfil e atrair mais oportunidades profissionais.
            </p>
            <div className="flex max-w-full flex-row items-start gap-9 pb-9 py-9">
              <p className="text-lg text-slate-700 dark:text-slate-400 sm:text-sm pb-5 py-5 px-8">
                + Visibilidade
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-400 sm:text-sm pb-5 py-5 px-8">
                + Recomendações
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-400 sm:text-sm pb-5 py-5 px-8">
                + Engajamento
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
          <div className="flex max-w-[5200px]justify-end flex-col items-end gap-9 pb-9 py-9 px-8 bg-white border border-gray-200 rounded-3xl dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-2xl w-full leading-tight tracking-normal sm:text-3xl md:text-3xl lg:text-2xl">
              Cadastre-se para o teste beta!{" "}
            </h1>
            <p className="max-w-[440px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Enviaremos convites para os que quiserem testar em primeira mão
              nossa ferramenta.
            </p>
            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Input type="email" id="email-2" placeholder="Email" />
              <p className="text-sm text-slate-500 pb-5">
                Não se preocupe, não enviaremos spam
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
