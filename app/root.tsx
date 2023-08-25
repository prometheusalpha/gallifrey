import {
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { StylesPlaceholder } from "@mantine/remix";
import { json, LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { createHead } from "remix-island";
import stylesheet from "~/tailwind.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Gallifrey" },
    { name: "description", content: "Welcome to Gallifrey!" },
  ];
};

const myCache = createEmotionCache({ key: "mantine" });

export const Head = createHead(() => (
  <>
    <link rel="shortcut icon" href="/asterisk.svg" />
    <Meta />
    <StylesPlaceholder />
    <Links />
  </>
));

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader() {
  return json({
    ENV: {
      CLIENT_ID: process.env.CLIENT_ID,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      DOMAIN: process.env.DOMAIN,
    },
  });
}

export default function Root() {
  const data = useLoaderData<typeof loader>();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <>
      <div
        className={`${colorScheme} flex dark:bg-dark-900 dark:text-white`}
      >
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withNormalizeCSS
            theme={{
              colorScheme: colorScheme,
              fontFamily: "sans-serif",
              primaryColor: "teal",
              colors: {
                dark: [
                  "#b1bac4",
                  "#8b949e",
                  "#6e7681",
                  "#484f58",
                  "#30363d",
                  "#21262d",
                  "#161b22",
                  "#0d1117",
                  "#010409",
                ],
              },
            }}
            emotionCache={myCache}
            withGlobalStyles
          >
            <Outlet />
          </MantineProvider>
        </ColorSchemeProvider>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
        }}
      />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </>
  );
}
