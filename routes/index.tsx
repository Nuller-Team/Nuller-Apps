import { Handlers, PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import Projects, { Project } from "@/components/Projects.tsx";
import apps from "@/data/apps.json" assert { type: "json" };

export default function Index(props: PageProps<string>) {
  const ogImageUrl = new URL(asset("/home-og.png"), props.url).href;
  const TITLE = "Nuller Apps｜N/S高生が開発するアプリ";
  const DESCRIPTION =
    `N/Sの開発チーム『Nuller』が手がけるアプリたちの一覧です。
    Googleアカウントのログインは必要ありません。`;
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <meta property="og:title" content={TITLE} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <div class="flex flex-col min-h-screen">
        <div class="flex-1">
          <Apps items={apps} />
        </div>
      </div>
    </>
  );
}

function Apps({ items }: { items: Project[] }) {
  return (
    <section class="max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">
        Nuller Apps
      </h2>
      <p class="text-gray-600">
        N/S高生の開発チーム『Nuller』が開発したアプリたちです。
      </p>
      <Projects items={items} class="gap-16" />
    </section>
  );
}
