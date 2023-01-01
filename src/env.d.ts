/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly AIRTABLE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
