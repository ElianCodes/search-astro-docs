import { DocumentationEntry } from "../types/types";
import { preferences } from "../utils";

const lang = preferences.language ?? 'en';

export const documentationListV3: DocumentationEntry[] = [
  /* Getting Started */
  { title: "Getting Started", url: `https://docs.astro.build/${lang}/getting-started/`, keywords: ["stort", "sturt"] },
  { title: "Installation", url: `https://docs.astro.build/${lang}/install/auto/` },
  { title: "Editor Setup", url: `https://docs.astro.build/${lang}/editor-setup/` },
  /* Upgrade Guides */
  { title: "Upgrade to Astro v3", url: `https://docs.astro.build/${lang}/guides/upgrade-to/v3/` },
  { title: "Upgrade to Astro v2", url: `https://docs.astro.build/${lang}/guides/upgrade-to/v2/` },
  /* Core Concepts */
  { title: "Why Astro", url: `https://docs.astro.build/${lang}/concepts/why-astro/` },
  { title: "Islands", url: `https://docs.astro.build/${lang}/concepts/islands/` },
  /* Tutorials */
  { title: "Build a blog (tutorial)", url: `https://docs.astro.build/${lang}/tutorial/0-introduction/` },
  { title: "Content Collections (tutorial)", url: `https://docs.astro.build/${lang}/tutorials/add-content-collections/` },
  { title: "View Transitions (tutorial)", url: `https://docs.astro.build/${lang}/tutorials/add-view-transitions/` },
  /* Basics */
  /* Recipes */
  /* Guides */
  /* Packages */
  { title: "Tailwind" },
  /* Reference section */
  { title: "Configuration Reference", url: `https://docs.astro.build/${lang}/reference/configuration-reference/` },
  { title: "Runtime API Reference", url: `https://docs.astro.build/${lang}/reference/api-reference/` },
  { title: "Integration API Reference", url: `https://docs.astro.build/${lang}/reference/integrations-reference/` },
  { title: "Adapter API Reference", url: `https://docs.astro.build/${lang}/reference/adapter-reference/` },
  { title: "Image Service API Reference", url: `https://docs.astro.build/${lang}/reference/image-service-reference/` },
  { title: "Template Directives Reference", url: `https://docs.astro.build/${lang}/reference/directives-reference/` },
  { title: "CLI Reference", url: `https://docs.astro.build/${lang}/reference/cli-reference/` },
  { title: "Error Reference", url: `https://docs.astro.build/${lang}/reference/error-reference/` },
  { title: "Publish to NPM Reference", url: `https://docs.astro.build/${lang}/reference/publish-to-npm/` },
];
